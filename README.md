# 🧑‍💻 Node.js User/Customer Management System (CRUD)

A simple, full-stack web application for performing **CRUD** operations on customer/user records. This system uses **Node.js, Express.js, and MongoDB (Mongoose)** to provide a persistent, database-backed dashboard for user management.

The front-end is rendered using the **EJS** templating engine and styled with **Bootstrap**.

---

## ✨ Features

* **CRUD Operations:** Easily add new users, view their details, and edit or delete existing records.
* **MongoDB Integration:** Uses **Mongoose** for seamless interaction with a MongoDB Atlas cluster.
* **Pagination:** Displays customer records with server-side pagination for handling large datasets efficiently.
* **Search Functionality:** Allows users to search for records by first name and last name using regular expressions.
* **Flash Messages:** Provides temporary success messages to the user after actions.
* **EJS Templating:** Utilizes EJS layouts and partials for a clean, modular structure.

---

## 🛠️ Technologies Used

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose)
* **Templating:** EJS 
* **Styling:** Bootstrap 
* **Middleware:** `dotenv`, `express-ejs-layouts`, `method-override`, `express-session`, `connect-flash`
* **Development:** `nodemon` for automatic server restarts.
