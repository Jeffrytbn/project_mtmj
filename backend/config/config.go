package config

// Config holds application configuration.
// Will be populated from environment variables in CMS phase.
type Config struct {
	// Server
	ServerPort string
	ServerHost string

	// Database
	DBHost     string
	DBPort     string
	DBUser     string
	DBPassword string
	DBName     string
	DBSSLMode  string

	// JWT
	JWTSecret     string
	JWTExpiration int // hours

	// Upload
	UploadPath    string
	MaxUploadSize int64 // bytes

	// CORS
	AllowedOrigins []string
}

// LoadConfig loads configuration from environment variables.
// TODO: Implement in CMS phase using os.Getenv or viper.
func LoadConfig() *Config {
	return &Config{
		ServerPort: "8080",
		ServerHost: "localhost",
	}
}
