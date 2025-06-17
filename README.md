# 📚 Book World - A Online Bookstore

**Book World** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to browse, search, and purchase books online. It includes both user and admin functionalities such as viewing book details, managing orders, and maintaining book inventory.

---

## 🚀 Features

### 👤 User Module

- Register and Login using JWT authentication
- Browse available books
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

| Technology     | Usage                                          |
| -------------- | ---------------------------------------------- |
| **MongoDB**    | Database for storing user data and orders      |
| **Express.js** | Backend framework for API handling             |
| **React.js**   | Frontend library for UI rendering              |
| **Node.js**    | Backend runtime                                |
| **JWT**        | For secure authentication                      |
| **Axios**      | HTTP client for frontend-backend communication |
| **CSS**        | Styling and responsive design                  |

---

## 📁 Project Structure

```
Chapter-Chaser/
├── Frontend/              # React frontend
├── Backend/               # Node.js backend
├── README.md
```

---

## ⚙️ Installation Steps

### Prerequisites:

- Node.js and npm installed
- MongoDB installed locally or use MongoDB Atlas

### 1. Clone the Repository

```bash
git clone https://github.com/saniyasarfaraz/book-store.git
cd book-store
```

### 2. Setup Server

```bash
cd backend
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
cd ../frontend
npm install
```

### 4. Run the Application

#### Start Backend:

```bash
cd ../backend
nodemon app.js or node app.js
```

#### Start Frontend:

```bash
cd ../frontend
npm start
```

Access the app at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Sample Admin Credentials (for Testing)

```
Username: admin
Password: admin123
```

## 🧪 Sample User Credentials (for Testing)

```
Username: User
Password: User@123
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

Deployed this app:

- **Frontend:** Vercel
- **Backend:** Render

---

## 👀 View Web Application

## **Access the App:** [https://book-store-three-sooty.vercel.app/](https://book-store-three-sooty.vercel.app/)

## 🧑‍💻 Author

**Saniya Sarfaraz**  
MERN Stack Developer  
GitHub: [https://github.com/saniya-sarfaraz](https://github.com/saniya-sarfaraz)
