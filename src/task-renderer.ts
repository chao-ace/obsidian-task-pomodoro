import { TimerState } from "./types";

export class TaskRenderer {
	private emoji: string;

	constructor(emoji: string) {
		this.emoji = emoji;
	}

	updateEmoji(emoji: string) {
		this.emoji = emoji;
	}

	/** Format remaining seconds as MM:SS */
	formatTime(totalSeconds: number): string {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	}

	/** Format hours as x.xh */
	formatHours(hours: number): string {
		if (hours <= 0) return "";
		const rounded = Math.round(hours * 10) / 10;
		if (rounded === Math.floor(rounded)) {
			return `${rounded}h`;
		}
		return `${rounded}h`;
	}

	/**
	 * Build the inline timer button for an active (incomplete) task.
	 */
	createButton(
		state: TimerState,
		remainingSeconds: number,
		totalWorkSeconds: number,
		pomodoroCount: number,
		onClick: () => void
	): HTMLSpanElement {
		const btn = document.createElement("span");
		btn.className = `task-pomo-btn ${state}`;

		const label = document.createElement("span");
		label.className = "task-pomo-label";

		switch (state) {
			case "idle":
				label.textContent = `▶ ${this.formatTime(totalWorkSeconds)}`;
				break;
			case "working":
				label.textContent = `⏱ ${this.formatTime(remainingSeconds)}`;
				break;
			case "paused":
				label.textContent = `⏸ ${this.formatTime(remainingSeconds)}`;
				break;
			case "break":
				label.textContent = `☕ ${this.formatTime(remainingSeconds)}`;
				break;
		}

		btn.appendChild(label);

		if (pomodoroCount > 0) {
			const count = document.createElement("span");
			count.className = "task-pomo-count";
			count.textContent = " " + this.emoji.repeat(pomodoroCount);
			btn.appendChild(count);
		}

		btn.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			onClick();
		});

		return btn;
	}

	/**
	 * Build the time summary for a completed task.
	 * Shows 🍅🍅 0.8h (no button, no interaction).
	 */
	createCompletedSummary(pomodoroCount: number, totalHours: number): HTMLSpanElement {
		const el = document.createElement("span");
		el.className = "task-pomo-summary";

		const parts: string[] = [];
		if (pomodoroCount > 0) {
			parts.push(this.emoji.repeat(pomodoroCount));
		}
		const hoursStr = this.formatHours(totalHours);
		if (hoursStr) {
			parts.push(hoursStr);
		}

		if (parts.length > 0) {
			el.textContent = " " + parts.join(" ");
		}

		return el;
	}

	/** Update an existing button's display */
	updateButton(
		btn: HTMLSpanElement,
		state: TimerState,
		remainingSeconds: number,
		totalWorkSeconds: number,
		pomodoroCount: number
	) {
		const label = btn.querySelector(".task-pomo-label") as HTMLSpanElement;
		if (!label) return;

		btn.className = `task-pomo-btn ${state}`;

		switch (state) {
			case "idle":
				label.textContent = `▶ ${this.formatTime(totalWorkSeconds)}`;
				break;
			case "working":
				label.textContent = `⏱ ${this.formatTime(remainingSeconds)}`;
				break;
			case "paused":
				label.textContent = `⏸ ${this.formatTime(remainingSeconds)}`;
				break;
			case "break":
				label.textContent = `☕ ${this.formatTime(remainingSeconds)}`;
				break;
			case "completed":
				btn.innerHTML = "";
				btn.className = "task-pomo-summary";
				return;
		}

		let countEl = btn.querySelector(".task-pomo-count") as HTMLSpanElement;
		if (pomodoroCount > 0) {
			if (!countEl) {
				countEl = document.createElement("span");
				countEl.className = "task-pomo-count";
				btn.appendChild(countEl);
			}
			countEl.textContent = " " + this.emoji.repeat(pomodoroCount);
		} else if (countEl) {
			countEl.remove();
		}
	}
}
