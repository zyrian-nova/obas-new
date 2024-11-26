import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Radley', ...defaultTheme.fontFamily.serif],
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primario: "#B5A291",
				secundario: "#936761",
				terciario: "#007991",
				secundarioDark: "#00171F",
				secundarioLight: "#B8F2E6",
			}
		},
	},
	plugins: [],
}
