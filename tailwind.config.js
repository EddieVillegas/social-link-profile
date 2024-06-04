/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      interBold: ['Inter_Bold'],
      interSemiBold: ['Inter_Semibold']
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      grey: 'hsl(0, 0%, 20%)',
      darkGrey: 'hsl(0, 0%, 12%)',
      offBlack: 'hsl(0, 0%, 8%)',
      green: 'hsl(75, 94%, 57%)'
    },
    extend: {},
  },
  plugins: [],
}

