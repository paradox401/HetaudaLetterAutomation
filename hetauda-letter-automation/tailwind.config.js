// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            textAlign: 'justify',
          },
        },
      },
    },
    
  },
  plugins: [],
};
