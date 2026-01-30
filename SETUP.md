# Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. The SQLite database will be automatically created at `/data/portfolio.db` on first run.

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

## Admin Panel Access

Navigate to `/admin/login` and use the following credentials:

- **Username**: `admin`
- **Password**: `Messi@876910`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route handlers
│   ├── storage.ts         # Database operations
│   └── db.ts              # SQLite connection
├── shared/                # Shared types and schemas
│   ├── schema.ts          # Database schema definitions
│   └── routes.ts          # API contract definitions
├── data/                  # SQLite database file (auto-created)
└── public/uploads/        # Uploaded project images
```

## Database Tables

### projects
| Field       | Type     | Description           |
|-------------|----------|-----------------------|
| id          | INTEGER  | Primary key           |
| title       | TEXT     | Project title         |
| description | TEXT     | Project description   |
| image       | TEXT     | Image path/URL        |
| link        | TEXT     | Project link          |
| created_at  | INTEGER  | Timestamp             |

### contact_messages
| Field       | Type     | Description           |
|-------------|----------|-----------------------|
| id          | INTEGER  | Primary key           |
| name        | TEXT     | Sender name           |
| email       | TEXT     | Sender email          |
| message     | TEXT     | Message content       |
| created_at  | INTEGER  | Timestamp             |

## Environment Variables

| Variable       | Description                    | Default                        |
|----------------|--------------------------------|--------------------------------|
| SESSION_SECRET | Secret key for session cookies | messi-portfolio-secret-key     |
| PORT           | Server port                    | 5000                           |

## API Endpoints

### Public
- `GET /api/projects` - List all projects
- `POST /api/contact` - Submit contact form

### Protected (requires admin login)
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/check` - Check auth status
- `POST /api/projects` - Create project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `GET /api/contact` - List contact messages
- `DELETE /api/contact/:id` - Delete message
- `POST /api/upload` - Upload image
