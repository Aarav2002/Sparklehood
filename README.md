# AI Safety Incident Dashboard

A modern, responsive dashboard for tracking and managing AI safety incidents across your organization. Built with React, TypeScript, and Tailwind CSS.

Live Link - https://sparklehood.vercel.app/

![Dashboard Preview](https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 📊 Real-time incident tracking and management
- 🔍 Advanced filtering by severity levels
- ⏱️ Chronological sorting options
- 📝 Intuitive incident reporting form
- 🎨 Modern, responsive design
- ⚡ High-performance React components
- 🎯 TypeScript for type safety
- 🖌️ Tailwind CSS for styling

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-safety-incident-dashboard.git
cd Sparklehood-master
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # React components
├── data/             # Mock data and constants
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── App.tsx           # Root component
└── main.tsx         # Application entry point
```

## Key Components

- `Dashboard`: Main container component
- `IncidentList`: Displays the list of incidents
- `IncidentForm`: Form for submitting new incidents
- `FilterControls`: Filtering and sorting controls
- `SeverityBadge`: Visual indicator for incident severity

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
