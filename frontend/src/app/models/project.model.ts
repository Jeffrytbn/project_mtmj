/**
 * Project model representing a completed or ongoing project.
 */
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  client: string;
  location: string;
  category: string;
  imageUrl: string;
  galleryImages: string[];
  startDate: string;
  endDate: string;
  status: ProjectStatus;
  serviceId: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'upcoming';
