# User Authentication Application

This project is a user authentication application built with Express, React, and MongoDB. It allows users to register, log in, and access a dashboard with a welcome message.

## Project Structure

```
user-auth-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   ├── models
│   │   │   ├── User.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   ├── app.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.js
│   │   │   ├── LoginForm.js
│   │   │   └── RegisterForm.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── api
│   │       └── auth.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection in `backend/src/config/db.js`.

4. Start the server:
   ```
   npm start
   ```

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **POST /api/register**: Register a new user.
- **POST /api/login**: Log in an existing user.

## Features

- User registration and login functionality.
- Dashboard with a welcome message after successful login or registration.

## Technologies Used

- Express.js
- React.js
- MongoDB
- Mongoose
- Node.js

## License

This project is licensed under the MIT License.