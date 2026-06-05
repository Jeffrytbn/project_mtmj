import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../models';
import { MOCK_PROJECTS } from '../../mock-data';

/**
 * Service layer for managing projects data.
 * Currently uses mock data. Will be replaced with HTTP calls in CMS phase.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getAll(): Observable<Project[]> {
    return of(MOCK_PROJECTS.filter(p => p.isActive));
  }

  getById(id: number): Observable<Project | undefined> {
    return of(MOCK_PROJECTS.find(p => p.id === id));
  }

  getBySlug(slug: string): Observable<Project | undefined> {
    return of(MOCK_PROJECTS.find(p => p.slug === slug));
  }

  getByCategory(category: string): Observable<Project[]> {
    return of(MOCK_PROJECTS.filter(p => p.category === category && p.isActive));
  }

  getByStatus(status: string): Observable<Project[]> {
    return of(MOCK_PROJECTS.filter(p => p.status === status && p.isActive));
  }
}
