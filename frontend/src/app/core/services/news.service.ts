import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from '../../models';
import { MOCK_NEWS } from '../../mock-data';

@Injectable({ providedIn: 'root' })
export class NewsService {
  getAll(): Observable<News[]> {
    return of(MOCK_NEWS.filter(n => n.isPublished));
  }

  getById(id: number): Observable<News | undefined> {
    return of(MOCK_NEWS.find(n => n.id === id));
  }

  getBySlug(slug: string): Observable<News | undefined> {
    return of(MOCK_NEWS.find(n => n.slug === slug));
  }

  getByCategory(category: string): Observable<News[]> {
    return of(MOCK_NEWS.filter(n => n.category === category && n.isPublished));
  }

  getLatest(count: number): Observable<News[]> {
    return of(
      MOCK_NEWS.filter(n => n.isPublished)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, count)
    );
  }
}
