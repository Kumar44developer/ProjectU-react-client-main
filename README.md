<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-6.3.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Axios-0.27.2-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Styled_Components-5.3.5-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="Styled Components" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

# 👥 ProjectU — User Management Client

> A modern, responsive user management single-page application built with React 18, React Router v6, and Bootstrap 5. Provides end-to-end CRUD operations, real-time toast alerts, content placeholder skeletons, and a modular layout architecture.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Integration](#-api-integration)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

ProjectU is a sleek, component-driven client application designed for managing user records across organizations. It delivers a fast, intuitive experience for creating, listing, inspecting, updating, and removing users.

The application features full error resilience, loading state skeletons with React Content Loader, responsive grid systems powered by React-Bootstrap, global theme injection using Styled Components, and interactive notifications via React Toastify.

---

## ✨ Key Features

- **Full User CRUD Operations** — Create, view, update, and remove user profiles seamlessly.
- **Interactive Data Cards** — Dynamic card views with quick action links for direct user editing and deletion.
- **Skeleton Screen Loaders** — Elegant placeholder loading animations while retrieving user lists from backend APIs.
- **Real-Time Toast Feedback** — Immediate user alerts for successful updates, creation events, warnings, and API failures.
- **Robust Error Handling** — Safe error parsing that gracefully catches network timeouts and API validation errors.
- **Modular Layout Architecture** — Shared layout container providing sticky top navigation, active route links, and a structured footer.
- **Configurable API Endpoints** — Environment-driven base URLs enabling easy switching between development and production backends.
- **Client-Side Routing** — Fast, declarative routing powered by React Router v6 with URL parameters.

---

## 🛠️ Tech Stack

| Technology | Role | Purpose |
|------------|------|---------|
| React 18.2.0 | Frontend Framework | Declarative component UI and state management |
| React Router DOM 6.3.0 | Routing Engine | Client-side page navigation and URL parameter routing |
| React-Bootstrap 5.1.3 | UI Components | Responsive grids, navigation bars, buttons, and form controls |
| Axios 0.27.2 | HTTP Client | REST API requests and response interception |
| React Toastify 9.0.5 | Notifications | Pop-up toast alerts for user feedback |
| React Content Loader 6.2.0 | Loading UX | SVG-based content loading placeholders |
| Styled Components 5.3.5 | Styling | Dynamic CSS-in-JS and global style definitions |
| React Testing Library & Jest | Testing | Component rendering and unit assertion testing |

---

## 🏗️ System Architecture

```
                       Browser / User
                             │
                             ▼
┌────────────────────────────────────────────────────────┐
│                        App.js                          │
│                (React Router v6 Routes)                │
└────────────────────────────┬───────────────────────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│  UsersList  │       │ CreateUser  │       │  EditUser   │
│      /      │       │   /create   │       │ /edit/:id   │
└──────┬──────┘       └──────┬──────┘       └──────┬──────┘
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                             │
                             ▼
┌────────────────────────────────────────────────────────┐
│                   Shared Layout                        │
│   - TopNavigation (Sticky Navbar & Brand)              │
│   - ToastContainer (Global Notifications)              │
│   - Footer (Site Links & Sections)                     │
└────────────────────────────┬───────────────────────────┘
                             │
                             ▼
┌────────────────────────────────────────────────────────┐
│                 user.service.js (Axios)                │
│             http://localhost:4000/v1/user              │
└────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
project Number4/
├── public/
│   └── index.html             # HTML entry template with root mount container
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx     # Site footer with categorical navigation links
│   │   │   ├── Layout.jsx     # Master page layout wrapper
│   │   │   ├── Layout.test.js # Test suite for Layout component
│   │   │   └── TopNavigation.jsx # Top navbar with active route links
│   │   ├── services/
│   │   │   └── user.service.js # Re-export for backward compatibility
│   │   └── user/
│   │       └── UserCard.jsx   # Profile summary card with action buttons
│   ├── helpers/
│   │   └── string.helper.js   # Text transformation utility functions
│   ├── pages/
│   │   ├── static/
│   │   │   ├── AboutUs.jsx    # About page view
│   │   │   └── Contact.jsx    # Contact support page view
│   │   └── user/
│   │       ├── CreateUser.jsx # New user onboarding form
│   │       ├── EditUser.jsx   # Existing user modification form
│   │       ├── RemoveUser.jsx # User deletion confirmation dialog
│   │       ├── RetrieveUser.jsx # Detailed single user profile display
│   │       └── UsersList.jsx  # All users grid view with skeleton loader
│   ├── services/
│   │   └── user.service.js    # Centralized Axios API service layer
│   ├── App.js                 # Application route registry
│   ├── App.test.js            # Integration tests for main app container
│   ├── index.css              # Global styles
│   ├── index.js               # React 18 createRoot bootstrap entry
│   ├── reportWebVitals.js     # Web vitals performance monitoring
│   └── setupTests.js          # Jest DOM matchers configuration
├── .gitignore                 # Files excluded from version control
├── package.json               # Project dependencies and script definitions
├── package-lock.json          # Locked dependency tree
└── README.md                  # Project documentation
```

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `UsersList` | Displays all registered users in a responsive grid |
| `/create` | `CreateUser` | Form for registering a new user record |
| `/:userId` | `RetrieveUser` | Detailed view for a single user by ID |
| `/edit/:userId` | `EditUser` | Form to edit user name, email, city, and country |
| `/remove/:userId` | `RemoveUser` | Confirmation screen to delete a user |
| `/about` | `AboutUs` | Informational page about the application |
| `/contact` | `Contact` | Contact information and support channel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kumar44developer/ProjectU-react-client-main.git
   cd ProjectU-react-client-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional):
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root to configure runtime options:

```env
REACT_APP_API_URL=http://localhost:4000/v1
```

If not provided, the client defaults to `http://localhost:4000/v1`.

---

## 📜 Available Scripts

| Command | Action |
|---------|--------|
| `npm start` | Starts the React development server on port 3000 with hot reloading |
| `npm run build` | Bundles and minifies production-ready static assets into `build/` |
| `npm test` | Launches the Jest test runner in interactive watch mode |
| `npm run eject` | Ejects Create React App configuration for advanced customization |

---

## 🌐 API Integration

The client communicates with a RESTful backend through the service layer located at `src/services/user.service.js`.

### Expected API Endpoints

| Method | Endpoint | Description | Payload / Params |
|--------|----------|-------------|------------------|
| `GET` | `/user/all` | Fetch all user records | None |
| `GET` | `/user/:id` | Fetch single user details | URL param `id` |
| `POST` | `/user` | Create a new user record | `{ name, email, city, country }` |
| `PUT` | `/user/:id` | Update existing user record | URL param `id`, updated user fields |
| `DELETE` | `/user/:id` | Remove a user record | URL param `id` |

---

## 🧪 Testing

The repository includes unit and component tests using React Testing Library and Jest:

- **Layout Tests** (`Layout.test.js`):
  - Validates full render cycle of TopNavigation, child components, and Footer within router context.
- **Application Tests** (`App.test.js`):
  - Validates brand identity and primary navigation links.

To run tests in CI mode:
```bash
CI=true npm test
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
