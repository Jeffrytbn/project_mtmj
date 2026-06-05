package models

// News represents a news article or update.
type News struct {
	ID          uint   `json:"id" gorm:"primaryKey"`
	Title       string `json:"title" gorm:"not null"`
	Slug        string `json:"slug" gorm:"uniqueIndex;not null"`
	Content     string `json:"content"`
	Excerpt     string `json:"excerpt"`
	ImageURL    string `json:"image_url"`
	Author      string `json:"author"`
	Category    string `json:"category"`
	PublishedAt string `json:"published_at"`
	IsPublished bool   `json:"is_published" gorm:"default:false"`
	BaseModel
}
