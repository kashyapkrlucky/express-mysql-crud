# Express MySQL CRUD API

This is a sample Express project demonstrating how to connect to a MySQL database and perform basic CRUD operations. The project uses Express.js as the web framework and `mysql2` as the MySQL client.

## Features

- Connect to MySQL database
- Create, Read, Update, and Delete (CRUD) operations
- Environment variable configuration
- Structured project organization

## Requirements

- Node.js
- MySQL

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/kashyapkrlucky/express-mysql-crud.git
    cd express-mysql-crud
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Create and configure the `.env` file**:

    ```sh
    touch .env
    ```

    Add the following content to the `.env` file:

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=sampledb
    PORT=3000
    ```

4. **Set up the MySQL database and table**:

    ```sql
    CREATE DATABASE sampledb;

    USE sampledb;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

## Project Structure

```
express-mysql-crud/
│
├── .env
├── index.js
├── config/
│   └── db.config.js
├── controllers/
│   └── user.controller.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
└── package.json
```

## Usage

1. **Start the server**:

    ```sh
    node index.js
    ```

2. **API Endpoints**:

    - **Create a User**: `POST /api/users`
        ```json
        // Request body example
        {
            "email": "user@example.com",
            "name": "John Doe"
        }
        ```
    
    - **Get All Users**: `GET /api/users`

    - **Get a User by ID**: `GET /api/users/:id`

    - **Update a User by ID**: `PUT /api/users/:id`
        ```json
        // Request body example
        {
            "email": "newuser@example.com",
            "name": "Jane Doe"
        }
        ```

    - **Delete a User by ID**: `DELETE /api/users/:id`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file as needed for your project. Once done, you can push the changes to your repository and make it public for others to use.