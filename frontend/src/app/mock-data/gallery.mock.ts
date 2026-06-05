import { GalleryItem } from '../models';

export const MOCK_GALLERY: GalleryItem[] = [
  {
    id: 1, title: 'Instalasi HVAC Gedung Perkantoran',
    description: 'Proses instalasi sistem HVAC pada gedung perkantoran di Jakarta Selatan.',
    imageUrl: '/assets/images/gallery/hvac-installation.jpg',
    thumbnailUrl: '/assets/images/gallery/thumbs/hvac-installation.jpg',
    category: 'Mekanikal', projectId: 1, order: 1, isActive: true,
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },
  {
    id: 2, title: 'Panel Listrik Utama',
    description: 'Pemasangan panel distribusi listrik utama.',
    imageUrl: '/assets/images/gallery/electrical-panel.jpg',
    thumbnailUrl: '/assets/images/gallery/thumbs/electrical-panel.jpg',
    category: 'Elektrikal', projectId: 1, order: 2, isActive: true,
    createdAt: '2024-01-01', updatedAt: '2024-01-01'
  },
  {
    id: 3, title: 'Konstruksi Gudang Logistik',
    description: 'Pembangunan gudang logistik di kawasan industri Cikarang.',
    imageUrl: '/assets/images/gallery/warehouse-construction.jpg',
    thumbnailUrl: '/assets/images/gallery/thumbs/warehouse-construction.jpg',
    category: 'Konstruksi', projectId: 2, order: 3, isActive: true,
    createdAt: '2024-02-01', updatedAt: '2024-02-01'
  },
  {
    id: 4, title: 'Sistem Fire Sprinkler',
    description: 'Instalasi sistem fire sprinkler pada area komersial.',
    imageUrl: '/assets/images/gallery/fire-sprinkler.jpg',
    thumbnailUrl: '/assets/images/gallery/thumbs/fire-sprinkler.jpg',
    category: 'Fire Protection', projectId: 4, order: 4, isActive: true,
    createdAt: '2024-03-01', updatedAt: '2024-03-01'
  },
  {
    id: 5, title: 'Tim Engineering MTJM',
    description: 'Tim engineering MTJM dalam kunjungan proyek.',
    imageUrl: '/assets/images/gallery/team-engineering.jpg',
    thumbnailUrl: '/assets/images/gallery/thumbs/team-engineering.jpg',
    category: 'Perusahaan', order: 5, isActive: true,
    createdAt: '2024-03-15', updatedAt: '2024-03-15'
  },
  {
    id: 6, title: 'Sistem Perpipaan Industri',
    description: 'Instalasi sistem perpipaan pada fasilitas industri.',
    imageUrl: '/assets/images/gallery/industrial-piping.jpg',
    thumbnailUrl: '/assets/images/gallery/thumbs/industrial-piping.jpg',
    category: 'Plumbing', projectId: 5, order: 6, isActive: true,
    createdAt: '2024-04-01', updatedAt: '2024-04-01'
  }
];
