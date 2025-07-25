🛒 Product API – Express.js CRUD Project
This is a simple RESTful API built with Express.js for managing products in an in-memory database. It supports basic CRUD operations, middleware integration, error handling, and advanced features like filtering, pagination, and search.

🚀 Getting Started
📦 Installation
Clone the repository:

bash
Copy
Edit
git clone <your-repo-url>
cd project-root
Install dependencies:

bash
Copy
Edit
npm install
Create an .env file based on the provided .env.example and set your environment variables.

Start the server:

bash
Copy
Edit
npm start
The server runs on: http://localhost:3000

📂 Folder Structure
go
Copy
Edit
project-root/
│
├── server.js                  // Main entry point
├── routes/                    // Express route handlers
│   └── products.js
├── controllers/               // Business logic
│   └── productsController.js
├── middleware/                // Middlewares (auth, logger, error)
│   ├── auth.js
│   ├── logger.js
│   └── errorHandler.js
├── data/
│   └── products.js            // Sample in-memory data
├── utils/
│   └── error.js               // Custom error classes
├── .env.example               // Example environment config
├── package.json
└── README.md
🔐 Environment Variables
Create a .env file with the following:

env
Copy
Edit
PORT=3000
API_KEY=your-secret-api-key
🔗 API Endpoints
✅ Public Routes
Method	Endpoint	Description
GET	/	Welcome route
GET	/api/products	List all products
GET	/api/products/:id	Get a product by ID
GET	/api/products/search	Search products by name
GET	/api/products/stats	Get product statistics

✍️ Protected Routes (Require API Key)
Add header:
x-api-key: your-secret-api-key

Method	Endpoint	Description
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing one
DELETE	/api/products/:id	Delete a product

📄 Example Request & Response
POST /api/products
Request Body:

json
Copy
Edit
{
  "name": "Tablet",
  "description": "Android 10-inch tablet",
  "price": 150,
  "category": "electronics",
  "inStock": true
}
Response:

json
Copy
Edit
{
  "id": "uuid-generated-id",
  "name": "Tablet",
  "description": "Android 10-inch tablet",
  "price": 150,
  "category": "electronics",
  "inStock": true
}
🧩 Features Implemented
✔️ Express.js setup with routing and controllers

🔁 Full CRUD operations on products

🔐 API key authentication middleware

📋 Request logging middleware

⚠️ Global error handling and custom error classes

🔍 Filtering, searching, and pagination support

📊 Product statistics by category

📌 Future Improvements
Database integration (MongoDB or PostgreSQL)

Swagger API documentation

Unit and integration testing

🛠️ Technologies Used
Node.js

Express.js

UUID

Dotenv

Nodemon (dev)
