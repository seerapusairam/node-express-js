# Node.js & Express.js Learning Repository

This repository contains a collection of projects and learning modules designed to cover a wide range of topics in Node.js and Express.js development. From the fundamentals of Node.js to building full-fledged RESTful APIs with authentication and database integration, these projects provide practical, hands-on experience.

## Projects and Modules

This repository is divided into several folders, each focusing on a specific area of Node.js and Express.js development:

### 1. Node_js

A collection of scripts and examples covering the core concepts of Node.js.

* **Features**:
    * File system operations (reading, writing, appending)
    * Event emitters and event-driven programming
    * Asynchronous programming with callbacks, promises, and async/await
    * Working with core Node.js modules
* **Dependencies**: `nodemon` for development.

### 2. Express_js

Examples and exercises for getting started with the Express.js framework.

* **Features**:
    * Routing and route parameters
    * Middleware usage and creation
    * Serving static assets
    * Error handling
    * Model-View-Controller (MVC) structure
* **Dependencies**: `express`, `nodemon`.

### 3. JWT Auth

A project demonstrating user authentication using JSON Web Tokens (JWT).

* **Features**:
    * User registration and login endpoints
    * JWT-based authentication and authorization
    * Protected API routes
    * Custom error handling middleware
* **Dependencies**: `dotenv`, `express`, `express-async-errors`, `http-status-codes`, `jsonwebtoken`.

### 4. Store\_API

A RESTful API for a store, demonstrating CRUD operations and advanced querying with MongoDB.

* **Features**:
    * CRUD operations for products
    * Integration with MongoDB using Mongoose
    * Filtering, sorting, and pagination for product listings
* **Dependencies**: `dotenv`, `express`, `express-async-errors`, `mongoose`.

### 5. Taskmanager\_Project

A RESTful API for managing tasks.

* **Features**:
    * CRUD operations for tasks
    * MongoDB integration with Mongoose
    * Modular and scalable project structure
* **Dependencies**: `dotenv`, `express`, `mongoose`.

### 6. Jobs\_API

A more advanced API for managing job postings, with a focus on security and documentation.

* **Features**:
    * User registration and login with password hashing (`bcryptjs`)
    * Token-based authentication with JWT
    * Security middleware including `helmet`, `cors`, `xss-clean`, and `express-rate-limit`
    * API documentation with Swagger UI
* **Dependencies**: `bcryptjs`, `cors`, `dotenv`, `express`, `express-async-errors`, `express-rate-limit`, `helmet`, `http-status-codes`, `joi`, `jsonwebtoken`, `mongoose`, `swagger-ui-express`, `xss-clean`, `yamljs`.

## Getting Started

To run any of the projects, navigate to the project's folder and follow these steps:

1.  **Install Dependencies**:
    ```sh
    npm install
    ```
2.  **Environment Variables**:
    For projects that require it (`JWT_Auth`, `Store_API`, `Taskmanager_Project`, `Jobs_API`), create a `.env` file in the project's root directory and add the necessary environment variables, such as `MONGO_URI` for database connection and `JWT_SECRET` for JWT signing.

3.  **Run the Server**:
    ```sh
    npm run start
    ```

## Overall Features

This repository demonstrates a wide range of features and best practices in Node.js and Express.js development:

* **Core Node.js**: File system operations, event handling, and asynchronous programming.
* **Express.js**: Routing, middleware, static file serving, and MVC architecture.
* **Authentication**: JWT-based authentication and authorization.
* **Database Integration**: MongoDB integration with Mongoose, including schemas, models, and advanced querying.
* **API Development**: Building RESTful APIs with CRUD operations, error handling, and a modular structure.
* **Security**: Implementing security best practices with middleware like `helmet`, `cors`, and `express-rate-limit`.

## Resources

For more detailed information, please refer to the `README.md` file within each project folder. Additional notes and explanations can be found in the `node + express.txt` file in the root directory.

---