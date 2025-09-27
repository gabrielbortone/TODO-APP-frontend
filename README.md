TODO App (Frontend)

🚧 **Work in Progress** 🚧

This project is currently under active development. The existing features are stable, but new features and improvements are planned for the future. Contributions are welcome!

This repository contains the frontend source code for the TODO App, an application designed to help organize and manage daily tasks in a simple and intuitive way.

The application connects to a backend API to handle user authentication and CRUD (Create, Read, Update, Delete) operations for tasks.

✨ Features

    User Authentication: Complete Login and Registration system for secure access.

    Task Creation: Add new tasks quickly and easily.

    Task Viewing: List all your pending and completed tasks.

    Task Updates: Mark tasks as completed or uncheck them.

    Task Deletion: Remove tasks that are no longer needed.

    Clean and Responsive UI: User-friendly design focused on usability and user experience.

💻 Tech Stack

This project was built using the following technologies and libraries:

    React.js: A JavaScript library for building user interfaces.

    TypeScript: A superset of JavaScript that adds static typing.

    Styled Components: For component-level styling with dynamic props.

    React Router DOM: For handling routing within the application.

    Axios: A promise-based HTTP client for making requests to the backend API.

    JWT Decode: For decoding JWTs to extract payload information.

🚀 Getting Started

To run this project locally, follow the steps below.

Prerequisites

    Node.js (v16 or higher)

    NPM or Yarn

    The TODO App backend API must be running.

Installation and Setup

    Clone the repository:
    Bash

git clone https://github.com/gabrielbortone/TODO-APP-frontend.git

Navigate to the project directory:
Bash

cd TODO-APP-frontend

Install the dependencies:
Bash

npm install
# or
yarn install

API Configuration

By default, the application will attempt to connect to the API at http://localhost:5194. If your API is running on a different port or address, you can change the baseURL in the src/services/api.ts file.

Start the application:
Bash

    npm start
    # or
    yarn start

The development server will start, and the application will be accessible at http://localhost:3000 in your browser.
