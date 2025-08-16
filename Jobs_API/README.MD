# Jobs API

This project is a robust RESTful API for managing job postings, built with Node.js, Express.js, and MongoDB. It features user authentication with JWT, password hashing, and a suite of security middleware to protect the application. The API is also documented with Swagger for ease of use and testing.

## Features

-   **User Authentication**: Secure user registration and login with JWT and password hashing using `bcryptjs`.
-   **CRUD Operations**: Full CRUD (Create, Read, Update, Delete) functionality for job postings.
-   **Database Integration**: Uses MongoDB and Mongoose for data persistence.
-   **Security**: Implements a variety of security best practices using middleware:
    -   `helmet`: Secures HTTP headers.
    -   `cors`: Enables Cross-Origin Resource Sharing.
    -   `xss-clean`: Protects against Cross-Site Scripting attacks.
    -   `express-rate-limit`: Limits repeated requests to the API.
-   **API Documentation**: Integrated Swagger UI for interactive API documentation and testing.
-   **Custom Error Handling**: Centralized error handling for clean and consistent error responses.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:
    ```sh
    git clone [https://github.com/your-username/node-express-project.git](https://github.com/your-username/node-express-project.git)
    cd node-express-project/Jobs_API
    ```

2.  **Install Dependencies**:
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**:
    Create a `.env` file in the root of the `Jobs_API` folder and add the following variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_LIFETIME=30d
    ```

4.  **Start the Server**:
    ```sh
    npm run start
    ```
    The server will start on the port specified in your environment (defaulting to 5000) and connect to the MongoDB database.

## API Endpoints

All job-related routes are protected and require a valid JWT in the `Authorization` header.

### Authentication

-   `POST /api/v1/auth/register`: Register a new user.
-   `POST /api/v1/auth/login`: Log in a user and receive a JWT.

### Jobs

-   `GET /api/v1/jobs`: Get all jobs for the authenticated user.
-   `POST /api/v1/jobs`: Create a new job.
-   `GET /api/v1/jobs/:id`: Get a specific job by its ID.
-   `PATCH /api/v1/jobs/:id`: Update a job.
-   `DELETE /api/v1/jobs/:id`: Delete a job.

## Folder Structure

```
Jobs_API/
├── controllers/      # Request handlers
│   ├── auth.js
│   └── jobs.js
├── db/               # Database connection
│   └── connect.js
├── errors/           # Custom error classes
├── middleware/       # Custom middleware
├── models/           # Mongoose schemas and models
│   ├── Job.js
│   └── User.js
├── routes/           # API route definitions
│   ├── auth.js
│   └── jobs.js
├── app.js            # Main application file
└── package.json
```

## Dependencies

-   `express`: Web framework for Node.js.
-   `mongoose`: Object Data Modeling (ODM) library for MongoDB.
-   `jsonwebtoken`: For generating and verifying JSON Web Tokens.
-   `bcryptjs`: For hashing passwords.
-   `dotenv`: For loading environment variables.
-   `helmet`, `cors`, `xss-clean`, `express-rate-limit`: Security middleware.
-   `swagger-ui-express`, `yamljs`: For API documentation.
-   `nodemon`: For automatically restarting the server during development.