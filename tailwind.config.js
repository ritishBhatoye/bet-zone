/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Main betting app colors
        primary: {
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
        },

        // Secondary Colors - Golden/Yellow for highlights
        secondary: {
          golden: {
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
          },
        },

        // Tertiary Colors - Yellow for warnings/alerts
        tertiary: {
          yellow: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#eab308", // Main tertiary color
            600: "#ca8a04",
            700: "#a16207",
            800: "#854d0e",
            900: "#713f12",
          },
        },

        // Betting Specific Colors
        betting: {
          // Success/Win colors
          success: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e", // Main success color
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },

          // Danger/Loss colors
          danger: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444", // Main danger color
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
          },

          // Live/Active colors
          live: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444", // Live indicator red
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
          },

          // Odds colors
          odds: {
            high: "#22c55e", // Green for high odds
            medium: "#f59e0b", // Yellow for medium odds
            low: "#ef4444", // Red for low odds
          },

          // Bet types
          betTypes: {
            single: "#3b82f6", // Blue for single bets
            multiple: "#8b5cf6", // Purple for multiple bets
            system: "#06b6d4", // Cyan for system bets
          },
        },

        // Legacy Swiggy colors (for existing components)
        swiggy: {
          primary: "#fc8019",
          accent: {
            light: "#f8f9fa",
          },
          text: "#282c3f",
        },

        // Neutral colors with betting app context
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },

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
          dark: "#1f2937",
          accent: "#f3f4f6",
        },

        // Border colors
        border: {
          light: "#e5e7eb",
          medium: "#d1d5db",
          dark: "#9ca3af",
          primary: "#0ea5e9",
        },
      },

      fontFamily: {
        // Avalar - Perfect for headings and titles in betting app
        avalar: ["Avalar-Regular"],
        "avalar-bold": ["Avalar-Bold"],

        // Montserrat - Excellent for body text and UI elements
        "montserrat-thin": ["Montserrat-Thin"],
        "montserrat-extralight": ["Montserrat-ExtraLight"],
        "montserrat-light": ["Montserrat-Light"],
        montserrat: ["Montserrat-Regular"],
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-semibold": ["Montserrat-SemiBold"],
        "montserrat-bold": ["Montserrat-Bold"],
        "montserrat-extrabold": ["Montserrat-ExtraBold"],
        "montserrat-black": ["Montserrat-Black"],

        // Barlow - Alternative for body text
        "barlow-thin": ["Barlow-Thin"],
        "barlow-extralight": ["Barlow-ExtraLight"],
        "barlow-light": ["Barlow-Light"],
        barlow: ["Barlow-Regular"],
        "barlow-medium": ["Barlow-Medium"],
        "barlow-semibold": ["Barlow-SemiBold"],
        "barlow-bold": ["Barlow-Bold"],
        "barlow-extrabold": ["Barlow-ExtraBold"],
        "barlow-black": ["Barlow-Black"],

        // Dancing Script - For decorative elements
        "dancing-regular": ["DancingScript-Regular"],
        "dancing-medium": ["DancingScript-Medium"],
        "dancing-semibold": ["DancingScript-SemiBold"],
        "dancing-bold": ["DancingScript-Bold"],

        // Space Mono - Perfect for numbers, odds, and data
        "space-mono": ["SpaceMono-Regular"],
      },
    },
  },
  plugins: [],
};
