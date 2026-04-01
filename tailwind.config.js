/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fff8f1",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f59e0b", // Saffron / Orange
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.07)",
        hover: "0 8px 40px rgba(0,0,0,0.13)",
        glow: "0 0 40px rgba(245,158,11,0.18)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #fff8f1 0%, #ffffff 50%, #f0fdf4 100%)",
        "card-gradient": "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      },
    },
  },
  plugins: [],
};

