/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans]
      },
      colors: {
        dark: "#0d1222",
        light: "#f5f5f5",
        primary: "#2545d0",
        primaryDark: "#4377ee",
        lightGreen: "#4377ee",
        slideGreen: "#2439a9"
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        meeting: "meeting 2.5s infinite"
      },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0d1222 8px,#0d1222 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0d1222 8px,#0d1222 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0d1222 8px,#0d1222 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#0d1222 8px,#0d1222 40px)"
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
        "4xl": "0 0.5rem 1rem rgba(24,33,62,0.24)"
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" }
      // => @media (max-width: 479px) { ... }
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-5deg)" },
        "50%": { transform: "rotate(5deg)" }
      },
      meeting: {
        "0%": {
          "-webkit-transform": "rotate(0deg)",
          transform: "rotate(0deg)"
        },
        "10%": {
          "-webkit-transform": "rotate(14deg)",
          transform: "rotate(14deg)"
        },
        "20%": {
          "-webkit-transform": "rotate(-8deg)",
          transform: "rotate(-8deg)"
        },
        "30%": {
          "-webkit-transform": "rotate(14deg)",
          transform: "rotate(14deg)"
        },
        "40%": {
          "-webkit-transform": "rotate(-4deg)",
          transform: "rotate(-4deg)"
        },
        "50%": {
          "-webkit-transform": "rotate(10deg)",
          transform: "rotate(10deg)"
        },
        "60%": {
          "-webkit-transform": "rotate(0deg)",
          transform: "rotate(0deg)"
        },
        "100%": {
          "-webkit-transform": "rotate(0deg)",
          transform: "rotate(0deg)"
        }
      }
    }
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }
  ]
};
