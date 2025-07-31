# Taskmanager Project

This project is a RESTful API for managing tasks, built with Node.js and Express.js. It demonstrates CRUD operations, middleware usage, and integration with MongoDB using Mongoose.

## Features

- Create, read, update, and delete tasks
- Express.js routing and middleware
- MongoDB integration via Mongoose
- Modular code structure for scalability

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up your MongoDB connection string in an `.env` file.
3. Start the server:
   ```sh
   npm run start
   ```

## API Endpoints

- `GET /tasks` - List all tasks
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a specific task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Resources

- See source code files for controllers, models, and routes.
- Refer to the main project README for more details.