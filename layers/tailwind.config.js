/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["*"],
  theme: {
    extend: {
      darkMode: 'selector',
      screens:{
        'change':{'max':'425px'},
        'vsmall':{'max':'750px'},
        "small":{"max": "1200px"},
        'other':{"max":"950"},
    

      }
    },
  },
  plugins: [],
}

