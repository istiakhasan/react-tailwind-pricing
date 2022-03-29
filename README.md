#How to install tailwind in react?
1.npm install -D tailwindcss postcss autoprefixer <br/>
2.npx tailwindcss init -p <br/>
3.@tailwind base;
@tailwind components;
@tailwind utilities;(import in index.css)
<br/>
4.content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  replace content in tailwind.config.js