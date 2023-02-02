/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayOne: '#272A30',
        grayPlaceholder: '#6B7383',
        btnBg: '#FFE1C4',
        btnBgHv: '#FFBE82',
        btnT: '#522700',
        alert: '#FF7C01'
      },
      backgroundImage: {
        'font1': "url('../src/assets/font1.jpg')",
        'font2': "url('../src/assets/font2.jpg')"
      },
    },
  },
  plugins: [],
}
