# react-portfolio

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)

## Description

A single page app of a personal website and portfolio using React + Vite + Tailwind CSS

# Installation

``` zsh
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

npm install react-router-dom

npm install @tailwindcss/forms

npm install @tailwindcss/line-clamp

```

## Usage

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing Guidelines

Create a new branch for the commit and start a pull request.

## Testing

## Authors and Acknowledgements

[email] (ginadrcoder@gmail.com)


## Questions

For enquiries, please contact me at:

[email] (ginadrcoder@gmail.com)
[github] (https://github.com/gina-t)




