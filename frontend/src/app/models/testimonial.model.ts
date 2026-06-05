/**
 * Testimonial model for client testimonials.
 */
export interface Testimonial {
  id: number;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientAvatar: string;
  content: string;
  rating: number;
  projectId?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
