import { HttpInterceptorFn } from '@angular/common/http';

/**
 * API interceptor placeholder for future CMS phase.
 * Will add base URL and authorization headers to API requests.
 */
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO: In CMS phase, add:
  // - Base URL prefix for API endpoints
  // - Authorization header with JWT token
  // - Content-Type headers
  return next(req);
};
