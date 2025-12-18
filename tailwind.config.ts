import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spice: {
          red: "#E21D1D",
          dark: "#0F172A", // Deeper, more professional dark
          gold: "#F59E0B",
          light: "#FFF7ED", // Warm light background
          muted: "#64748B", // Professional muted text
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-spice': 'linear-gradient(135deg, #E21D1D 0%, #F59E0B 100%)',
        'gradient-spice-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 20% 50%, rgba(226, 29, 29, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow-red': '0 0 40px -10px rgba(226, 29, 29, 0.4)',
        'glow-gold': '0 0 40px -10px rgba(245, 158, 11, 0.4)',
        'premium': '0 20px 40px -20px rgba(0, 0, 0, 0.1)',
        'premium-lg': '0 30px 60px -30px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
