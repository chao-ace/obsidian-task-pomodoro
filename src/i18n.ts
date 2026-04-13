/**
 * Internationalization support for Task Pomodoro.
 *
 * To add a new language:
 * 1. Add a key to `LANGUAGES` below
 * 2. Copy the `en` object and translate all values
 * 3. Add the option in settings-tab.ts language dropdown
 */

export type Locale = "en" | "zh-CN";

interface TranslationStrings {
	// Settings tab — headings
	SETTINGS_HEADING: string;
	SETTINGS_TIMER: string;
	SETTINGS_BEHAVIOR: string;
	SETTINGS_DISPLAY: string;
	SETTINGS_SOUND: string;
	SETTINGS_RESET: string;
	SETTINGS_LANGUAGE: string;

	// Settings tab — timer
	WORK_DURATION_NAME: string;
	WORK_DURATION_DESC: string;
	SHORT_BREAK_NAME: string;
	SHORT_BREAK_DESC: string;
	LONG_BREAK_NAME: string;
	LONG_BREAK_DESC: string;
	LONG_BREAK_INTERVAL_NAME: string;
	LONG_BREAK_INTERVAL_DESC: string;

	// Settings tab — behavior
	AUTO_START_BREAK_NAME: string;
	AUTO_START_BREAK_DESC: string;
	AUTO_PROGRESS_NAME: string;
	AUTO_PROGRESS_DESC: string;
	PERSISTENT_NOTIFICATION_NAME: string;
	PERSISTENT_NOTIFICATION_DESC: string;

	// Settings tab — display
	POMODORO_EMOJI_NAME: string;
	POMODORO_EMOJI_DESC: string;
	STATUS_BAR_NAME: string;
	STATUS_BAR_DESC: string;

	// Settings tab — sound
	SOUND_ENABLED_NAME: string;
	SOUND_ENABLED_DESC: string;
	SOUND_SELECT_NAME: string;
	SOUND_SELECT_DESC: string;
	SOUND_PREVIEW: string;
	SOUND_CUSTOM_NAME: string;
	SOUND_CUSTOM_DESC: string;
	SOUND_CUSTOM_PLACEHOLDER: string;
	SOUND_VOLUME_NAME: string;
	SOUND_VOLUME_DESC: string;
	SOUND_TEST: string;

	// Settings tab — reset
	RESET_SESSION_NAME: string;
	RESET_SESSION_DESC: string;
	RESET_BUTTON: string;

	// Commands
	CMD_TOGGLE: string;
	CMD_STOP: string;
	CMD_RESET: string;
	CMD_RESET_SESSION: string;
	CMD_TOGGLE_SOUND: string;
	CMD_TOGGLE_STATUSBAR: string;

	// Notifications
	NOTICE_WORK_COMPLETE: string;
	NOTICE_LONG_BREAK: string;
	NOTICE_BREAK_COMPLETE: string;
	NOTICE_AUTO_START: string;
	NOTICE_SOUND_LOAD_ERROR: string;

	// Settings tab — ambient
	SETTINGS_AMBIENT: string;
	AMBIENT_ENABLED_NAME: string;
	AMBIENT_ENABLED_DESC: string;
	AMBIENT_SELECT_NAME: string;
	AMBIENT_SELECT_DESC: string;
	AMBIENT_VOLUME_NAME: string;
	AMBIENT_VOLUME_DESC: string;
	AMBIENT_PREVIEW: string;
	AMBIENT_STOP: string;
	AMBIENT_AUTOPLAY_NAME: string;
	AMBIENT_AUTOPLAY_DESC: string;
	AMBIENT_PLAY_ON_BREAK_NAME: string;
	AMBIENT_PLAY_ON_BREAK_DESC: string;

	// Commands — ambient
	CMD_TOGGLE_AMBIENT: string;
}

const en: TranslationStrings = {
	SETTINGS_HEADING: "Task Pomodoro",
	SETTINGS_TIMER: "Timer",
	SETTINGS_BEHAVIOR: "Behavior",
	SETTINGS_DISPLAY: "Display",
	SETTINGS_SOUND: "Sound",
	SETTINGS_RESET: "Reset",
	SETTINGS_LANGUAGE: "Language",

	WORK_DURATION_NAME: "Work duration (minutes)",
	WORK_DURATION_DESC: "Length of each work session",
	SHORT_BREAK_NAME: "Short break (minutes)",
	SHORT_BREAK_DESC: "Break after each pomodoro",
	LONG_BREAK_NAME: "Long break (minutes)",
	LONG_BREAK_DESC: "Break after N consecutive pomodoros",
	LONG_BREAK_INTERVAL_NAME: "Long break interval",
	LONG_BREAK_INTERVAL_DESC: "Trigger long break after this many pomodoros",

	AUTO_START_BREAK_NAME: "Auto-start break",
	AUTO_START_BREAK_DESC: "Automatically start break countdown after a work session",
	AUTO_PROGRESS_NAME: "Auto-progress",
	AUTO_PROGRESS_DESC: "Automatically start next work session after break",
	PERSISTENT_NOTIFICATION_NAME: "Persistent reminder",
	PERSISTENT_NOTIFICATION_DESC: "Keep reminding until manually dismissed (mutually exclusive with auto-progress)",

	POMODORO_EMOJI_NAME: "Pomodoro emoji",
	POMODORO_EMOJI_DESC: "Emoji used to mark completed pomodoros",
	STATUS_BAR_NAME: "Show in status bar",
	STATUS_BAR_DESC: "Display active timer in the status bar",

	SOUND_ENABLED_NAME: "Sound notification",
	SOUND_ENABLED_DESC: "Play a sound when a pomodoro completes",
	SOUND_SELECT_NAME: "Sound",
	SOUND_SELECT_DESC: "Choose the notification sound",
	SOUND_PREVIEW: "Preview",
	SOUND_CUSTOM_NAME: "Custom sound",
	SOUND_CUSTOM_DESC: "Vault path or URL to an audio file (.wav, .mp3, .ogg, .m4a, .webm)",
	SOUND_CUSTOM_PLACEHOLDER: "e.g. audio/bell.mp3 or https://example.com/ding.mp3",
	SOUND_VOLUME_NAME: "Volume",
	SOUND_VOLUME_DESC: "Adjust the notification volume",
	SOUND_TEST: "Test",

	RESET_SESSION_NAME: "Reset pomodoro session",
	RESET_SESSION_DESC: "Reset all timers and work interval counts",
	RESET_BUTTON: "Reset",

	CMD_TOGGLE: "Toggle pomodoro for task under cursor",
	CMD_STOP: "Stop pomodoro for task under cursor",
	CMD_RESET: "Reset pomodoro for task under cursor",
	CMD_RESET_SESSION: "Reset entire pomodoro session",
	CMD_TOGGLE_SOUND: "Toggle sound on/off",
	CMD_TOGGLE_STATUSBAR: "Toggle status bar display",

	NOTICE_WORK_COMPLETE: "Pomodoro complete! {} min break",
	NOTICE_LONG_BREAK: "Pomodoro complete! Long break {} min",
	NOTICE_BREAK_COMPLETE: "Break over! Ready for the next pomodoro",
	NOTICE_AUTO_START: "Auto-starting next pomodoro!",
	NOTICE_SOUND_LOAD_ERROR: "Cannot load sound file: {}",

	SETTINGS_AMBIENT: "Ambient Sound",
	AMBIENT_ENABLED_NAME: "Enable ambient sound",
	AMBIENT_ENABLED_DESC: "Play background soundscape during work sessions",
	AMBIENT_SELECT_NAME: "Soundscape",
	AMBIENT_SELECT_DESC: "Choose the ambient sound to play while working",
	AMBIENT_VOLUME_NAME: "Ambient volume",
	AMBIENT_VOLUME_DESC: "Adjust the ambient sound volume",
	AMBIENT_PREVIEW: "Preview",
	AMBIENT_STOP: "Stop",
	AMBIENT_AUTOPLAY_NAME: "Auto-play during work",
	AMBIENT_AUTOPLAY_DESC: "Automatically start ambient sound when a work session begins",
	AMBIENT_PLAY_ON_BREAK_NAME: "Play during breaks",
	AMBIENT_PLAY_ON_BREAK_DESC: "Keep ambient sound playing during break sessions",

	CMD_TOGGLE_AMBIENT: "Toggle ambient sound on/off",
};

const zhCN: TranslationStrings = {
	SETTINGS_HEADING: "Task Pomodoro",
	SETTINGS_TIMER: "计时设置",
	SETTINGS_BEHAVIOR: "行为设置",
	SETTINGS_DISPLAY: "显示设置",
	SETTINGS_SOUND: "音效设置",
	SETTINGS_RESET: "重置",
	SETTINGS_LANGUAGE: "语言",

	WORK_DURATION_NAME: "工作时长（分钟）",
	WORK_DURATION_DESC: "每个番茄钟的工作时长",
	SHORT_BREAK_NAME: "短休息时长（分钟）",
	SHORT_BREAK_DESC: "番茄钟后的短休息时长",
	LONG_BREAK_NAME: "长休息时长（分钟）",
	LONG_BREAK_DESC: "连续完成多个番茄钟后的长休息时长",
	LONG_BREAK_INTERVAL_NAME: "长休息间隔",
	LONG_BREAK_INTERVAL_DESC: "连续完成多少个番茄钟后触发长休息",

	AUTO_START_BREAK_NAME: "自动开始休息",
	AUTO_START_BREAK_DESC: "番茄钟完成后自动开始休息倒计时",
	AUTO_PROGRESS_NAME: "自动进行",
	AUTO_PROGRESS_DESC: "休息结束后自动开始下一个番茄钟",
	PERSISTENT_NOTIFICATION_NAME: "持续提醒",
	PERSISTENT_NOTIFICATION_DESC: "番茄钟完成后持续提醒直到手动操作（与自动进行互斥）",

	POMODORO_EMOJI_NAME: "番茄钟 Emoji",
	POMODORO_EMOJI_DESC: "用于标记完成番茄钟的符号",
	STATUS_BAR_NAME: "在状态栏显示",
	STATUS_BAR_DESC: "当有任务正在计时时，在状态栏显示当前计时状态",

	SOUND_ENABLED_NAME: "音效提醒",
	SOUND_ENABLED_DESC: "番茄钟完成时播放提示音",
	SOUND_SELECT_NAME: "选择音效",
	SOUND_SELECT_DESC: "选择番茄钟完成时的提示音",
	SOUND_PREVIEW: "预览",
	SOUND_CUSTOM_NAME: "自定义音效",
	SOUND_CUSTOM_DESC: "输入音效文件的 vault 路径或外部 URL（支持 .wav, .mp3, .ogg, .m4a, .webm）",
	SOUND_CUSTOM_PLACEHOLDER: "例如: audio/bell.mp3 或 https://example.com/ding.mp3",
	SOUND_VOLUME_NAME: "音效音量",
	SOUND_VOLUME_DESC: "调整提示音的音量",
	SOUND_TEST: "测试音量",

	RESET_SESSION_NAME: "重置番茄钟会话",
	RESET_SESSION_DESC: "重置所有计时器和工作间隔计数",
	RESET_BUTTON: "重置",

	CMD_TOGGLE: "开始/暂停光标所在任务的番茄钟",
	CMD_STOP: "停止光标所在任务的番茄钟",
	CMD_RESET: "重置光标所在任务的番茄钟",
	CMD_RESET_SESSION: "重置整个番茄钟会话",
	CMD_TOGGLE_SOUND: "切换音效开关",
	CMD_TOGGLE_STATUSBAR: "切换状态栏显示",

	NOTICE_WORK_COMPLETE: "🍅 番茄钟完成！休息 {} 分钟",
	NOTICE_LONG_BREAK: "🍅 番茄钟完成！长休息 {} 分钟",
	NOTICE_BREAK_COMPLETE: "☕ 休息结束！准备下一个番茄钟",
	NOTICE_AUTO_START: "🍅 自动开始下一个番茄钟！",
	NOTICE_SOUND_LOAD_ERROR: "无法加载音效文件: {}",

	SETTINGS_AMBIENT: "环境音效",
	AMBIENT_ENABLED_NAME: "启用环境音效",
	AMBIENT_ENABLED_DESC: "在工作时段播放背景白噪音",
	AMBIENT_SELECT_NAME: "选择音景",
	AMBIENT_SELECT_DESC: "选择工作时的背景环境音",
	AMBIENT_VOLUME_NAME: "环境音量",
	AMBIENT_VOLUME_DESC: "调整背景环境音的音量",
	AMBIENT_PREVIEW: "试听",
	AMBIENT_STOP: "停止",
	AMBIENT_AUTOPLAY_NAME: "工作时自动播放",
	AMBIENT_AUTOPLAY_DESC: "番茄钟开始工作时自动播放背景音",
	AMBIENT_PLAY_ON_BREAK_NAME: "休息时持续播放",
	AMBIENT_PLAY_ON_BREAK_DESC: "在休息时段也保持环境音播放",

	CMD_TOGGLE_AMBIENT: "切换环境音效开关",
};

const TRANSLATIONS: Record<Locale, TranslationStrings> = {
	en,
	"zh-CN": zhCN,
};

/** Available locales for the settings dropdown */
export const AVAILABLE_LOCALES: { value: Locale; label: string }[] = [
	{ value: "en", label: "English" },
	{ value: "zh-CN", label: "简体中文" },
];

let currentLocale: Locale = "en";

/** Set the active locale */
export function setLocale(locale: Locale) {
	currentLocale = locale;
}

/** Get a translated string by key */
export function t(key: keyof TranslationStrings): string {
	return TRANSLATIONS[currentLocale]?.[key] ?? TRANSLATIONS.en[key] ?? key;
}

/** Format a template string with placeholders. Use {} for substitution. */
export function tf(key: keyof TranslationStrings, ...args: (string | number)[]): string {
	let str = t(key);
	for (const arg of args) {
		str = str.replace("{}", String(arg));
	}
	return str;
}
