/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Jost", "Helvetica"],
      display: ["Righteous", "Helvetica"],
    },
    extend: {
      colors: {
        primary: "rgb(30, 30, 46)",
        secondary: "rgb(69, 71, 90)",
        accent: "rgb(137, 220, 235)",
        light: "rgb(205, 214, 244)",
        dark: "rgb(17, 17, 27)",
      },
      backgroundImage: ({ theme }) => ({
        dotted: `radial-gradient(circle at 1px 1px, ${theme("colors.accent")} 1px, transparent 1px)`,
      }),
      backgroundSize: {
        dottedSize: "40px 40px",
      },
    },
  },
  plugins: [],
};
