/**
 * Service model representing a service offered by MTJM.
 */
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  imageUrl: string;
  features: string[];
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}
