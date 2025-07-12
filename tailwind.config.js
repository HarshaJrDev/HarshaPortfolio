// tailwind.config.js
module.exports = {
  // tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    animation: {
      float: "float 3s ease-in-out infinite",
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },

    plugins: [
  require("tailwind-scrollbar-hide"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
],

    
    
  },
  
},

};
