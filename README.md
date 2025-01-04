# node-postgres-app/node-postgres-app/README.md

# Node PostgreSQL App

This project is a simple Node.js application that connects to a PostgreSQL database using Express and the 'pg' library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-postgres-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add your database connection details:
   ```
   DATABASE_URL=your_database_url
   ```

2. Start the application:
   ```
   npm start
   ```

3. The server will run on `http://localhost:4000`.

## Environment Variables

- `DATABASE_URL`: The connection string for your PostgreSQL database.

## License

This project is licensed under the MIT License.