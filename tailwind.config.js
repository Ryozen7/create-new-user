module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AEC6CF",
        secondary: "#000080",
        lightGray: "#6B7280",
        darkGray: "#111827",
        bgColor: "#F2F2F7",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    fontFamily: {
      crimsonText: "CrimsonText",
      crimsonTextBold: "CrimsonText Bold",
      crimsonTextBoldItalic: "CrimsonText BoldItalic",
      crimsonTextItalic: "CrimsonText Italic",
      crimsonTextSemiBold: "CrimsonText SemiBold",
      crimsonTextSemiBoldItalic: "CrimsonText SemiBoldItalic",
    },
  },
  plugins: [],
}