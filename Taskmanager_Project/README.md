# Task Manager API

This project is a straightforward and effective RESTful API for managing tasks, built with Node.js, Express.js, and MongoDB. It's an excellent example of a well-structured, scalable application that demonstrates fundamental backend development concepts, including CRUD operations, MVC architecture, and custom middleware.

## Features

-   **Full CRUD Functionality**: Create, Read, Update, and Delete tasks through a clean API.
-   **MongoDB Integration**: Uses Mongoose for elegant data modeling and interaction with a MongoDB database.
-   **MVC Architecture**: The code is organized into Models, Views (via a `public` folder for a simple frontend), and Controllers, making it easy to maintain and scale.
-   **Custom Middleware**: Includes custom middleware for handling asynchronous operations and centralized error handling.
-   **Simple Frontend**: Comes with a basic HTML/CSS/JavaScript frontend in the `public` folder to interact with the API.

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing.

1.  **Clone the Repository**:
    ```sh
    git clone [https://github.com/your-username/node-express-project.git](https://github.com/your-username/node-express-project.git)
    cd node-express-project/Taskmanager_Project
    ```

2.  **Install Dependencies**:
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**:
    Create a `.env` file in the root of the `Taskmanager_Project` directory and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4.  **Start the Server**:
    ```sh
    npm run start
    ```
    The application will be available at `http://localhost:3000`.

## API Endpoints

All endpoints are available under the `/api/v1/tasks` route.

-   **`GET /`**: Get all tasks.
-   **`POST /`**: Create a new task.
-   **`GET /:id`**: Get a single task by its ID.
-   **`PATCH /:id`**: Update a task by its ID.
-   **`DELETE /:id`**: Delete a task by its ID.

## Folder Structure

The project follows a logical and scalable structure:

```
Taskmanager_Project/
├── public/           # Simple frontend files
├── db/               # Database connection logic
│   └── connect.js
├── models/           # Mongoose data models
│   └── Task.js
├── routes/           # API route definitions
│   └── taskRouter.js
├── controller/       # Request handling logic
│   └── taskController.js
├── middleware/       # Custom middleware
│   ├── async.js
│   ├── errorHandler.js
│   └── notFound.js
├── errors/           # Custom error classes
│   └── customError.js
├── .env              # Environment variables
├── app.js            # Main application file
└── package.json
```

## Dependencies

-   `express`: The web framework for Node.js.
-   `mongoose`: An Object Data Modeling (ODM) library for MongoDB.
-   `dotenv`: A module to load environment variables from a `.env` file.
-   `nodemon`: A utility that monitors for any changes in your source and automatically restarts your server.