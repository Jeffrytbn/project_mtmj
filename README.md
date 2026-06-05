# MTJM Website

**PT Multi Tehnik Jaya Mandiri** — Company Profile Website

---

## 📋 Project Overview

| Item | Detail |
|---|---|
| **Phase** | Static Company Profile |
| **Frontend** | Angular 17, TypeScript, Angular Material, SCSS |
| **Backend** | Go (Gin + GORM + PostgreSQL) — *skeleton only* |
| **Status** | Foundation / Scaffold |

---

## 🏗️ Project Structure

```
Project_mtjm/
├── frontend/              # Angular 17 SPA
│   └── src/app/
│       ├── core/          # Services, guards, interceptors
│       ├── shared/        # Reusable components, pipes, directives
│       ├── layouts/       # Main & admin layouts
│       ├── features/      # Feature modules (home, about, etc.)
│       ├── models/        # TypeScript interfaces
│       ├── mock-data/     # Static mock data
│       └── future-admin/  # CMS placeholder
├── backend/               # Go backend skeleton
│   ├── cmd/server/        # Entry point
│   ├── internal/          # Handlers, services, repos, models, routes
│   └── config/            # Configuration
├── docs/                  # Documentation
├── assets/                # Shared assets
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- **Go** >= 1.21
- **Angular CLI** 17

### Frontend

```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:4200`

### Backend (skeleton only — not active)

```bash
cd backend
go mod tidy
go run cmd/server/main.go
```

---

## 🗺️ Routing

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Company |
| `/services` | Services |
| `/projects` | Projects List |
| `/projects/:id` | Project Detail |
| `/gallery` | Photo Gallery |
| `/certificates` | Certifications |
| `/news` | News & Updates |
| `/contact` | Contact Us |

---

## 📊 Data Flow

### Current (Static Phase)
```
Component → Service → Mock Data → Component
```

### Future (CMS Phase)
```
Component → Service → HttpClient → API → Handler → Service → Repository → PostgreSQL
```

---

## 🔮 Future CMS Features

- [ ] Admin Login (JWT)
- [ ] Dashboard
- [ ] Project Management (CRUD)
- [ ] Service Management (CRUD)
- [ ] News Management (CRUD)
- [ ] Gallery Management (CRUD + Upload)
- [ ] Certificate Management (CRUD)
- [ ] Contact Inquiry Management
- [ ] PostgreSQL Database
- [ ] File Upload System

---

## 📦 Dependencies

### Frontend
- `@angular/core` ^17
- `@angular/material` ^17
- `@angular/router` ^17
- `rxjs` ^7
- `typescript` ^5

### Backend (planned)
- `gin-gonic/gin`
- `gorm.io/gorm`
- `gorm.io/driver/postgres`
- `golang-jwt/jwt`
