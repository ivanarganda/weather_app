# README

## Installation Guide for "vite-react-gestionArticulosPedidos" Project

This project is designed to facilitate the management of articles and orders using Vite, React, Node.js, Material-UI, Material Icons, JSON-Server, and Tailwind CSS. Below are the steps required to set up and run the project on your local machine.

### Prerequisites
- Node.js (version 14.x or later)
- npm (Node Package Manager) or yarn

### Installation Steps

1. **Create and install project:** ensure to have git installed by bash
- Navitage to wwww 
```
git clone https://github.com/ivanarganda/weather_app.git
or
git@github.com:ivanarganda/weather_app.git

```
- It might take a few minutes to create and install structure files of project

2. **Navigate to Project Directory:**


3. **Install Dependencies: All dependencies are alocated in package.json only install them** ( In case it is not got installed )

```
    npm install 
    // or 
    yarn add
```

4. **Configure Tailwind CSS: ( In case not installed )**
- If you haven't already, generate a `tailwind.config.js` file using Tailwind CLI:
  ```
  npx tailwindcss init
  ```
- Customize Tailwind CSS according to your preferences in the generated `tailwind.config.js` file:

    ```
    /** @type {import('tailwindcss').Config} */
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
    
    ```
- Replace all code in the main file index.css in src path file by:
    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    
    ```

5. **Api configuration**
To use the app ensure to get public api key saved in .env as:
    ```
    REACT_APP_API_WEATHER_KEY=1c8a7c196774414b900183053242004

6. **Start the Development Server:**
    In your VSCode cmd on your project root

    ```
        npm start
        // or
        yarn start
    
    ```

7. **Open the Application:**
Once the development server has started successfully, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Additional Information

- **Material-UI:** You can use Material-UI for building React components with Material Design but in this case it is done with tailwind
- **Tailwind CSS:** Tailwind CSS is used for styling the application. You can customize Tailwind CSS according to your project requirements by modifying the `tailwind.config.js` file.

### Contributing

Contributions to this project are welcome. Feel free to open issues for suggestions or bug reports, or submit pull requests with improvements.

### License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

### Author

This project is authored and maintained by Iván González Valles. For any issues or support, you can get me in touch with [ivanartista96@gmail.com](mailto:ivanartista96@gmail.com).
