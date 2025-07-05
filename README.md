# 🎫 Helpdesk - Advanced Ticket Management System

<div align="center">

![Helpdesk Logo](https://img.shields.io/badge/Helpdesk-Ticket%20Management-blue?style=for-the-badge&logo=headspace&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-success?style=for-the-badge&logo=vercel)](https://help-desk-eight-pi.vercel.app/)
[![Demo Video](https://img.shields.io/badge/Demo%20Video-Watch%20Now-red?style=for-the-badge&logo=youtube)](https://drive.google.com/file/d/1mSgpO0_FzwPg8gwrkjNi_d6Hnjvt99U3/view?usp=drive_link)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/dhruvp66572/help-desk)

*A comprehensive, role-based ticket management system built with modern web technologies*

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

The **Helpdesk Ticket Management System** is a full-stack web application designed to streamline support operations through efficient ticket management, role-based access control, and comprehensive user management. Built with React.js frontend and Node.js backend, it provides a scalable solution for organizations of all sizes.

### Key Highlights

- 🔐 **Multi-role Authentication** - Admin, Operator, Support, and User roles
- 🎯 **Advanced Ticket Management** - Create, assign, track, and resolve tickets
- 📊 **Real-time Analytics** - Performance metrics and user activity tracking
- 🎨 **Modern UI/UX** - Responsive design with Tailwind CSS
- 🔄 **RESTful API** - Well-documented API endpoints
- 🗄️ **Flexible Database** - SQLite for development, PostgreSQL for production

---

## ✨ Features

### 🔐 Authentication & Authorization
- [x] JWT-based secure authentication
- [x] Role-based access control (RBAC)
- [x] Password reset functionality
- [x] Session management
- [x] Protected routes

### 🎫 Ticket Management
- [x] Create tickets with rich text descriptions
- [x] Assign tickets to team members
- [x] Status tracking (Open, In Progress, Resolved, Closed)
- [x] Priority levels (Low, Medium, High, Critical)
- [x] Ticket categories and tagging
- [x] File attachments support
- [x] Ticket history and audit trail

### 👥 User Management
- [x] User registration and profile management
- [x] Team member management
- [x] Role assignment and permissions
- [x] User activity logging
- [x] Bulk user operations

### 📊 Analytics & Reporting
- [x] Dashboard with key metrics
- [x] Ticket statistics and trends
- [x] User performance analytics
- [x] Downloadable reports
- [x] Real-time notifications

### 🎨 User Interface
- [x] Responsive mobile-first design
- [x] Intuitive navigation
- [x] Modal popups for quick actions
- [x] Advanced search and filtering
- [x] Sorting and pagination

---

## ⚙️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Database
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### DevOps & Tools
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

</div>

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16.0 or higher)
- **npm** or **yarn**
- **Git**

### 🧑‍💻 Test Credentials

| Role | Username | Password |
|------|----------|----------|
| 👑 **Admin** | `admin` | `Admin@1234` |
| 🔧 **Operator** | `operator1` | `Operator@1234` |
| 🛠️ **Support** | `support1` | `support@1234` |
| 👤 **User** | `user1` | `User@1234` |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/dhruvp66572/help-desk.git
cd help-desk
```

### 2. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 3. Environment Setup

Create a `.env` file in the `backend` directory:

**Development (SQLite):**
```env
# Database
DATABASE_URL="file:./prisma/helpdesk.db"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV="development"

# CORS
FRONTEND_URL="http://localhost:3000"
```

**Production (PostgreSQL):**
```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database_name?sslmode=require"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV="production"

# CORS
FRONTEND_URL="https://your-frontend-domain.com"
```

### 4. Database Setup

```bash
cd backend

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 6. Access the Application

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Prisma Studio:** [http://localhost:5555](http://localhost:5555) (run `npx prisma studio`)

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection string | `file:./prisma/helpdesk.db` |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `JWT_EXPIRES_IN` | JWT token expiration time | `7d` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` |

### Database Configuration

The application supports both SQLite (development) and PostgreSQL (production):

- **SQLite:** No additional setup required
- **PostgreSQL:** Requires a PostgreSQL instance (local or cloud)

---

## 🎯 Usage

### Admin Dashboard
- Manage users and assign roles
- View system-wide analytics
- Configure system settings
- Monitor ticket statistics

### Operator Functions
- Create and assign tickets
- Manage team workload
- Generate reports
- Monitor team performance

### Support Team
- Respond to assigned tickets
- Update ticket status
- Collaborate with team members
- Track resolution time

### End Users
- Submit support requests
- Track ticket progress
- Update ticket information
- View ticket history

---

## 📚 API Documentation

### Authentication Endpoints

```http
POST /api/auth/login          # User login
POST /api/auth/register       # User registration
POST /api/auth/forgot-password # Password reset
POST /api/auth/logout         # User logout
GET  /api/auth/verify         # Verify JWT token
```

### Ticket Endpoints

```http
GET    /api/tickets           # Get all tickets
POST   /api/tickets           # Create new ticket
GET    /api/tickets/:id       # Get ticket by ID
PUT    /api/tickets/:id       # Update ticket
DELETE /api/tickets/:id       # Delete ticket
```

### User Management Endpoints

```http
GET    /api/users             # Get all users
POST   /api/users             # Create new user
GET    /api/users/:id         # Get user by ID
PUT    /api/users/:id         # Update user
DELETE /api/users/:id         # Delete user
```

### Analytics Endpoints

```http
GET    /api/stats/dashboard   # Dashboard statistics
GET    /api/stats/tickets     # Ticket analytics
GET    /api/stats/users       # User analytics
GET    /api/logs/activity     # User activity logs
```

---

## 📁 Project Structure

```
helpdesk-project/
├── 📁 frontend/                 # React Frontend Application
│   ├── 📁 public/              # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TicketActionModal.jsx
│   │   │   ├── TicketCard.jsx
│   │   │   └── ViewTicketModal.jsx
│   │   ├── 📁 layouts/         # Layout components
│   │   │   └── MainLayout.jsx
│   │   ├── 📁 pages/           # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyTickets.jsx
│   │   │   ├── NewTicket.jsx
│   │   │   └── ...
│   │   ├── 📁 utils/           # Utility functions
│   │   │   └── axiosInstance.js
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── vite.config.js          # Vite configuration
│
├── 📁 backend/                  # Node.js Backend Application
│   ├── 📁 prisma/              # Database schema and migrations
│   │   ├── schema.prisma       # Prisma schema definition
│   │   ├── helpdesk.db         # SQLite database file
│   │   └── 📁 migrations/      # Database migrations
│   ├── 📁 routes/              # API route handlers
│   │   ├── auth.js             # Authentication routes
│   │   ├── tickets.js          # Ticket management routes
│   │   ├── users.js            # User management routes
│   │   ├── stats.js            # Analytics routes
│   │   └── logs.js             # Activity logs routes
│   ├── 📁 middleware/          # Express middleware
│   │   └── authMiddleware.js   # JWT authentication middleware
│   ├── 📁 lib/                 # Utility libraries
│   │   └── utils.js            # Helper functions
│   ├── server.js               # Express server entry point
│   └── package.json            # Backend dependencies
│
├── README.md                    # Project documentation
└── .gitignore                   # Git ignore rules
```

---

## 🧪 Testing

### Running Tests

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test

# Run all tests
npm run test:all
```

### Test Coverage

```bash
# Generate test coverage report
npm run test:coverage
```

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Build the frontend
cd frontend
npm run build

# Deploy to Vercel
vercel --prod
```

### Backend (Railway/Heroku)

```bash
# Set environment variables
# Deploy using your preferred platform
```

### Database Migration

```bash
# Production database setup
npx prisma migrate deploy
npx prisma generate
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

<div align="center">

**Project Maintainer:** [Dhruv Patel](https://github.com/dhruvp66572)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-profile)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:your-email@example.com)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/dhruvp66572)

</div>

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Prisma Team** - For the excellent ORM
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For hosting and deployment platform
- **Open Source Community** - For continuous inspiration

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ by [Dhruv Prajapati](https://github.com/dhruvp66572)

</div>
