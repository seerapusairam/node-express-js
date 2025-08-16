# JWT Authentication Example

This project is a demonstration of how to implement user authentication and authorization using JSON Web Tokens (JWT) in a Node.js and Express.js application. It includes a simple frontend to interact with the API, showcasing how to protect routes and manage user sessions without a database.

## Features

-   **User Login**: A simple login mechanism that validates user credentials and issues a JWT.
-   **JWT Generation**: Creates a signed JWT upon successful login.
-   **Protected Routes**: Middleware to protect specific routes, ensuring that only authenticated users can access them.
-   **Custom Error Handling**: Centralized error handling for a consistent API response.
-   **Frontend Integration**: A basic frontend to demonstrate the login flow and how to make authenticated requests.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```sh
    git clone [https://github.com/your-username/node-express-project.git](https://github.com/your-username/node-express-project.git)
    cd node-express-project/JWT_Auth
    ```

2.  **Install Dependencies**:
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**:
    Create a `.env` file in the root of the `JWT_Auth` folder and add the following variables:
    ```
    JWT_SECRET=your_jwt_secret
    ```

4.  **Start the Server**:
    ```sh
    npm run start
    ```
    The server will start on port 3000 by default.

## API Endpoints

-   **`POST /api/v1/login`**:
    -   Logs in a user with a username and password.
    -   If the credentials are valid, it returns a JWT.
-   **`GET /api/v1/dashboard`**:
    -   A protected route that can only be accessed with a valid JWT.
    -   The JWT must be included in the `Authorization` header as a Bearer token.

## How It Works

1.  **Login**: When a user logs in with their username and password, the server validates the credentials.
2.  **Token Generation**: If the credentials are correct, the server generates a JWT signed with a secret key. This token contains a payload with user information (in this case, the username).
3.  **Token Storage**: The token is sent back to the client, where it is stored in local storage.
4.  **Authenticated Requests**: For subsequent requests to protected routes, the client includes the JWT in the `Authorization` header.
5.  **Token Verification**: The server's authentication middleware intercepts the request, verifies the JWT's signature, and decodes the payload to identify the user. If the token is valid, the request is allowed to proceed to the protected route.

## Folder Structure

```
JWT_Auth/
├── controllers/      # Request handlers
│   └── main.js
├── errors/           # Custom error classes
├── middleware/       # Custom middleware
│   ├── auth.js
│   ├── error-handler.js
│   └── not-found.js
├── public/           # Frontend files
├── routes/           # API route definitions
│   └── main.js
├── app.js            # Main application file
└── package.json
```

## Dependencies

-   `express`: Web framework for Node.js.
-   `jsonwebtoken`: For generating and verifying JSON Web Tokens.
-   `dotenv`: For loading environment variables.
-   `express-async-errors`: To handle errors in async middleware without `try...catch` blocks.
-   `http-status-codes`: For using standard HTTP status codes.
-   `nodemon`: For automatically restarting the server during development.