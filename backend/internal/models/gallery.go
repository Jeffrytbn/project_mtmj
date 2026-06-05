package models

// GalleryItem represents a photo in the gallery.
type GalleryItem struct {
	ID           uint   `json:"id" gorm:"primaryKey"`
	Title        string `json:"title"`
	Description  string `json:"description"`
	ImageURL     string `json:"image_url"`
	ThumbnailURL string `json:"thumbnail_url"`
	Category     string `json:"category"`
	ProjectID    *uint  `json:"project_id"`
	Order        int    `json:"order" gorm:"default:0"`
	IsActive     bool   `json:"is_active" gorm:"default:true"`
	BaseModel
}
