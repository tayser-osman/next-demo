/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
		fontFamily: {
			montserrat: ['var(--font-montserrat)'],
		},
		gridTemplateColumns: {
			fluid: 'repeat(auto-fit, minmax(15rem,1fr))',
		},
	},
  },
  plugins: [
	tailwindcss: {},
	autoprefixer: {},
  ],
}
