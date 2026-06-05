package models

// Testimonial represents a client testimonial.
type Testimonial struct {
	ID             uint   `json:"id" gorm:"primaryKey"`
	ClientName     string `json:"client_name"`
	ClientPosition string `json:"client_position"`
	ClientCompany  string `json:"client_company"`
	ClientAvatar   string `json:"client_avatar"`
	Content        string `json:"content"`
	Rating         int    `json:"rating"`
	ProjectID      *uint  `json:"project_id"`
	IsActive       bool   `json:"is_active" gorm:"default:true"`
	BaseModel
}
