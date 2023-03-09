/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: "var(--accent-1)",
        primary2: "var(--accent-2)",
        primary3: "var(--accent-3)",
        primary4: "var(--accent-4)",
        primary5: "var(--accent-5)",
        primary6: "var(--accent-6)",
        primary7: "var(--accent-7)",
        primary8: "var(--accent-8)",
        primary9: "var(--accent-9)",
        gray1: "var(--gray-1)",
        gray2: "var(--gray-2)",
        gray3: "var(--gray-3)",
        gray4: "var(--gray-4)",
        gray5: "var(--gray-5)",
        gray6: "var(--gray-6)",
        gray7: "var(--gray-7)",
        gray8: "var(--gray-8)",
        gray9: "var(--gray-9)",
        gray10: "var(--gray-10)",

        background: "var(--background-color)",
        border: "var(--border-light)",
        about: "var(--about)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
