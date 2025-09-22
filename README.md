# nodejs-demo-app
# Node.js CI/CD Demo App 🚀

This project demonstrates a **CI/CD pipeline using GitHub Actions and Docker**.

## 📌 Workflow
1. Push code to `main` branch.
2. GitHub Actions runs pipeline:
   - Install dependencies
   - Run tests
   - Build Docker image
   - Push image to DockerHub
3. Image can then be deployed to Kubernetes or any server.

## ⚙️ Tech Stack
- Node.js (Express)
- Docker
- GitHub Actions

## 🐳 Docker Commands (Local Test)
```bash
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
