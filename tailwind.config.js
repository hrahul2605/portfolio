module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'first-color-alt': '#5943CB',
        'first-color': '#6C55E0',
        'first-color-light': '#9582F2',
        'first-color-lighter': '#C1B5FC',
        'title-color': '#242329',
        'text-color': '#6D6A7C',
        'text-color-light': '#A19FAD',
        'body-color': '#FBFBFE',
        'container-color': '#FFFFFF',
        'title-color-dark': '#F2F1F3',
        'text-color-dark': '#BCBAC4',
        'input-color-dark': '#211D35',
        'body-color-dark': '#191627',
        'container-color-dark': '#211D35',
        'first-color-second': '#100E1B',
      },
      fontSize: {
        't-big': ['2rem', { lineHeight: '3rem' }],
        't-h1': ['1.5rem', { lineHeight: '2.25rem' }],
        't-h2': ['1.25rem', { lineHeight: '1.875rem' }],
        't-h3': ['1.125rem', { lineHeight: '1.6875em' }],
        't-h4': ['0.938rem', { lineHeight: '1.4rem' }],
        't-sm': ['0.813rem', { lineHeight: '1.2rem' }],
        't-xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'd-big': ['3rem', { lineHeight: '4.5rem' }],
        'd-h1': ['2.25rem', { lineHeight: '3.375rem' }],
        'd-h2': ['1.5rem', { lineHeight: '2.25rem' }],
        'd-h3': ['1.25rem', { lineHeight: '1.875rem' }],
        'd-h4': ['1rem', { lineHeight: '1.5rem' }],
        'd-sm': ['0.875rem', { lineHeight: '1.3125rem' }],
        'd-xs': ['0.813rem', { lineHeight: '1.22rem' }],
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
