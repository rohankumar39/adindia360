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
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.07)",
        hover: "0 8px 40px rgba(0,0,0,0.13)",
        glow: "0 0 40px rgba(14,165,233,0.18)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fff7ed 100%)",
        "card-gradient": "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      },
    },
  },
  plugins: [],
};

