# 🧾 Inventory Management System

A full-stack inventory management system built using **React**, **Spring Boot**, and **MySQL**. This system allows efficient tracking, updating, and management of inventory items via a modern web interface and secure backend.

---

## 🚀 Features

### 🖥️ Frontend (React)
- Clean and responsive UI
- Add / Edit / Delete products
- Search and filter inventory
- Real-time data updates with Axios
- Chart visualizations with Recharts

### 🔧 Backend (Spring Boot)
- RESTful API endpoints
- Product CRUD operations
- MySQL database integration
- Structured and scalable Java architecture

### 🗃️ Database (MySQL)
- Structured relational schema
- Configurable connection properties

---

## 🧱 Project Structure

```
Inventery-Management/
├── Backend/InventoryMgtSystem      # Spring Boot backend
└── Frontend/ims-react/              # React frontend
```

---

## ⚙️ Setup Instructions

### 📌 Requirements
- Node.js & npm
- Java 17+
- MySQL server

---

### 🔹 Clone Repository

```bash
git clone https://github.com/Kasunchira/Inventery-Management.git
cd Inventery-Management
```

---

### 🔹 Backend Setup

1. Open the `Backend/` folder in IntelliJ or Eclipse.
2. Configure `application.properties` with your MySQL database credentials.
3. Run the Spring Boot application.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/inventorydb
spring.datasource.username=inventorydb
spring.datasource.password=
```

---

### 🔹 Frontend Setup

```bash
cd Frontend/ims-react
npm install
npm start
```

---

## 📸 Screenshots

<!-- Add images here later -->
<!-- ![Dashboard](screenshots/dashboard.png) -->

---

## 📦 Tech Stack

- **Frontend**: React, Axios, Recharts, React Router
- **Backend**: Spring Boot, Java
- **Database**: MySQL

---

## ✅ Future Improvements

- [ ] Login & Authentication
- [ ] User roles & access control
- [ ] Export as PDF/Excel
- [ ] Email notifications
- [ ] Docker containerization

---

## 👨‍💻 Author

**Kasun Chiran**  
🔗 GitHub: [Kasunchira](https://github.com/Kasunchira)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
