# Medical Report System

A modern, secure medical records management system built with React, Node.js, and SQLite. Features include appointment scheduling, secure messaging, and comprehensive medical record management.

![Medical Report System](https://i.imgur.com/example.png)

## Features

- 🏥 **Medical Records Management**: Securely store and manage patient medical records
- 📅 **Appointment Scheduling**: Book and manage medical appointments
- 💬 **Secure Messaging**: Real-time communication between patients and healthcare providers
- 🔒 **Access Control**: Granular permissions system for medical record access
- 🌓 **Dark Mode**: Elegant dark mode support for better user experience
- 📱 **Responsive Design**: Works seamlessly across all devices

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/alwaysahad/medcord.git
cd medcord
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` file with your configuration:

```
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
```

4. Set up the database:

```bash
npm run db:setup
```

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Running the Backend Server

Start the backend server:

```bash
npm run server
```

The API will be available at `http://localhost:3000`

## Project Structure

```
medical-report-system/
├── src/                    # Frontend source code
│   ├── components/        # React components
│   ├── context/          # React context providers
│   ├── pages/            # Page components
│   └── main.tsx          # Application entry point
├── server/                # Backend source code
│   ├── db/              # Database setup and migrations
│   └── index.js         # Express server setup
├── prisma/               # Prisma schema and migrations
└── public/              # Static assets
```

## Available Scripts

- `npm run dev`: Start the frontend development server
- `npm run build`: Build the frontend for production
- `npm run server`: Start the backend server
- `npm run db:setup`: Set up the database schema
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build locally

## Technologies Used

- **Frontend**:

  - React
  - TypeScript
  - Tailwind CSS
  - Lucide Icons
  - Socket.IO Client

- **Backend**:
  - Node.js
  - Express
  - SQLite
  - Socket.IO
  - JSON Web Tokens
  - Prisma ORM

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Real-time access logging
- Granular permission controls
- Secure WebSocket connections

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
