/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1A202C", // Cor de fundo padrão para tema escuro
          "lighter-1": "#2D3748", // Cor secundária mais clara
          "lighter-2": "#4A5568", // Cor secundária mais clara ainda
          accent: "#6B46C1", // Cor de destaque/acento
          neutral: "#CBD5E0", // Cor neutra
          "base-100": "#FFFFFF", // Cor base
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: "dark", // Utiliza o tema escuro do Tailwind CSS
      },
    ],
  },
  plugins: [require("daisyui")],
};
