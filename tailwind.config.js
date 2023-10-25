/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "loading-running": "runninng 2s linear infinite",
        "loading-running-slow": "runninng 3s linear infinite",
      },
      keyframes: {
        runninng: {
          "0%": { left: "-40%" },
          "50%": { left: "20%", width: "80%" },
          "100%": { left: "100%", width: "100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
