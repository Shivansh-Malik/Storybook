/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',    
    './.storybook/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.stories.@(js|ts|jsx|tsx)', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
