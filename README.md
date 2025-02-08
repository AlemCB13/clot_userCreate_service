# Clot_Create_User Microservice

## Overview
The **Clot_Create_User** microservice is a standalone service responsible for handling the creation of user accounts within the E-commerce platform. It processes HTTP requests to register new users, validates input data, and stores user information securely in the database.

---

## Features
- Handles user creation via an HTTP POST request.
- Validates input fields such as `name`, `email`, and `password`.
- Securely stores user information in a MySQL database.
- Provides modular and scalable design using Node.js.
- Fully containerized with Docker for consistent deployment.

---

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Framework for building RESTful APIs.
- **MySQL**: Relational database for storing user information.
- **Docker**: Containerization of the microservice.
- **dotenv**: Environment variable management.
- **Body-parser**: Parsing incoming request bodies.

---

## API Endpoint
### Create User
**Endpoint**: `/api/users`

**Method**: `POST`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

**Response**:
- **201 Created**:
  ```json
  {
    "message": "User created successfully",
    "userId": 1
  }
  ```
- **400 Bad Request**:
  ```json
  {
    "message": "All fields are required"
  }
  ```
- **500 Internal Server Error**:
  ```json
  {
    "message": "Error creating user"
  }
  ```

---

## Environment Variables
The service requires the following environment variables to be set in a `.env` file located in the project root:

```env
PORT=3000
DB_HOST=localhost #This is for test on local host, for coker use "db" or the name of the container
DB_USER=root
DB_PASSWORD=yourpassword #Password that you define for your database on docker
DB_NAME=clot_users
```

---

## Docker Setup
1. **Build the Docker Image**:
   ```bash
   docker build -t clot_create_user:latest .
   ```
2. **Run the Docker Container**:
   ```bash
   docker run -p 3000:3000 --env-file .env clot_create_user:latest
   ```
3. **Using Docker Compose**:
   ```bash
   docker-compose up --build
   ```

---

## Testing the API
Use a tool like **Postman** or **curl** to test the API.

Example using `curl`:
```bash
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john.doe@example.com", "password": "securepassword"}'
```

Expected Response:
```json
{
  "message": "User created successfully",
  "userId": 1
}
```

---

## Notes
- Ensure the database is running and accessible before starting the microservice.
- Tables must be created in the database prior to running the service.

---

