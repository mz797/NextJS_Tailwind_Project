import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				yellow: "0 0 4px #f6c363",
			},
			colors: {
				primary: "#262626",
				light: "#ddd6cb",
				gradient1: "#f9572a",
				gradient2: "#ff8a05",
				gradientM1: "#2c1e19",
				gradientM2: "#25200f",
				bg: "#6e6464",
				pickerColor: "#a4abb9",
				pickerColorHover: "#b3b9c6",
				mealTitle: "#cfa69b",
			},
			width: {
				"90p": "90%",
				"30rem": "30rem",
				"40rem": "40rem",
				"50rem": "50rem",
				"75rem": "75rem",
				"80rem": "80rem",
				"90rem": "90rem",
			},
			gridTemplateColumns: {
				meals: "repeat(auto-fill, minmax(20rem, 1fr))",
			},
			keyframes: {
				loading: {
					"0%": { color: "#e9e9e9" },
					"50%": { color: "#b89b84" },
					"100%": { color: "#e9e9e9" },
				},
				slideInFromLeft: {
					"0%": { opacity: "0", transform: "translateX(-1rem)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				slideInFromRight: {
					"0%": { opacity: "0", transform: "translateX(1rem)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				slideInFromBottom: {
					"0%": { opacity: "0", transform: "translateY(1rem)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				flash: {
					"0%": { opacity: "0" },
					"50%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
			animation: {
				loading: "loading 1.2s ease-in-out infinite",
				flash: "flash 1s ease-in-out infinite alternate",
				slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
				slideInFromRight: "slideInFromRight 1s ease-out forwards",
				slideInFromBottom: "slideInFromBottom 1s ease-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;
