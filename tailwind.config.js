/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tomato": "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
        "pink": "#FF527B"
      },
      backgroundImage: {
        "illustration": "var(--bg-illustration)"
      },
      fontSize: {
        "heading": ["var(--fs-heading)", {
          fontWeight: 700,
          lineHeight: "normal"
        }] 
      },
      gridTemplateColumns: {
        "main": "max(376px) 400px"
      },
      boxShadow: {
        "card": "0px 15px 60px 0px rgba(0,0,0,0.25)" 
      },
    },
  },
  plugins: [],
};
