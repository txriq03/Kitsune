import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ['var(--font-quicksand)']
		},
		colors: {
			primary: '#201F31',
			secondary: '#FFBADE',
		},
		screens: {
			xs: '400px',
			'3xl': '1680px',
			'4xl': '2200px'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
