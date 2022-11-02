/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter', 'sans-serif']
      },
      backgroundImage:{
        pc: "url('/backgroundImg.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 35.08%, #43E7AD 60.94%, #E1D55D 25.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      }
    },
  },
  plugins: [],
}
