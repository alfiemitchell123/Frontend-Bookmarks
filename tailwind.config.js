/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'hsl(231, 69%, 60%)',
          red: 'hsl(0, 94%, 66%)',
        },
        neutral: {
          grayishBlue: 'hsl(229, 8%, 60%)',
          veryDarkBlue: 'hsl(229, 31%, 21%)',
          buttonGray: '#F6F7F6',
          darkGray: '#62626B',
          svgBgGray: 'hsl(232, 45%, 94%)',
        }
      },
    },
  },
  plugins: [],
}
