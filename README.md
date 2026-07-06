# 🛒 Product Management System (MERN Stack)

A responsive full-stack Product Management System built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on products through a clean and modern user interface inspired by e-commerce platforms.

---

## 📌 Features

### Frontend
- Responsive and modern UI
- Add new products
- View all products
- Edit existing products
- Delete products
- Basic form validation
- Product cards (Flipkart/Amazon-inspired layout)
- Responsive design for desktop and mobile

### Backend
- RESTful API implementation
- Create Product API
- Get All Products API
- Update Product API
- Delete Product API
- MongoDB integration using Mongoose

### Database
- MongoDB
- Stores:
  - Product Name
  - Product Code
  - Price
  - Category

---

# 🛠 Technology Stack

## Frontend
- React.js
- CSS3
- Axios

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```
Product-Management-System
│
├── backend
│   ├── models
│   │      Product.js
│   ├── routes
│   │      productRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │    ├── components
│   │    │      ProductForm.jsx
│   │    │      ProductCard.jsx
│   │    ├── api.js
│   │    ├── App.js
│   │    └── App.css
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/product-management-system.git
```

Move into the project directory

```bash
cd product-management-system
```

---

# Backend Setup

Move to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productdb
```

Start backend server

```bash
npm start
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Install Axios

```bash
npm install axios
```

Start React application

```bash
npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# REST API Endpoints

## Create Product

```
POST /products
```

Request Body

```json
{
  "productName": "Laptop",
  "productCode": "LP100",
  "price": 55000,
  "category": "Electronics"
}
```

---

## Get All Products

```
GET /products
```

---

## Update Product

```
PUT /products/:id
```

---

## Delete Product

```
DELETE /products/:id
```

---

# Product Schema

```javascript
{
    productName: String,
    productCode: String,
    price: Number,
    category: String
}
```

---

# Screenshots

### Home Page

> Add a screenshot of your application here.

### Product Dashboard

> Add another screenshot after adding products.

---

# Future Enhancements

- Product Image Upload
- Search Products
- Category Filter
- Sorting
- Wishlist
- Add to Cart
- Product Ratings
- Dark Mode
- Authentication
- Pagination
- Toast Notifications
- Dashboard Statistics
- MongoDB Atlas Deployment

---

# Dependencies

## Backend

```
express
mongoose
cors
dotenv
nodemon
```

## Frontend

```
react
axios
react-dom
```

---

# Learning Outcomes

This project demonstrates:

- MERN Stack Development
- REST API Development
- MongoDB CRUD Operations
- React Components
- React Hooks
- API Integration using Axios
- Responsive Web Design
- Git Version Control
- GitHub Repository Management

---

# Deployment

Frontend can be deployed on:

- Vercel
- Netlify

Backend can be deployed on:

- Render
- Railway

Database

- MongoDB Atlas

---

# Author

**Santhosh Gunal**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

# License

This project is created for educational and technical assessment purposes.

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!