import { News } from '../models';

export const MOCK_NEWS: News[] = [
  {
    id: 1, title: 'MTJM Raih Sertifikasi ISO 9001:2015',
    slug: 'mtjm-raih-sertifikasi-iso-9001',
    content: 'PT Multi Tehnik Jaya Mandiri berhasil meraih sertifikasi ISO 9001:2015 dari BSI Group Indonesia.',
    excerpt: 'MTJM resmi tersertifikasi ISO 9001:2015 untuk sistem manajemen mutu.',
    imageUrl: '/assets/images/news/iso-certification.jpg',
    author: 'Admin MTJM', category: 'company', tags: ['sertifikasi', 'iso', 'mutu'],
    publishedAt: '2024-01-20', isPublished: true,
    createdAt: '2024-01-20', updatedAt: '2024-01-20'
  },
  {
    id: 2, title: 'Penyelesaian Proyek MEP Gedung Jakarta Selatan',
    slug: 'penyelesaian-proyek-mep-jakarta-selatan',
    content: 'MTJM menyelesaikan proyek instalasi MEP pada gedung perkantoran 12 lantai di Jakarta Selatan.',
    excerpt: 'Proyek MEP gedung 12 lantai selesai tepat waktu dan sesuai standar.',
    imageUrl: '/assets/images/news/project-completion.jpg',
    author: 'Admin MTJM', category: 'project', tags: ['proyek', 'mep', 'jakarta'],
    publishedAt: '2024-02-15', isPublished: true,
    createdAt: '2024-02-15', updatedAt: '2024-02-15'
  },
  {
    id: 3, title: 'MTJM Hadir di Pameran Konstruksi Indonesia 2024',
    slug: 'mtjm-pameran-konstruksi-2024',
    content: 'MTJM turut berpartisipasi dalam Pameran Konstruksi Indonesia 2024 di JCC Senayan.',
    excerpt: 'MTJM menampilkan solusi MEP terkini di pameran konstruksi terbesar di Indonesia.',
    imageUrl: '/assets/images/news/exhibition.jpg',
    author: 'Admin MTJM', category: 'event', tags: ['pameran', 'konstruksi', 'event'],
    publishedAt: '2024-03-10', isPublished: true,
    createdAt: '2024-03-10', updatedAt: '2024-03-10'
  },
  {
    id: 4, title: 'Kerjasama Strategis dengan PT Pharma Indonesia',
    slug: 'kerjasama-strategis-pharma-indonesia',
    content: 'MTJM menandatangani kontrak kerjasama untuk desain MEP pabrik farmasi di Tangerang.',
    excerpt: 'Kontrak baru untuk desain engineering pabrik farmasi senilai miliaran rupiah.',
    imageUrl: '/assets/images/news/partnership.jpg',
    author: 'Admin MTJM', category: 'announcement', tags: ['kerjasama', 'farmasi'],
    publishedAt: '2024-04-05', isPublished: true,
    createdAt: '2024-04-05', updatedAt: '2024-04-05'
  }
];
