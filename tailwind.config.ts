import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        bayi: '0.5rem'
      },
      colors: {
        primary: {
          100: '#E1EEFF',
          300: '#A5CCFF',
          500: '#0360D9'
        },
      },

      fontFamily: {
          body: ['Roboto']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        extraLarge: '12rem'
      },
      screens: {
        'smd': '700px',
        'slg': '776px',
        'sxl': '1175px'
      }
    },
  },
  plugins: [],
}
export default config
