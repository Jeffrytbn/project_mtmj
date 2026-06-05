package routes

// Routes package will define API route groups.
//
// Future route groups:
//
// Public API (no auth required):
//   GET /api/v1/services
//   GET /api/v1/services/:id
//   GET /api/v1/projects
//   GET /api/v1/projects/:id
//   GET /api/v1/certificates
//   GET /api/v1/gallery
//   GET /api/v1/news
//   GET /api/v1/news/:slug
//   GET /api/v1/testimonials
//   POST /api/v1/contact
//
// Admin API (JWT auth required):
//   POST /api/v1/auth/login
//   POST /api/v1/auth/refresh
//   POST /api/v1/auth/logout
//
//   GET/POST/PUT/DELETE /api/v1/admin/services
//   GET/POST/PUT/DELETE /api/v1/admin/projects
//   GET/POST/PUT/DELETE /api/v1/admin/certificates
//   GET/POST/PUT/DELETE /api/v1/admin/gallery
//   GET/POST/PUT/DELETE /api/v1/admin/news
//   GET/POST/PUT/DELETE /api/v1/admin/testimonials
//   GET/PUT /api/v1/admin/inquiries
//   POST /api/v1/admin/upload
