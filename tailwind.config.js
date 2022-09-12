module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors:{
      lightgray:'#f2f2f2',
      newblue: {
        DEFAULT: "#0067b8",
        dark: "#0067b8",
      },
      fontFamily:{
        brandfamily:"Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,serif"
      }
    }},
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
