/**
 * Contact inquiry model for the contact form.
 */
export interface ContactInquiry {
  id?: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  status?: InquiryStatus;
  createdAt?: string;
  updatedAt?: string;
}

export type InquiryStatus = 'new' | 'read' | 'replied' | 'archived';

/**
 * Company contact information.
 */
export interface CompanyContact {
  companyName: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  website: string;
  googleMapsUrl: string;
  socialMedia: SocialMedia;
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
}
