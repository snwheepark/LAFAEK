export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        primary: '#1A1A1A',
        secondary: '#6B6B6B',
        accent: '#C9A97A',
        border: '#E8E4DC',
        negative: '#8B3A3A',
        positive: '#2D6A4F',
      },
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
