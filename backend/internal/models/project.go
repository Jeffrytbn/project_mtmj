package models

// Project represents a completed or ongoing project.
type Project struct {
	ID               uint   `json:"id" gorm:"primaryKey"`
	Title            string `json:"title" gorm:"not null"`
	Slug             string `json:"slug" gorm:"uniqueIndex;not null"`
	Description      string `json:"description"`
	ShortDescription string `json:"short_description"`
	Client           string `json:"client"`
	Location         string `json:"location"`
	Category         string `json:"category"`
	ImageURL         string `json:"image_url"`
	StartDate        string `json:"start_date"`
	EndDate          string `json:"end_date"`
	Status           string `json:"status" gorm:"default:'upcoming'"`
	ServiceID        uint   `json:"service_id"`
	IsActive         bool   `json:"is_active" gorm:"default:true"`
	BaseModel
}
