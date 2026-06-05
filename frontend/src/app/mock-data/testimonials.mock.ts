import { Testimonial } from '../models';

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1, clientName: 'Budi Santoso', clientPosition: 'Direktur Operasional',
    clientCompany: 'PT Graha Maju Sejahtera', clientAvatar: '/assets/images/testimonials/avatar-1.jpg',
    content: 'MTJM menyelesaikan proyek MEP gedung kami dengan sangat profesional. Kualitas pekerjaan dan ketepatan waktu sangat memuaskan.',
    rating: 5, projectId: 1, isActive: true, createdAt: '2024-01-15', updatedAt: '2024-01-15'
  },
  {
    id: 2, clientName: 'Dewi Anggraini', clientPosition: 'GM Facility Management',
    clientCompany: 'PT Bali Luxury Hotels', clientAvatar: '/assets/images/testimonials/avatar-2.jpg',
    content: 'Kontrak maintenance HVAC berjalan dengan sangat baik. Tim MTJM responsif dan selalu siap untuk emergency support.',
    rating: 5, projectId: 3, isActive: true, createdAt: '2024-03-01', updatedAt: '2024-03-01'
  },
  {
    id: 3, clientName: 'Ahmad Rizki', clientPosition: 'Project Manager',
    clientCompany: 'PT Logistik Nusantara', clientAvatar: '/assets/images/testimonials/avatar-3.jpg',
    content: 'Pembangunan gudang kami selesai tepat waktu dengan kualitas konstruksi yang sangat baik. Sangat merekomendasikan MTJM.',
    rating: 4, projectId: 2, isActive: true, createdAt: '2024-04-01', updatedAt: '2024-04-01'
  },
  {
    id: 4, clientName: 'Sari Wulandari', clientPosition: 'Head of Engineering',
    clientCompany: 'PT Pharma Indonesia', clientAvatar: '/assets/images/testimonials/avatar-4.jpg',
    content: 'Konsultasi teknik dari MTJM sangat membantu dalam perencanaan sistem MEP pabrik baru kami. Tim sangat kompeten.',
    rating: 5, isActive: true, createdAt: '2024-05-01', updatedAt: '2024-05-01'
  }
];
