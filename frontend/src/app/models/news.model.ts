/**
 * News/Article model for company news and updates.
 */
export interface News {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  category: NewsCategory;
  tags: string[];
  publishedAt: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export type NewsCategory = 'company' | 'project' | 'industry' | 'event' | 'announcement';
