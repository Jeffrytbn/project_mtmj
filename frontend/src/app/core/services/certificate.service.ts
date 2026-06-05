import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from '../../models';
import { MOCK_CERTIFICATES } from '../../mock-data';

@Injectable({ providedIn: 'root' })
export class CertificateService {
  getAll(): Observable<Certificate[]> {
    return of(MOCK_CERTIFICATES.filter(c => c.isActive));
  }

  getById(id: number): Observable<Certificate | undefined> {
    return of(MOCK_CERTIFICATES.find(c => c.id === id));
  }

  getByCategory(category: string): Observable<Certificate[]> {
    return of(MOCK_CERTIFICATES.filter(c => c.category === category && c.isActive));
  }
}
