# 📚 Student Management System API (Node.js + TypeScript + Prisma + MySQL)

This is a simple **Student Management System** built with:
- ⚙️ Node.js + Express
- 💬 TypeScript
- 🛢️ MySQL
- 🧬 Prisma ORM

It allows you to manage students, teachers, classes, and enrollments with clean and modular API design.

---

## 🗂️ Features

- Add and view **students**
- Add and view **teachers**
- Add and view **classes**
- Enroll students into classes
- Modular folder structure (controllers, routes, config)

---

## 🧑‍💻 Tech Stack

- Node.js
- Express
- TypeScript
- Prisma (MySQL)
- REST API tested via Postman

---

## 📦 Installation & Setup

```bash
# Clone this repository
git clone https://github.com/yourusername/student-management-api.git
cd student-management-api

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env

# Set your MySQL credentials in the .env file
DATABASE_URL="mysql://user:password@localhost:3306/studentdb"

# Push schema to DB and generate Prisma Client
npx prisma db push
npx prisma generate

# Start the server
pnpm dev
```

---

## 📬 API Endpoints

### 👩‍🏫 Teachers
- `POST /teachers` → Create a teacher
- `GET /teachers` → Get all teachers

### 🧑 Students
- `POST /students` → Create a student
- `GET /students` → Get all students

### 🏫 Classes
- `POST /classes` → Create a class
- `GET /classes` → Get all classes

### 🎓 Enrollments
- `POST /classes/enroll` → Enroll student into a class

---

## 🧪 Postman Collection

Import the following file into Postman for quick testing:
[Download Collection](./student-management.postman_collection.json)

---

## 📁 Project Structure

```
src/
│
├── config/            # Prisma DB client
├── controllers/       # Request handlers
├── routes/            # API routes
├── index.ts           # App entry point
├── prisma/            # Prisma schema and migration
└── .env               # Environment variables
```

---

## 💡 Future Enhancements

- JWT-based authentication
- Role-based access (admin, teacher, student)
- Filtering, pagination, and search

---

## 🧑 Author

Made with ❤️ by [Your Name]

---