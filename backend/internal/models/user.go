package models

// User represents an admin user for CMS.
// Will be implemented in the CMS phase.
type User struct {
	ID       uint   `json:"id" gorm:"primaryKey"`
	Username string `json:"username" gorm:"uniqueIndex;not null"`
	Email    string `json:"email" gorm:"uniqueIndex;not null"`
	Password string `json:"-" gorm:"not null"`
	FullName string `json:"full_name"`
	Role     string `json:"role" gorm:"default:'admin'"`
	IsActive bool   `json:"is_active" gorm:"default:true"`
	BaseModel
}
