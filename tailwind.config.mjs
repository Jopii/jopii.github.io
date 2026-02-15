/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Google Sans Flex', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
			colors: {
				accent: {
					pink: '#f472b6',
					violet: '#a78bfa',
				},
				surface: {
					primary: '#faf7f5',
					secondary: '#ffffff',
				},
				content: {
					primary: '#2d2a26',
					secondary: '#6b6560',
				},
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
