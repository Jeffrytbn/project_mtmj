package models

// Service represents a service offered by MTJM.
// Maps to the 'services' table in PostgreSQL.
type Service struct {
	ID               uint   `json:"id" gorm:"primaryKey"`
	Title            string `json:"title" gorm:"not null"`
	Slug             string `json:"slug" gorm:"uniqueIndex;not null"`
	Description      string `json:"description"`
	ShortDescription string `json:"short_description"`
	Icon             string `json:"icon"`
	ImageURL         string `json:"image_url"`
	IsActive         bool   `json:"is_active" gorm:"default:true"`
	Order            int    `json:"order" gorm:"default:0"`
	BaseModel
}
