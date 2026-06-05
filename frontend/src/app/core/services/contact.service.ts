import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyContact, ContactInquiry } from '../../models';
import { MOCK_COMPANY_CONTACT } from '../../mock-data';

@Injectable({ providedIn: 'root' })
export class ContactService {
  getCompanyContact(): Observable<CompanyContact> {
    return of(MOCK_COMPANY_CONTACT);
  }

  /**
   * Submit a contact inquiry.
   * Currently logs to console. Will POST to API in CMS phase.
   */
  submitInquiry(inquiry: ContactInquiry): Observable<{ success: boolean; message: string }> {
    console.log('Contact inquiry submitted:', inquiry);
    return of({ success: true, message: 'Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.' });
  }
}
