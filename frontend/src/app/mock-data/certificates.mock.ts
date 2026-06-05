import { Certificate } from '../models';

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'ISO 9001:2015 Quality Management System',
    issuingOrganization: 'BSI Group Indonesia',
    certificateNumber: 'QMS-2023-001245',
    issueDate: '2023-01-15',
    expiryDate: '2026-01-14',
    imageUrl: '/assets/images/certificates/iso-9001.jpg',
    description: 'Sertifikasi sistem manajemen mutu ISO 9001:2015 untuk layanan mekanikal, elektrikal, dan plumbing.',
    category: 'iso',
    isActive: true,
    createdAt: '2023-01-15',
    updatedAt: '2023-01-15'
  },
  {
    id: 2,
    title: 'ISO 14001:2015 Environmental Management System',
    issuingOrganization: 'BSI Group Indonesia',
    certificateNumber: 'EMS-2023-002156',
    issueDate: '2023-03-01',
    expiryDate: '2026-02-28',
    imageUrl: '/assets/images/certificates/iso-14001.jpg',
    description: 'Sertifikasi sistem manajemen lingkungan ISO 14001:2015.',
    category: 'environmental',
    isActive: true,
    createdAt: '2023-03-01',
    updatedAt: '2023-03-01'
  },
  {
    id: 3,
    title: 'ISO 45001:2018 Occupational Health & Safety',
    issuingOrganization: 'TÜV Rheinland Indonesia',
    certificateNumber: 'OHS-2023-003078',
    issueDate: '2023-06-01',
    expiryDate: '2026-05-31',
    imageUrl: '/assets/images/certificates/iso-45001.jpg',
    description: 'Sertifikasi sistem manajemen keselamatan dan kesehatan kerja ISO 45001:2018.',
    category: 'safety',
    isActive: true,
    createdAt: '2023-06-01',
    updatedAt: '2023-06-01'
  },
  {
    id: 4,
    title: 'Sertifikat Badan Usaha (SBU) Mekanikal',
    issuingOrganization: 'LPJK Nasional',
    certificateNumber: 'SBU-ME-2024-045678',
    issueDate: '2024-01-01',
    expiryDate: '2027-12-31',
    imageUrl: '/assets/images/certificates/sbu-mekanikal.jpg',
    description: 'Sertifikat Badan Usaha untuk klasifikasi Instalasi Mekanikal kualifikasi Besar (B) Grade 5.',
    category: 'professional',
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 5,
    title: 'Sertifikat Badan Usaha (SBU) Elektrikal',
    issuingOrganization: 'LPJK Nasional',
    certificateNumber: 'SBU-EL-2024-045679',
    issueDate: '2024-01-01',
    expiryDate: '2027-12-31',
    imageUrl: '/assets/images/certificates/sbu-elektrikal.jpg',
    description: 'Sertifikat Badan Usaha untuk klasifikasi Instalasi Elektrikal kualifikasi Besar (B) Grade 5.',
    category: 'professional',
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 6,
    title: 'SMK3 (Sistem Manajemen K3)',
    issuingOrganization: 'Kementerian Ketenagakerjaan RI',
    certificateNumber: 'SMK3-2023-089012',
    issueDate: '2023-09-01',
    expiryDate: '2026-08-31',
    imageUrl: '/assets/images/certificates/smk3.jpg',
    description: 'Sertifikat Sistem Manajemen Keselamatan dan Kesehatan Kerja dari Kemenaker dengan pencapaian tingkat Emas.',
    category: 'safety',
    isActive: true,
    createdAt: '2023-09-01',
    updatedAt: '2023-09-01'
  }
];
