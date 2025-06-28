/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
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
