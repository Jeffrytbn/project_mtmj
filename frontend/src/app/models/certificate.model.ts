/**
 * Certificate model representing company certifications.
 */
export interface Certificate {
  id: number;
  title: string;
  issuingOrganization: string;
  certificateNumber: string;
  issueDate: string;
  expiryDate: string;
  imageUrl: string;
  description: string;
  category: CertificateCategory;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CertificateCategory = 'iso' | 'safety' | 'quality' | 'environmental' | 'professional' | 'other';
