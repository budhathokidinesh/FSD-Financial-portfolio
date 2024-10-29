# Portfolio API

## Table of Contents

-Make list of the heading
-You are going to create

## Features

-List all the features you will have
-Login is one of them

## Technologies

- Add technologies you are going to use in this project
- i.e. Node, etc

# Installation

1. Write step by step
2. Process how anybody can use this project

# Usage

Tell people how they can actually use and test once thy syste is working

# API Endpoints

List all the Endpoint you are going to have

1. Login
   `POST /api/v1/users/login`
   This endpoint is used for authentication a user by sending their email/ username and pasword

Request:

- URL: `/api/v1/users/login`
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Body:
  ```sh
  {
      "email": "user@gmail.com",
      "password": "password"
  }
  ```
  - Response: -Success (200):
  ```sh
  {
   "message": "Login successful",
   "user": "User info {} token"
  }
  ```
  - Error (401): -Invalid credentials:
    ```sh
    {
    "error": "Invalid email or password"
    }
    ```
  - Error (500): Server error:
    ```sh
        {
            "error": "An error occured while processing the request"
        }
    ```

## Environment Variables

Create a .env file in the root of your project and add the following environmental variables:

    # JWT Scret Key
    JWT_SECRET=your_jwt_secret

    # Token Expiration time(e.g., '1h', '7d')
    JWT_EXPIRES_IN=1H
