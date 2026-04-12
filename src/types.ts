export type TimerState = "idle" | "working" | "paused" | "break" | "completed";
export type TaskKey = string;

export interface TaskTimerState {
	key: TaskKey;
	filePath: string;
	lineNumber: number;
	taskFingerprint: string;
	state: TimerState;
	remainingSeconds: number;
	totalWorkSeconds: number;
	totalBreakSeconds: number;
	pomodoroCount: number;
	startedAt: number | null;
	totalWorkedSeconds: number;
}

export interface TaskPomodoroSettings {
	language: string;
	workMinutes: number;
	shortBreakMinutes: number;
	longBreakMinutes: number;
	intervalsBeforeLongBreak: number;
	pomodoroEmoji: string;
	showInStatusBar: boolean;
	soundEnabled: boolean;
	soundVolume: number;
	selectedSound: string;
	customSoundUrl: string;
	notificationEnabled: boolean;
	persistentNotification: boolean;
	autoStartBreak: boolean;
	autoProgressEnabled: boolean;
}

export const DEFAULT_SETTINGS: TaskPomodoroSettings = {
	language: "en",
	workMinutes: 25,
	shortBreakMinutes: 5,
	longBreakMinutes: 15,
	intervalsBeforeLongBreak: 4,
	pomodoroEmoji: "\u{1F345}",
	showInStatusBar: true,
	soundEnabled: true,
	soundVolume: 0.5,
	selectedSound: "chime",
	customSoundUrl: "",
	notificationEnabled: true,
	persistentNotification: false,
	autoStartBreak: true,
	autoProgressEnabled: false,
};
