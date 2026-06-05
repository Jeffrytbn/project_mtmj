/**
 * Gallery item model for project/company photos.
 */
export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string;
  projectId?: number;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
