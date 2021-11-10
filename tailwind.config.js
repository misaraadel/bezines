module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      primary: `#FDD301`,
      secodary: `#1E1E1E`,
      footer: `#131313`,
      copyrights: `#B3B3B3`,
      white: `#fff`,
      dark: `#000`,
    },
    fontFamily: {
      display: ['ArbFONTS', 'sans-serif'],
      body: ['ArbFONTS', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '1140px',
      xl: '1520px',
    },
    
    fontSize: {
      'head': '40px',
      'sub-head': '20px',
      'requsest': '22px',
      'paragraph': '16px',
      'copyrights': '14px'
    },

    container: {
      center: true,
      padding: '15px',
    },

    zIndex: {
      'min': -1,
      'max': 99,
      'full-max': 999,
    }, 
    lineHeight: {
      'requsest': '50px',
      'btn': '41px',
      'head': '30px',
    },
    width: {
      'full': '100%',
      'fit-content': 'fit-content',
      'half': '50%',
      'semi-half': '60%',
      'logo': '135.3px',
      'brands': '120px',
      'videoShadow': '90px',
      'videoIcon': '68.04px',
      'arrowIcon': '62px',
      'socail': '40px',
      'toggleIcon': '30px',
      'navIcon': '26px',
      'socailIcon': '20px',
    },
    height: {
      'full': '100%',
      'half': '50%',
      'video': '600px',
      'contact': '529px',
      'polices': '526px',
      'header': '360.82px',
      'services': '393px',
      'brands': '120px',
      'input': '100px',
      'videoShadow': '90px',
      'requsest': '80px',
      'videoIcon': '68.04px',
      'arrowIcon': '57px',
      'logo': '50px',
      'socail': '40px',
      'navIcon': '26px',
      'socailIcon': '20px',
      'toggleDash': '3px',
    },
    borderRadius: {
      'circle': '50%',
      'btn': '100px',
      'video': '40px',
      'input': '25px'
    }

  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.ts',
    ]
  },
}
