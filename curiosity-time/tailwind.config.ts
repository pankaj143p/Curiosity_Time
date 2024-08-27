import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Dark mode toggling based on a class
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: {
          1: "#FFFFFF",
          2: "rgba(255, 255, 255, 0.72)",
          3: "rgba(255, 255, 255, 0.4)",
          4: "rgba(255, 255, 255, 0.64)",
          5: "rgba(255, 255, 255, 0.80)",
        },
        black: {
          1: "#15171C", // Adjusted for consistency with your CSS file
          2: "#222429",
          3: "#101114", // Match the html background color in your CSS
          4: "#252525",
          5: "#2E3036",
          6: "#24272C", // Make sure all the colors match with what you use
        },
        orange: {
          1: "#F97535",
        },
        gray: {
          1: "#71788B",
        },
      },
      backgroundImage: {
        "nav-focus":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
