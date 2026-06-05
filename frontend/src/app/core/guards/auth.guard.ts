import { CanActivateFn } from '@angular/router';

/**
 * Auth guard placeholder for future CMS phase.
 * Will check JWT token validity before allowing access to admin routes.
 */
export const authGuard: CanActivateFn = (route, state) => {
  // TODO: Implement authentication check in CMS phase
  // - Check for valid JWT token
  // - Redirect to login if not authenticated
  return false; // Block admin access in static phase
};
