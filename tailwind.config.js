module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'large-desktop': '1536px'
    },
    extend: {
      colors: {
        'midnight-blue': '#0C0C0D',
        'just-white': '#FFFFFF',
        cyan: '#00FFFF',
      },
      dropShadow: {
        cyan: '0 0 3px #00FFFF',
        white: '0 0 5px #FFFFFF'
      },
      animation: {
        typing: 'typing 4s steps(22) forwards',
      },
      keyframes: {
        typing: {
          '40%, 100%': { left: '100%' },
        },
      },
      fontFamily: {
        karla: ['Karla', 'ui-monospace', 'sans-serif'],
      },
    },
  },
};
