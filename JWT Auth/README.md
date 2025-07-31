# JWT Auth

This folder contains a Node.js and Express.js project demonstrating authentication using JSON Web Tokens (JWT). It includes user registration, login, and protected API routes.

## Features

- User registration and login endpoints
- JWT-based authentication and authorization
- Middleware for error handling and 404 responses
- Modular code structure for routes and middleware

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file in the root of this folder and add:
   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```
   Add other environment variables as needed.
3. Start the server:
   ```sh
   npm run start
   ```

## API Endpoints

- `POST /api/v1/register` - Register a new user
- `POST /api/v1/login` - Authenticate user and receive JWT
- Protected routes (require JWT in headers)

## Folder Structure

- `routes/` - API route definitions
- `middleware/` - Error handling and not-found middleware
- `public/` - Static assets
- `errors/`- Handling all the induvidual errors

## Notes

- No database integration is shown in the provided code, but you can extend it as needed.
- Update environment variables in `.env` as required.

---