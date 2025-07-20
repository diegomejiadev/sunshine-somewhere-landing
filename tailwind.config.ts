import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      maxWidth: {
        "8xl": "1360px",
        "9xl": "1440px",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.75rem" }],
        "4xs": ["0.375rem", { lineHeight: "0.5rem" }],
        "5xl": ["2.5rem", { lineHeight: "3rem" }],
        "6xl": ["3rem", { lineHeight: "3.5rem" }],
        "7xl": ["3.5rem", { lineHeight: "4rem" }],
        "8xl": ["4rem", { lineHeight: "4.5rem" }],
        "9xl": ["4.5rem", { lineHeight: "5rem" }],
      },
      backgroundImage: {
        "title-hero-gradient":
          "linear-gradient(90deg, var(--primary-color) 0%, #8490a9 60%)",
        "title-hero-dark-gradient":
          "linear-gradient(90deg, #449e36 0%, #747f97 60%)",
        "black-gradient":
          "linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)",
        "blue-gradient":
          "linear-gradient(90deg, #36579a 0%, rgba(54, 87, 154, 0.8) 95.83%)",
        "white-transparent-top-low-gradient":
          "linear-gradient(-0deg, rgba(57,98,184,0) 90%, rgba(255,255,255,1) 100%)",
        "white-transparent-top-gradient":
          "linear-gradient(-10deg, rgba(57,98,184,0) 30%, rgba(255,255,255,1) 100%)",
        "white-transparent-left-gradient":
          "linear-gradient(-90deg, rgba(57,98,184,0) 90%, rgba(255,255,255,1) 100%)",
        "stripes-horizontal":
          "repeating-linear-gradient(0deg, #246628, #246628 50px, #30AF5B 1px, #30AF5B)",
        "gradient-primary-alpha":
          "linear-gradient(180deg,rgba(42, 123, 155, 0.3) 0%,rgba(0, 66, 123, 0.7) 30%,rgba(0, 66, 123, 0.8) 100%)",
        "white-gradient":
          "linear-gradient(360deg,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 11%,rgba(42, 123, 155, 0) 48%,rgba(255, 255, 255, 1) 95%)",
        "white-gradient-horizontal":
          "linear-gradient(270deg,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 11%,rgba(42, 123, 155, 0) 48%,rgba(255, 255, 255, 1) 95%)",
        "gradient-border":
          "linear-gradient(180deg,rgba(42, 123, 155, 0) 0%,rgba(6, 85, 152, 0.24) 61%,rgba(6, 85, 152, 1) 100%)",
        "gradient-secondary-alpha":
          "linear-gradient(180deg,rgba(4, 57, 102, 0.79) 0%,rgba(4, 57, 102, 1) 100%)",
      },
      boxShadow: {
        chat: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        navbar: "rgba(0, 0, 0, 0.35) 0px 7px 20px",
        footer: "rgba(0, 0, 0, 0.35) 0px -5px 5px",
      },

      colors: {
        pattern: "rgb(60, 65, 57)",
        primary: {
          "50": "#b6ddff",
          "100": "#85c7ff",
          "200": "#85c7ff",
          "300": "#6cbbfe",
          "400": "#54b0fe",
          "500": "#3ba5fe",
          "600": "#2399fe",
          "700": "var(--primary-color)", // DEFAULT
          "800": "#0872cb",
          "900": "#065598",
          "950": "#043966",
          DEFAULT: "var(--primary-color)",
        },
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        secondary: {
          "50": "#ffd485",
          "100": "#fecb6d",
          "200": "#fec354",
          "300": "#feba3c",
          "400": "#feb223",
          "500": "var(--secondary-color)", // DEFAULT
          "600": "#e5980a",
          "700": "#cb8709",
          "800": "#b27608",
          "900": "#986507",
          "950": "#7f5506",
          DEFAULT: "var(--secondary-color)",
        },
        tertiary: {
          "50": "#f8f5ed",
          "100": "#eeebd8",
          "200": "#dcdfb9",
          "300": "#b3c682", // DEFAULT
          "400": "#90b464",
          "500": "#649749",
          "600": "#447a38",
          "700": "#2d5d2e",
          "800": "#284d30",
          "900": "#26402f",
          "950": "#10231a",
        },
        quaternary: {
          "50": "#fcf8fb",
          "100": "#f7edf7",
          "200": "#f2e3f2",
          "300": "#e4cbe7",
          "400": "#cca9d6",
          "500": "#b187c4",
          "600": "#946eb1", //DEFAULT
          "700": "#765798",
          "800": "#5d4c7b",
          "900": "#483e65",
          "950": "#292447",
          DEFAULT: "#946eb1",
        },
      },
    },
  },
};
export default config;
