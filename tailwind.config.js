/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  // content: [],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
    extend: {
      fontFamily: {
        quentin: ["Quentin", "sans-serif"],
        nunito:["Nunito", "sans-serif"],
        squarepeg:["Square Peg", "cursive"],
        nunitoSans:["Nunito Sans", "sans-serif"],
        poppins:["Poppins", "sans-serif"],
        pridi:["Pridi", "serif"],
        teko:["Teko", "sans-serif"],
      },
      backgroundImage: {
        'experinece': "url('./assets/images/event_banner/desert1.png')",
        'description': "url('./assets/images/description/description.png')",
    },
    },
  },
  plugins: [],
}
