# react-portfolio

A single page app portfolio using React + Vite + Tailwind CSS

# Usage

```
npm create vite@latest react-portfolio

select a framework: > React

select a variant: > JavaScript

cd react-portfolio

npm install

npm run dev

in src folder delete App.css

delete code in App.jsx component and use snippet rafce <react arrowfunction component export>

in index.css file, delete code

install Tailwind CSS with Vite in a new console. Ensure you are in the react-portfolio folder

  npm install -D tailwindcss postcss autoprefixer
  check tailwindcss was added in devDependencies
  npx tailwindcss init -p

in tailwind.config.js file, configure template paths
  
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

in index.css add the @tailwind directives

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

run build process with npm run dev

in App.js check if tailwind is working

  const App = () => {
  return (
    <div className='text-5xl text-red-500'>App</div>
  )
}

``` bash

