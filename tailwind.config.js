/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				specialElite: ['"Special Elite"', 'cursive'],
			},
		},
	},
	plugins: [],
};
