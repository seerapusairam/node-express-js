# Store_API

This folder contains a RESTful API project for managing store products, built with Node.js, Express.js, and MongoDB (using Mongoose). The API demonstrates CRUD operations and advanced querying features.

## Features

- Create, read, update, and delete products
- Express.js routing and middleware
- MongoDB integration via Mongoose
- Filtering, sorting, and pagination for product listings
- Modular code structure for scalability

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file in the root of this folder and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
3. Start the server:
   ```sh
   npm run start
   ```

## API Endpoints

- `GET /products` - List all products (supports filtering, sorting, pagination)
- `POST /products` - Create a new product
- `GET /products/:id` - Get a specific product
- `PATCH /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## Folder Structure

- `controllers/` - Request handlers for product operations
- `models/` - Mongoose schemas and models
- `routes/` - API route definitions
- `middleware/` - Custom middleware (if any)

## Notes

- Make sure MongoDB is running and accessible.
- Update environment variables in `.env` as needed.