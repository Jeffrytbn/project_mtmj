package models

// Certificate represents a company certification.
type Certificate struct {
	ID                  uint   `json:"id" gorm:"primaryKey"`
	Title               string `json:"title" gorm:"not null"`
	IssuingOrganization string `json:"issuing_organization"`
	CertificateNumber   string `json:"certificate_number"`
	IssueDate           string `json:"issue_date"`
	ExpiryDate          string `json:"expiry_date"`
	ImageURL            string `json:"image_url"`
	Description         string `json:"description"`
	Category            string `json:"category"`
	IsActive            bool   `json:"is_active" gorm:"default:true"`
	BaseModel
}
