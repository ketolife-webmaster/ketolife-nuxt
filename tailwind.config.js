const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = defaultTheme;

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  variants: {},
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2.5rem",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      amatic: ['Amatic SC', 'cursive'],
    },

    extend: {
      colors: {
        primary: '#941D4A',
        secondary: '#E8AFCF',
        tertiary: '#C6C5C4',
        paragraph: '#50464a',
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
};
