
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blue: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
                // Chart theme colors
                // Snow Theme (Blue to Purple)
                'theme-snow-1': '#4A6FFF',
                'theme-snow-2': '#5E7CFF',
                'theme-snow-3': '#7289FF',
                'theme-snow-4': '#8696FF',
                'theme-snow-5': '#9AA3FF',
                'theme-snow-6': '#AEB0FF',
                'theme-snow-7': '#C2BDFF',
                'theme-snow-8': '#D6CAFF',
                // Nature Theme (Green to Teal)
                'theme-nature-1': '#34D399',
                'theme-nature-2': '#3EC9A0',
                'theme-nature-3': '#48BFA7',
                'theme-nature-4': '#52B5AE',
                'theme-nature-5': '#5CABB5',
                'theme-nature-6': '#66A1BC',
                'theme-nature-7': '#7097C3',
                'theme-nature-8': '#7A8DCA',
                // Sunset Theme (Orange to Red)
                'theme-sunset-1': '#F97316',
                'theme-sunset-2': '#F76B2D',
                'theme-sunset-3': '#F56444',
                'theme-sunset-4': '#F35C5B',
                'theme-sunset-5': '#F15472',
                'theme-sunset-6': '#EF4C89',
                'theme-sunset-7': '#ED44A0',
                'theme-sunset-8': '#EB3CB7',
                // Monochrome Theme (Grays)
                'theme-mono-1': '#94A3B8',
                'theme-mono-2': '#86909C',
                'theme-mono-3': '#787E80',
                'theme-mono-4': '#6A6C64',
                'theme-mono-5': '#5C5A48',
                'theme-mono-6': '#4E482C',
                'theme-mono-7': '#403610',
                'theme-mono-8': '#322400',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
			},
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
