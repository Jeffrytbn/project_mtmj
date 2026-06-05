import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Admin layout placeholder for future CMS phase.
 * Will include admin sidebar, top bar, and content area.
 */
@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- TODO: Implement admin layout in CMS phase -->
    <!-- Admin Sidebar -->
    <!-- Admin Top Bar -->
    <main class="admin-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    .admin-content {
      min-height: 100vh;
      padding: 24px;
    }
  `]
})
export class AdminLayoutComponent {}
