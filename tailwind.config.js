/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			movil: '412px',
			// => @media (min-width: 412px) { ... }

			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px'
			// => @media (min-width: 1280px) { ... }
		}
	},
	plugins: []
}
