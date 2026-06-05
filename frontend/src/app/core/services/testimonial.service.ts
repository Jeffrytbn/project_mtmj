import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../../models';
import { MOCK_TESTIMONIALS } from '../../mock-data';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  getAll(): Observable<Testimonial[]> {
    return of(MOCK_TESTIMONIALS.filter(t => t.isActive));
  }

  getByProjectId(projectId: number): Observable<Testimonial[]> {
    return of(MOCK_TESTIMONIALS.filter(t => t.projectId === projectId && t.isActive));
  }
}
