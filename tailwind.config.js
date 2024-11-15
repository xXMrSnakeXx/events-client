/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				accent: '#adcb28',
				dark: '#212121',
				light: '#f2f2f2',
				white: '#ffffff',
				primary: '#22a6b3',
				error: '#ed2a2a',
				gray: '#41707c',
			},
			backgroundImage: {
				'main-background': 'linear-gradient(to top, #0f2027, #203a43, #2c5364)',
				'tag-background': 'linear-gradient(to bottom, #ffd194, #d1913c)',
			},
			boxShadow: {
				'custom-dark': '0px 2px 10px 1px theme("colors.dark")',
				'custom-primary': ' 0px 2px 10px 2px theme("colors.primary")'
			},
			fontSize: {
				medium: '18px',
				large: '22px',
			},
			transitionTimingFunction: {
				cubicBezier: 'cubic-bezier(0.7, 0.98, 0.86, 0.98)',
			}
		},
	},
	plugins: [],
}

