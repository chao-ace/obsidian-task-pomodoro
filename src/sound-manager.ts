import { App, Notice } from "obsidian";
import { TaskPomodoroSettings } from "./types";

const CDN_BASE = "https://cdn.jsdelivr.net/gh/semanticdata/dotfiles@latest/assets/";

const BUILT_IN_SOUNDS: Record<string, string> = {
	chime: "chime.wav",
	correct: "correct.wav",
	ding: "ding.wav",
	jingle: "jingle.wav",
	triangle: "triangle.wav",
};

const MIME_MAP: Record<string, string> = {
	".wav": "audio/wav",
	".mp3": "audio/mpeg",
	".ogg": "audio/ogg",
	".m4a": "audio/mp4",
	".webm": "audio/webm",
};

export class SoundManager {
	private app: App;
	private settings: TaskPomodoroSettings;
	private currentAudio: HTMLAudioElement | null = null;
	private blobUrl: string | null = null;

	constructor(app: App, settings: TaskPomodoroSettings) {
		this.app = app;
		this.settings = settings;
	}

	updateSettings(settings: TaskPomodoroSettings) {
		this.settings = settings;
	}

	getBuiltInSounds(): string[] {
		return Object.keys(BUILT_IN_SOUNDS);
	}

	private async getSoundUrl(): Promise<string | null> {
		const selected = this.settings.selectedSound;

		// Built-in sound
		if (BUILT_IN_SOUNDS[selected]) {
			return CDN_BASE + BUILT_IN_SOUNDS[selected];
		}

		// Custom sound
		const customPath = this.settings.customSoundUrl.trim();
		if (!customPath) return null;

		// External URL
		if (customPath.startsWith("http://") || customPath.startsWith("https://")) {
			return customPath;
		}

		// Vault file
		try {
			const binary = await this.app.vault.adapter.readBinary(customPath);
			const ext = customPath.substring(customPath.lastIndexOf(".")).toLowerCase();
			const mimeType = MIME_MAP[ext] || "audio/wav";
			const blob = new Blob([binary], { type: mimeType });
			this.cleanupBlobUrl();
			this.blobUrl = URL.createObjectURL(blob);
			return this.blobUrl;
		} catch {
			new Notice(`无法加载音效文件: ${customPath}`, 3000);
			return null;
		}
	}

	async play(): Promise<void> {
		if (!this.settings.soundEnabled) return;

		this.stopCurrentAudio();

		const url = await this.getSoundUrl();
		if (!url) return;

		try {
			const audio = new Audio();
			audio.volume = this.settings.soundVolume;
			audio.preload = "auto";

			await new Promise<void>((resolve, reject) => {
				const timeout = setTimeout(() => {
					reject(new Error("Audio load timeout"));
				}, 5000);

				audio.addEventListener("canplaythrough", () => {
					clearTimeout(timeout);
					resolve();
				}, { once: true });

				audio.addEventListener("error", () => {
					clearTimeout(timeout);
					reject(new Error("Audio load error"));
				}, { once: true });

				audio.src = url;
				audio.load();
			});

			this.currentAudio = audio;
			await audio.play();
		} catch {
			// Silently fail — audio is not critical
		}
	}

	stopCurrentAudio() {
		if (this.currentAudio) {
			this.currentAudio.pause();
			this.currentAudio.currentTime = 0;
			this.currentAudio = null;
		}
	}

	private cleanupBlobUrl() {
		if (this.blobUrl) {
			URL.revokeObjectURL(this.blobUrl);
			this.blobUrl = null;
		}
	}

	cleanup() {
		this.stopCurrentAudio();
		this.cleanupBlobUrl();
	}
}
