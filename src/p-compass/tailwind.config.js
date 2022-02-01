module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}","./resources/js"
      ],
    purge: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
          colors:{
            primary: '#74C13A',
            secondary:{
              100: '#E2E2D5',
              200: '#888883',
            }
          },
          fontFamily:{
            body:['Nunito']
          }
        },
      },
  };
