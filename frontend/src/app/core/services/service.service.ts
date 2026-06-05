import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../../models';
import { MOCK_SERVICES } from '../../mock-data';

/**
 * Service layer for managing services data.
 * Currently uses mock data. Will be replaced with HTTP calls in CMS phase.
 */
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getAll(): Observable<Service[]> {
    return of(MOCK_SERVICES.filter(s => s.isActive).sort((a, b) => a.order - b.order));
  }

  getById(id: number): Observable<Service | undefined> {
    return of(MOCK_SERVICES.find(s => s.id === id));
  }

  getBySlug(slug: string): Observable<Service | undefined> {
    return of(MOCK_SERVICES.find(s => s.slug === slug));
  }
}
