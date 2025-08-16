# Express.js Fundamentals

This folder contains a collection of learning modules and practical examples designed to introduce you to the core concepts of Express.js, the most popular web framework for Node.js. The examples progress from basic server setup to more advanced topics like middleware, routing, and the Model-View-Controller (MVC) pattern.

## Features Covered

* **HTTP Server Basics**: Creating a web server with Node.js's built-in `http` module.
* **Express.js Basics**: Setting up a basic Express.js application.
* **Static Files**: Serving static assets like HTML, CSS, and JavaScript.
* **Routing**: Handling different routes and HTTP methods (`GET`, `POST`, etc.).
* **Route and Query Parameters**: Accessing data from the URL.
* **Middleware**: Understanding and creating custom middleware functions.
* **MVC Pattern**: Structuring your application using the Model-View-Controller pattern for better organization and scalability.

## Folder Contents

Here is a breakdown of the files and folders in this directory:

* **`1_http_web.js`**: A simple example of creating a web server using only the `http` module.
* **`2_expressBasics.js`**: Your first Express.js application, demonstrating the basic setup.
* **`3_static.js`**: An example of how to serve static files from a `public` directory.
* **`4_path_query.js`**: Demonstrates how to work with route parameters and query strings.
* **`5_middleware.js`**: An introduction to middleware with a simple logger example.
* **`MVC_setup/`**: A more advanced example that refactors the application into an MVC structure.
    * **`app.js`**: The main application file.
    * **`controllers/`**: Contains the logic for handling requests.
    * **`routes/`**: Defines the API routes.
* **`public/`**: A folder containing static assets for the examples.

## Getting Started

To run the examples in this folder, follow these steps:

1.  **Install Dependencies**:
    ```sh
    npm install
    ```
2.  **Run an Example**:
    You can run any of the examples using `node` or `nodemon` for automatic server restarts:
    ```sh
    nodemon 2_expressBasics.js
    ```
    Or, to run the MVC example:
    ```sh
    nodemon MVC_setup/app.js
    ```

## Learning Roadmap

For a structured learning experience, it is recommended to go through the files in the following order:

1.  `1_http_web.js`
2.  `2_expressBasics.js`
3.  `3_static.js`
4.  `4_path_query.js`
5.  `5_middleware.js`
6.  `MVC_setup/app.js`

By the end of these modules, you will have a solid understanding of the fundamental concepts of Express.js and be ready to move on to more advanced topics.

---
