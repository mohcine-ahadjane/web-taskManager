# 🧩 Task Manager App (Spring Boot + React + Docker)

  

Fullstack CRUD app with JWT + OAuth2 auth, containerized via Docker.
  

---

## 🚀 Quick Start


### ✅ 1. Build Backend JAR


From the `backend/` folder:

```bash
./mvnw clean package -DskipTests
```

Ensure it creates: backend/target/app.jar


✅ 2. Start App with Docker Compose

From project root:

```bash
docker-compose up --build
```

Frontend: http://localhost:5173

Backend: http://localhost:8080