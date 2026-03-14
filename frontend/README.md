# AI Journal System - Frontend

A modern React + Vite frontend application for an AI-powered journal system. This application allows users to write journal entries and receive AI-powered insights based on their writing.

## Features

- 📝 **Journal Entry Management** - Create, read, update, and delete journal entries
- 🤖 **AI-Powered Insights** - Get intelligent analysis and insights from your journal entries powered by LLM
- 📊 **Entry List** - Browse all your journal entries with sorting and filtering
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- ⚡ **Fast Development** - Hot Module Replacement (HMR) with Vite
- 📱 **Responsive Design** - Works seamlessly across desktop and mobile devices

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API communication
- **ESLint** - Code linting
- **Node.js** - Runtime environment

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Getting Started

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the backend API configuration:
```env
VITE_API_URL=http://localhost:5000/api
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build the project for production:
```bash
npm run build
```

The optimized build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check for code quality issues:
```bash
npm run lint
```

## Project Structure

```
frontend/
├── src/
│   ├── components/              # Reusable React components
│   │   ├── EntryList.jsx        # Component for displaying list of journal entries
│   │   ├── Insights.jsx         # Component for displaying AI-powered insights
│   │   └── JournalForm.jsx      # Component for creating/editing journal entries
│   ├── services/
│   │   └── api.js               # Axios instance and API integration
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Application styles
│   ├── main.jsx                 # Application entry point
│   ├── index.css                # Global styles
│   └── assets/                  # Static assets
├── public/                      # Public assets
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── .env                         # Environment variables
├── package.json                 # Project metadata and dependencies
└── README.md                    # This file
```

## Components

### EntryList
Displays a list of all journal entries with options to view, edit, and delete.

### JournalForm
A form component for creating new journal entries or editing existing ones.

### Insights
Displays AI-powered insights and analysis of journal entries.

## API Integration

The frontend communicates with the backend API through the Axios client configured in `src/services/api.js`.

### Base API URL
- Development: `http://localhost:5000/api`
- Production: Configure via environment variables

### Main Endpoints
- `GET /journals` - Fetch all journal entries
- `POST /journals` - Create a new journal entry
- `GET /journals/:id` - Fetch a specific journal entry
- `PUT /journals/:id` - Update a journal entry
- `DELETE /journals/:id` - Delete a journal entry
- `GET /journals/:id/insights` - Get AI insights for an entry

## Environment Variables

Create a `.env` file in the frontend directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Other configurations as needed
```

## Development Guidelines

- Follow the existing code structure and naming conventions
- Use functional components with React hooks
- Keep components focused and reusable
- Use Tailwind CSS for styling
- Run ESLint before committing changes
- Test components in different browsers and screen sizes

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### API Connection Issues
- Ensure the backend server is running on the configured port
- Check the `VITE_API_URL` environment variable
- Verify CORS configuration on the backend

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Rebuild: `npm run build`

## Performance Optimization

- Vite provides automatic code splitting for better performance
- Images and assets are optimized during the build process
- Consider using lazy loading for components when the application grows

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the AI Journal System. See the root repository for license information.
