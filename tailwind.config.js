module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./{home,about,work,contact,services}/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0a",
          primary: "#0a0a0a",
          secondary: "#111111",
          tertiary: "#c8a96e",
          alternative: "#f0ede6",
          success: "#0f2a1e",
          error: "#2a0f0f",
        },
        border: {
          DEFAULT: "#1e1e1e",
          primary: "#1e1e1e",
          secondary: "#2a2a2a",
          tertiary: "#3a3a3a",
          alternative: "#c8a96e",
        },
        text: {
          primary: "#f0ede6",
          secondary: "#8a8683",
          tertiary: "#c8a96e",
          alternative: "#0a0a0a",
          link: "#c8a96e",
          "link-alt": "#e8d5a3",
          "on-primary": "#0a0a0a",
          "on-secondary": "#f0ede6",
          "on-tertiary": "#0a0a0a",
          "on-alternative": "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 20s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
};
