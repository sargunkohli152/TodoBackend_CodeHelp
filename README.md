# To-Do API

A simple Node.js and Express.js API for managing to-do items.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Create a To-Do](#create-a-to-do)
  - [Get All To-Do Items](#get-all-to-do-items)
  - [Get To-Do by ID](#get-to-do-by-id)
  - [Update To-Do](#update-to-do)
  - [Delete To-Do](#delete-to-do)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new to-do item associated with a user.
- Retrieve all pending to-do items for a user.
- Get a specific to-do item by its ID.
- Update a to-do item.
- Delete a to-do item.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sargunkohli152/TodoBackend_CodeHelp.git
   cd todo-api

2. Install Dependencies

   ```bash
   npm install

3. Configure your environment variables, if not already defined. Create a .env file in the root directory and define the following variables:
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost/todo_db
   #Adjust the values as needed for your environment.

4. Start the server
   ```bash
   npm run start

## Usage
### Create a To-Do

- **Endpoint:** `POST api/v1/createTodo`
- **Request Body:**

  ```json
  {
    "userId": "your-user-id",
    "task": "Task description goes here"
  }

- **Response:**
  ```json
  {
    "id": "unique-task-id",
    "userId": "your-user-id",
    "task": "Task description goes here",
    "completed": false,
    "success": true,
  }


#### Get All To-Do Items

- **Endpoint:** `GET api/v1/getTodos`
- **Response:**

  ```json
    {
      "id": "unique-task-id",
      "userId": "your-user-id",
      "task": "Task description goes here",
      "completed": false,
      "success": true
    },
    {
      "id": "another-unique-id",
      "userId": "your-user-id",
      "task": "Another task",
      "completed": true,
      "succcess": true
    }

#### Get To-Do by ID

- **Endpoint:** `GET api/v1/getTodos/:id`
- **Response:**

  ```json
  {
    "id": "unique-task-id",
    "userId": "your-user-id",
    "task": "Task description goes here",
    "completed": false,
    "success": true
  }

#### Update To-Do

- **Endpoint:** `PUT api/v1/updateTodo/:id`
- **Request Body:**

  ```json
  {
    "task": "Updated task description",
    "completed": true
  }
- **Response:**
    ```json
    {
      "id": "unique-task-id",
      "userId": "your-user-id",
      "task": "Updated task description",
      "completed": true,
      "success": true
    }


#### Delete To-Do
- **Endpoint:** `DELETE /deleteTodo/:id`
- **Response:**

  ```json
  {
    "message": "Task deleted successfully"
  }

## Contributing
Contributions are welcome! Please fork the project and create a pull request with your changes.

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
