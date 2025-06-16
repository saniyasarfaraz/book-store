# 📚 Chapter Chaser - A Online Bookstore

**Chapter Chaser** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to browse, search, and purchase books online. It includes both user and admin functionalities such as viewing book details, managing orders, and maintaining book inventory.

---

## 🚀 Features

### 👤 User Module
- Register and Login using JWT authentication
- Browse available books
- Search and filter books
- View detailed book descriptions
- Add books to Cart or Favourites
- Place orders (Cash on Delivery)
- View order history

### 🛠️ Admin Module
- Admin login with JWT
- Add, update, and delete books
- View all orders placed by users

---

## 🧰 Tech Stack

| Technology     | Usage                                         |
|----------------|-----------------------------------------------|
| **MongoDB**    | Database for storing user data and orders     |
| **Express.js** | Backend framework for API handling            |
| **React.js**   | Frontend library for UI rendering             |
| **Node.js**    | Backend runtime                               |
| **JWT**        | For secure authentication                     |
| **Axios**      | HTTP client for frontend-backend communication|
| **CSS** / **Bootstrap** | Styling and responsive design       |

---

## 📁 Project Structure

```
Chapter-Chaser/
├── client/                # React frontend
│   ├── components/        # Reusable components like BookCard, Cart, etc.
│   └── pages/             # Route pages like Home, Login, OrderHistory, etc.
├── server/                # Node.js backend
│   ├── models/            # Mongoose models (User, Book, Order)
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   └── middleware/        # Auth middleware
```

---

## ⚙️ Installation Steps

### Prerequisites:
- Node.js and npm installed
- MongoDB installed locally or use MongoDB Atlas

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/Chapter-Chaser.git
cd Chapter-Chaser
```

### 2. Setup Server
```bash
cd server
npm install
```

- Create a `.env` file in the `/server` directory and add:
```
PORT=1000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3. Setup Client
```bash
cd ../client
npm install
```

### 4. Run the Application

#### Start Backend:
```bash
cd ../server
npm start
```

#### Start Frontend:
```bash
cd ../client
npm start
```

Access the app at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Sample Admin Credentials (for Testing)

```
Email: admin@example.com
Password: admin123
```

---

## 📸 Screenshots

You can include screenshots here:
- Home Page
- Book Detail Page
- Cart & Checkout Page
- Admin Dashboard

---

## 📦 Deployment

To deploy this app:
- **Frontend:** Vercel or Netlify
- **Backend:** Render, Railway, or Cyclic

---

## 🧑‍💻 Author

**Saniya Sarfaraz**  
MERN Stack Developer  
GitHub: [https://github.com/saniya-sarfaraz](https://github.com/saniya-sarfaraz)

