import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

/**
 * Application routing configuration.
 *
 * All public routes are wrapped in MainLayoutComponent.
 * Feature modules are lazy-loaded for optimal performance.
 *
 * Future: Admin routes will be added under '/admin' path
 * with AdminLayoutComponent and AuthGuard protection.
 */
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then(m => m.HOME_ROUTES),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./features/about/about.routes').then(m => m.ABOUT_ROUTES),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services.routes').then(m => m.SERVICES_ROUTES),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./features/projects/projects.routes').then(m => m.PROJECTS_ROUTES),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./features/gallery/gallery.routes').then(m => m.GALLERY_ROUTES),
      },
      {
        path: 'certificates',
        loadChildren: () =>
          import('./features/certificates/certificates.routes').then(m => m.CERTIFICATES_ROUTES),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./features/news/news.routes').then(m => m.NEWS_ROUTES),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES),
      },
    ],
  },

  // Future: Admin routes (CMS phase)
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./future-admin/admin.routes').then(m => m.ADMIN_ROUTES),
  // },

  // Wildcard redirect
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
