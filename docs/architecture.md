# MTJM Website Architecture

## Overview

PT Multi Tehnik Jaya Mandiri (MTJM) company profile website.

**Current Phase:** Static Company Profile  
**Future Phase:** CMS with Admin Panel

---

## Technology Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| Angular | 17 | SPA Framework |
| TypeScript | 5.x | Type Safety |
| Angular Material | 17.x | UI Component Library |
| SCSS | - | Styling |
| Angular Router | 17 | Client-side Routing |
| RxJS | 7.x | Reactive Programming |

### Backend (Future)
| Technology | Version | Purpose |
|---|---|---|
| Golang | 1.21+ | Backend Runtime |
| Gin | 1.x | HTTP Framework |
| GORM | 2.x | ORM |
| PostgreSQL | 15+ | Database |

---

## Frontend Architecture

```
frontend/src/app/
├── core/                    # Singleton services, guards, interceptors
│   ├── services/
│   ├── guards/
│   ├── interceptors/
│   └── core.module.ts
├── shared/                  # Reusable components, pipes, directives
│   ├── components/
│   ├── pipes/
│   ├── directives/
│   └── shared.module.ts
├── layouts/                 # Page layouts (main, admin)
│   ├── main-layout/
│   └── admin-layout/
├── features/                # Feature modules
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── projects/
│   ├── gallery/
│   ├── certificates/
│   ├── news/
│   └── contact/
├── future-admin/            # Placeholder for future admin panel
├── mock-data/               # Mock data files
│   ├── services.mock.ts
│   ├── projects.mock.ts
│   ├── certificates.mock.ts
│   ├── gallery.mock.ts
│   ├── news.mock.ts
│   └── testimonials.mock.ts
├── models/                  # TypeScript interfaces & types
├── app.routes.ts
├── app.config.ts
└── app.component.ts
```

---

## Backend Architecture (Skeleton)

```
backend/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── handlers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   └── routes/
├── config/
├── go.mod
└── go.sum
```

---

## Routing Plan

| Route | Feature | Component |
|---|---|---|
| `/` | Home | HomeComponent |
| `/about` | About | AboutComponent |
| `/services` | Services | ServicesComponent |
| `/projects` | Projects | ProjectsComponent |
| `/projects/:id` | Project Detail | ProjectDetailComponent |
| `/gallery` | Gallery | GalleryComponent |
| `/certificates` | Certificates | CertificatesComponent |
| `/news` | News | NewsComponent |
| `/contact` | Contact | ContactComponent |

---

## Data Flow (Current - Static Phase)

```
Component → Service → Mock Data → Component (Display)
```

## Data Flow (Future - CMS Phase)

```
Component → Service → HTTP Client → API → Handler → Service → Repository → Database
```
