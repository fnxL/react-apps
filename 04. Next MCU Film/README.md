<h1 align="center">
  Vite Template React
</h1>

<p align="center">
    A <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a> starter template.
    <br>Much faster alternative for create-react-app. <br> <strong>Get started in less than 15 seconds.</strong>
</p>

## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── node_modules
├──
└── src
    ├── App.jsx
    ├── index.css
    ├── index.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Features

- Much Much faster than CRA
- Bootstrap your react project within 30 seconds.
- Vite Fast Refresh
- Faster Build time
- Much lighter than CRA.
- No need to `import react from React` anywhere.
- ESLint AirBnb style

## Instructions

1. Install pnpm (optional) & degit globally (2x faster than npm & yarn)

```
npm install -g pnpm degit
```

2. Clone this repo

```
degit fnxL/react <your_project_name>
```

3. cd into your project and install dependencies.

```
cd <your_project_name>
pnpm i
```

4. Get started.

```
pnpm start
```

And then open http://localhost:3000 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script         | Description                                         |
| -------------- | --------------------------------------------------- |
| pnpm run start | Runs the app in development mode.                   |
| pnpm run dev   | Runs the app in the development mode.               |
| pnpm run build | Builds the app for production to the `dist` folder. |
| pnpm run serve | Serves the production build from the `dist` folder. |
