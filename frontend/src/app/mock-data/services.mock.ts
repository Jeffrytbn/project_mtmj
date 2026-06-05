import { Service } from '../models';

export const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    title: 'Engineering',
    slug: 'engineering',
    description: 'Comprehensive design and engineering services for infrastructure including detailed engineering, 3D modeling, and project optimization.',
    shortDescription: 'Comprehensive design and engineering services for infrastructure including detailed analysis.',
    icon: 'architecture',
    imageUrl: '/assets/images/services/hero-bg.jpg',
    features: [
      'FEED & Detail Energy',
      '3D Modeling & Simulation',
      'Project Optimization'
    ],
    isActive: true,
    order: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 2,
    title: 'Procurement',
    slug: 'procurement',
    description: 'Strategic sourcing of industrial-grade materials and equipment with optimized supply chain management and vendor qualification.',
    shortDescription: 'Strategic sourcing of industrial-grade materials and equipment.',
    icon: 'local_shipping',
    imageUrl: '/assets/images/services/hero-bg.jpg',
    features: [
      'Global Supply Chain',
      'Quality Control Audit',
      'Vendor Management'
    ],
    isActive: true,
    order: 2,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 3,
    title: 'Construction',
    slug: 'construction',
    description: 'Standard execution of civil, mechanical, and electrical construction with safety-first approach and international quality standards.',
    shortDescription: 'Standard execution of civil, mechanical, and electrical construction.',
    icon: 'construction',
    imageUrl: '/assets/images/services/hero-bg.jpg',
    features: [
      'Infrastructure',
      'Structure Works',
      'Finishing & Installation'
    ],
    isActive: true,
    order: 3,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 4,
    title: 'Mechanical',
    slug: 'mechanical',
    description: 'Fabrication and alignment of heavy machinery and piping systems including precision installation and system commissioning.',
    shortDescription: 'Fabrication and alignment of heavy machinery and piping systems.',
    icon: 'precision_manufacturing',
    imageUrl: '/assets/images/services/hero-bg.jpg',
    features: [
      'Equipment Installation',
      'Piping Fabrication',
      'Pump System'
    ],
    isActive: true,
    order: 4,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];
