package models

// ContactInquiry represents a contact form submission.
type ContactInquiry struct {
	ID      uint   `json:"id" gorm:"primaryKey"`
	Name    string `json:"name" gorm:"not null"`
	Email   string `json:"email" gorm:"not null"`
	Phone   string `json:"phone"`
	Company string `json:"company"`
	Subject string `json:"subject"`
	Message string `json:"message" gorm:"not null"`
	Status  string `json:"status" gorm:"default:'new'"`
	BaseModel
}
