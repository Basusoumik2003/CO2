// Example configuration file
// Copy this to .env file in the user-service directory

module.exports = {
  // Database Configuration
  DB_HOST: 'localhost',
  DB_USER: 'postgres',
  DB_PASSWORD: 'your_postgres_password_here',
  DB_NAME: 'carboncredit',
  DB_PORT: 5432,
  
  // Environment
  NODE_ENV: 'development'
};

// To use this:
// 1. Create a .env file in the user-service directory
// 2. Add the following lines:
// DB_HOST=localhost
// DB_USER=postgres
// DB_PASSWORD=your_actual_password
// DB_NAME=carboncredit
// DB_PORT=5432
// NODE_ENV=development
