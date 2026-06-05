import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryItem } from '../../models';
import { MOCK_GALLERY } from '../../mock-data';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  getAll(): Observable<GalleryItem[]> {
    return of(MOCK_GALLERY.filter(g => g.isActive).sort((a, b) => a.order - b.order));
  }

  getByCategory(category: string): Observable<GalleryItem[]> {
    return of(MOCK_GALLERY.filter(g => g.category === category && g.isActive));
  }

  getByProjectId(projectId: number): Observable<GalleryItem[]> {
    return of(MOCK_GALLERY.filter(g => g.projectId === projectId && g.isActive));
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(MOCK_GALLERY.filter(g => g.isActive).map(g => g.category))];
    return of(categories);
  }
}
