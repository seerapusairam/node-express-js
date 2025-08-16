# Store API

This project is a RESTful API for managing products in a store, built with Node.js, Express.js, and MongoDB. It showcases how to build a scalable and well-structured API with advanced querying features like filtering, sorting, and pagination.

## Features

-   **CRUD Operations**: Full Create, Read, Update, and Delete functionality for products.
-   **Advanced Querying**:
    -   **Filtering**: Filter products by any field (e.g., name, price, featured status).
    -   **Sorting**: Sort products based on different criteria (e.g., price, rating).
    -   **Pagination**: Implement pagination to handle large datasets efficiently.
-   **Database Integration**: Uses MongoDB and Mongoose for robust data modeling and persistence.
-   **Scalable Structure**: Organized into controllers, models, and routes for clean and maintainable code.
-   **Custom Error Handling**: Centralized middleware for consistent and informative error responses.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```sh
    git clone [https://github.com/your-username/node-express-project.git](https://github.com/your-username/node-express-project.git)
    cd node-express-project/Store_API
    ```

2.  **Install Dependencies**:
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**:
    Create a `.env` file in the root of the `Store_API` folder and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4.  **Populate the Database (Optional)**:
    A `products.json` file is included with sample data. You can populate your database with this data by running:
    ```sh
    node populate.js
    ```

5.  **Start the Server**:
    ```sh
    npm run start
    ```
    The server will start on the port specified in your environment (defaulting to 3000).

## API Endpoints

-   **`GET /api/v1/products`**:
    -   Get a list of all products.
    -   Supports query parameters for filtering, sorting, and pagination.
        -   **Filtering**: `?featured=true&company=ikea`
        -   **Sorting**: `?sort=price,-name`
        -   **Fields**: `?fields=name,price`
        -   **Pagination**: `?page=2&limit=10`
-   **`POST /api/v1/products`**: Create a new product.
-   **`GET /api/v1/products/:id`**: Get a single product by its ID.
-   **`PATCH /api/v1/products/:id`**: Update a product.
-   **`DELETE /api/v1/products/:id`**: Delete a product.

## Folder Structure

```
Markdown

# Store API

This project is a RESTful API for managing products in a store, built with Node.js, Express.js, and MongoDB. It showcases how to build a scalable and well-structured API with advanced querying features like filtering, sorting, and pagination.

## Features

-   **CRUD Operations**: Full Create, Read, Update, and Delete functionality for products.
-   **Advanced Querying**:
    -   **Filtering**: Filter products by any field (e.g., name, price, featured status).
    -   **Sorting**: Sort products based on different criteria (e.g., price, rating).
    -   **Pagination**: Implement pagination to handle large datasets efficiently.
-   **Database Integration**: Uses MongoDB and Mongoose for robust data modeling and persistence.
-   **Scalable Structure**: Organized into controllers, models, and routes for clean and maintainable code.
-   **Custom Error Handling**: Centralized middleware for consistent and informative error responses.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```sh
    git clone [https://github.com/your-username/node-express-project.git](https://github.com/your-username/node-express-project.git)
    cd node-express-project/Store_API
    ```

2.  **Install Dependencies**:
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**:
    Create a `.env` file in the root of the `Store_API` folder and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4.  **Populate the Database (Optional)**:
    A `products.json` file is included with sample data. You can populate your database with this data by running:
    ```sh
    node populate.js
    ```

5.  **Start the Server**:
    ```sh
    npm run start
    ```
    The server will start on the port specified in your environment (defaulting to 3000).

## API Endpoints

-   **`GET /api/v1/products`**:
    -   Get a list of all products.
    -   Supports query parameters for filtering, sorting, and pagination.
        -   **Filtering**: `?featured=true&company=ikea`
        -   **Sorting**: `?sort=price,-name`
        -   **Fields**: `?fields=name,price`
        -   **Pagination**: `?page=2&limit=10`
-   **`POST /api/v1/products`**: Create a new product.
-   **`GET /api/v1/products/:id`**: Get a single product by its ID.
-   **`PATCH /api/v1/products/:id`**: Update a product.
-   **`DELETE /api/v1/products/:id`**: Delete a product.

## Folder Structure

Store_API/
├── controllers/
│   └── products.js
├── db/
│   └── connect.js
├── middleware/
│   ├── error-handler.js
│   └── not-found.js
├── models/
│   └── product.js
├── routes/
│   └── products.js
├── app.js
├── package.json
└── populate.js
```

## Dependencies

-   `express`: Web framework for Node.js.
-   `mongoose`: Object Data Modeling (ODM) library for MongoDB.
-   `dotenv`: For loading environment variables.
-   `express-async-errors`: To handle errors in async middleware.
-   `nodemon`: For automatically restarting the server during development.