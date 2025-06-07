import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        afacad: ["Afacad", "sans-serif"],
        anuphan: ["Anuphan", "sans-serif"],
      },
      backdropBlur: {
        20: "var(--blur-20)",
      },
      boxShadow: {
        white: "var(--box-shadow-white)",
        black: "var(--box-shadow-black)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        quiz: {
          primary: {
            orange: "var(--quiz-primary-orange)",
            brown: "var(--quiz-primary-brown)",
            blue: "var(--quiz-primary-blue)",
          },
          bg: {
            "01": "var(--quiz-bg-01)",
            "02": "var(--quiz-bg-02)",
            "03": "var(--quiz-bg-03)",
          },
          text: {
            black: "var(--quiz-text-black)",
          },
          button: {
            primary: "var(--quiz-button-primary)",
            "primary-hover": "var(--quiz-button-primary-hover)",
            "quiz-active": "var(--quiz-button-quiz-active)",
            "quiz-hover": "var(--quiz-button-quiz-hover)",
            "secondary-active": "var(--quiz-button-secondary-active)",
            "secondary-hover": "var(--quiz-button-secondary-hover)",
            "input-disabled": "var(--quiz-button-input-disabled)",
            "input-disabled-border": "var(--quiz-button-input-disabled-border)",
            "input-active": "var(--quiz-button-input-active)",
            "input-focus": "var(--quiz-button-input-focus",
          },
          input: {
            active: "var(--quiz-input-active)",
            focus: "var(--quiz-input-focus)",
            disabled: "var(--quiz-input-disabled)",
            "disabled-border": "var(--quiz-input-disabled-border)",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        text: {
          main: "var(--text-main)",
          "main-light": "var(--text-main-light)",
          secondary: "var(--text-secondary)",
          brown: "var(--text-brown)",
        },
        "light-gold": {
          DEFAULT: "var(--light-gold)",
          secondary: "var(--light-gold-secondary)",
        },
        slider: {
          DEFAULT: "var(--slider)",
          background: "var(--slider-background)",
        },
        black: "var(--black)",
        flesh: "var(--flesh)",
        bg: {
          "03": "var(--bg-03)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-balance": {
          textWrap: "balance",
        },
        ".bg-body-gradient": {
          background:
            "linear-gradient(0deg,rgba(248, 243, 238, 1) 98%,rgba(227, 209, 198, 1) 100%)",
        },
        ".bg-header-gradient": {
          background: "linear-gradient(0deg,#F8F3EE 0,#E3D1C6 100%)",
        },
        ".bg-header-card-gradient": {
          background: "linear-gradient(0deg,#FFFFFF 0,#F1E8DE 100%)",
        },
        ".bg-icon-header-gradient": {
          boxShadow: "0px 4px 4px 0px hsla(0, 0%, 0%, 0.25)",
        },
        ".break-word": {
          wordBreak: "break-word",
        },
        ".header-1": {
          fontSize: "48px",
          fontWeight: "700",
          letterSpacing: "0.0075em",
        },
        ".header-2": {
          fontSize: "32px",
          fontWeight: "700",
        },
        ".header-3": {
          fontSize: "24px",
          fontWeight: "600",
        },
        ".header-4": {
          fontSize: "20px",
          fontWeight: "600",
        },
        ".body-1-semi-bold": {
          fontSize: "18px",
          fontWeight: "700",
        },
        ".body-1-regular": {
          fontSize: "18px",
          fontWeight: "500",
        },
        ".body-2-semi-bold": {
          fontSize: "16px",
          fontWeight: "600",
        },
        ".body-2-regular": {
          fontSize: "16px",
          fontWeight: "400",
        },
        ".subtitle-1": {
          fontSize: "28px",
          fontWeight: "400",
        },
        ".subtitle-2": {
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "0.4px",
        },
        ".title": {
          fontSize: "14px",
          fontWeight: "400",
        },
        ".sub-head": {
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "-0.03em",
        },
        ".description": {
          fontSize: "12px",
          fontWeight: "400",
          letterSpacing: "-0.03em",
        },
        ".hover-effect-chartjs": {
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            filter: "brightness(0.9) saturate(2)",
          },
        },
        ".display-barlow-36": {
          fontFamily: "Barlow, sans-serif",
          fontWeight: "700",
          fontSize: "36px",
          letterSpacing: "1px",
          lineHeight: "130%",
        },
        ".display-barlow-26": {
          fontFamily: "Barlow, sans-serif",
          fontWeight: "600",
          fontSize: "26px",
          letterSpacing: "1px",
        },
        ".header-barlow-28": {
          fontFamily: "Barlow, sans-serif",
          fontWeight: "700",
          fontSize: "28px",
          letterSpacing: "1px",
          lineHeight: "110%",
        },
        ".header-barlow-24": {
          fontFamily: "Barlow, sans-serif",
          fontWeight: "600",
          fontSize: "24px",
          letterSpacing: "1px",
        },
        ".header-inter-18": {
          fontWeight: "500",
          fontSize: "18px",
        },
        ".header-inter-24": {
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "150%",
        },
        ".header-inter-24-alt": {
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "128%",
        },
        ".button-barlow-28": {
          fontFamily: "Barlow, sans-serif",
          fontSize: "28px",
          letterSpacing: "1px",
          lineHeight: "110%",
        },
        ".button-barlow-20": {
          fontFamily: "Barlow, sans-serif",
          fontSize: "20px",
          letterSpacing: "1px",
          lineHeight: "150%",
        },
        ".button-afacad-20": {
          fontFamily: "Afacad, sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "150%",
        },
        ".button-afacad-20-medium": {
          fontFamily: "Afacad, sans-serif",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "150%",
        },
        ".button-afacad-18": {
          fontFamily: "Afacad, sans-serif",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "120%",
        },
        ".button-inter-12": {
          fontWeight: "600",
          fontSize: "12px",
        },
        ".body-afacad-18": {
          fontFamily: "Afacad, sans-serif",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "150%",
        },
        ".body-inter-14": {
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "150%",
        },
        ".body-inter-12": {
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "150%",
        },
        ".display-inter-36": {
          fontWeight: "700",
          fontSize: "36px",
          letterSpacing: "1px",
          lineHeight: "130%",
        },
        ".header-inter-26": {
          fontWeight: "700",
          fontSize: "26px",
          lineHeight: "140%",
        },
        ".header-inter-200": {
          fontWeight: "600",
          fontSize: "200px",
        },
        ".button-inter-18": {
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "150%",
        },
        ".button-inter-18-alt": {
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "150%",
        },
        ".button-inter-16": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
        },
        ".button-inter-200": {
          fontWeight: "600",
          fontSize: "200px",
          lineHeight: "160%",
        },
        ".body-inter-16": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "170%",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
