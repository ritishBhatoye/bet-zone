/**
 * Betting Zone App Color System
 * This file contains all the colors used throughout the betting application.
 * Colors are organized by purpose and include both light and dark mode variants.
 */

// Primary Brand Colors
const primaryColors = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9", // Main primary color
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e",
};

// Secondary Colors (Golden/Yellow)
const secondaryColors = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde68a",
  300: "#fcd34d",
  400: "#fbbf24",
  500: "#f59e0b", // Main secondary color
  600: "#d97706",
  700: "#b45309",
  800: "#92400e",
  900: "#78350f",
};

// Betting Specific Colors
const bettingColors = {
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e", // Win/Success
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  danger: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444", // Loss/Danger
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  live: {
    500: "#ef4444", // Live indicator
    600: "#dc2626",
  },
  odds: {
    high: "#22c55e", // High odds
    medium: "#f59e0b", // Medium odds
    low: "#ef4444", // Low odds
  },
  betTypes: {
    single: "#3b82f6", // Single bets
    multiple: "#8b5cf6", // Multiple bets
    system: "#06b6d4", // System bets
  },
};

// Legacy colors for backward compatibility
const tintColorLight = primaryColors[500];
const tintColorDark = "#fff";

export const Colors = {
  light: {
    // Base colors
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    // Primary colors
    primary: primaryColors,

    // Secondary colors
    secondary: secondaryColors,

    // Betting colors
    betting: bettingColors,

    // Status colors
    status: {
      online: "#22c55e",
      offline: "#6b7280",
      away: "#f59e0b",
      busy: "#ef4444",
    },

    // Card colors
    card: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      accent: "#f3f4f6",
    },

    // Border colors
    border: {
      light: "#e5e7eb",
      medium: "#d1d5db",
      dark: "#9ca3af",
      primary: primaryColors[500],
    },

    // Legacy Swiggy colors
    swiggy: {
      primary: "#fc8019",
      accent: {
        light: "#f8f9fa",
      },
      text: "#282c3f",
    },
  },
  dark: {
    // Base colors
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    // Primary colors (adjusted for dark mode)
    primary: {
      ...primaryColors,
      500: "#38bdf8", // Lighter primary for dark mode
    },

    // Secondary colors (adjusted for dark mode)
    secondary: {
      ...secondaryColors,
      500: "#fbbf24", // Lighter secondary for dark mode
    },

    // Betting colors (adjusted for dark mode)
    betting: {
      ...bettingColors,
      success: {
        ...bettingColors.success,
        500: "#4ade80", // Lighter success for dark mode
      },
      danger: {
        ...bettingColors.danger,
        500: "#f87171", // Lighter danger for dark mode
      },
    },

    // Status colors
    status: {
      online: "#4ade80",
      offline: "#9ca3af",
      away: "#fbbf24",
      busy: "#f87171",
    },

    // Card colors
    card: {
      primary: "#1f2937",
      secondary: "#374151",
      accent: "#4b5563",
    },

    // Border colors
    border: {
      light: "#374151",
      medium: "#4b5563",
      dark: "#6b7280",
      primary: "#38bdf8",
    },

    // Legacy Swiggy colors (adjusted for dark mode)
    swiggy: {
      primary: "#f97316",
      accent: {
        light: "#374151",
      },
      text: "#f9fafb",
    },
  },
};

// Export individual color objects for direct use
export const PrimaryColors = primaryColors;
export const SecondaryColors = secondaryColors;
export const BettingColors = bettingColors;
