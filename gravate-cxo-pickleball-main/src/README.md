# GRV8 Sports - CXO Pickleball League

A modern React application for India's first CXO Pickleball League, built with TypeScript, Tailwind CSS, and Vite.

## 📁 Project Structure

The codebase is organized using a **feature-based architecture** for better maintainability and scalability:

### 🏗️ Architecture Overview

```
src/
├── components/
│   ├── layout/              # Layout components (Navigation, Header, Footer)
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   └── shared/              # Shared/reusable components across features
├── features/
│   ├── home/               # Home page specific components and logic
│   │   └── components/     # HeroSection, EventHighlights, ParticipantsSection, etc.
│   ├── gallery/            # Gallery page specific components
│   │   └── components/     # GalleryHero, InstagramFeed, GalleryFeatures
│   ├── tournament/         # Tournament related components and logic
│   │   └── components/     # TournamentBracket, MatchCard, etc.
│   └── events/             # Events page specific components
├── pages/                  # Main page components (simplified, use feature components)
├── types/                  # TypeScript type definitions
│   ├── tournament.ts       # Tournament, Match, Player types
│   └── events.ts          # Event related types
├── data/                   # Static data and mock data
│   ├── tournament/        # Tournament data
│   └── events/           # Events data
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configurations
└── assets/                # Static assets (images, icons)
```

### 🎯 Key Benefits of This Structure

1. **Feature-Based Organization**: Related components are grouped together
2. **Better Maintainability**: Easy to locate and modify specific functionality
3. **Scalability**: New features can be added without cluttering existing code
4. **Reusability**: Shared components are separated and can be reused across features
5. **Type Safety**: Centralized type definitions prevent duplication
6. **Clear Separation**: Layout, features, and shared components are clearly separated

### 🧩 Component Hierarchy

#### Layout Components (`/components/layout/`)
- `Navigation.tsx` - Main navigation bar with mobile responsiveness

#### Shared Components (`/components/shared/`)
- `PageHero.tsx` - Reusable hero section component
- `SectionCTA.tsx` - Call-to-action section component

#### Feature Components
Each feature has its own folder with specific components:

**Home Feature** (`/features/home/components/`)
- `HeroSection.tsx` - Landing page hero
- `EventHighlights.tsx` - Event highlights grid
- `ParticipantsSection.tsx` - Confirmed participants display
- `CTASection.tsx` - Call-to-action section

**Gallery Feature** (`/features/gallery/components/`)
- `GalleryHero.tsx` - Gallery page hero
- `InstagramFeed.tsx` - Instagram integration
- `GalleryFeatures.tsx` - Gallery features showcase

**Tournament Feature** (`/features/tournament/components/`)
- `TournamentBracket.tsx` - Interactive tournament bracket

### 📊 Data Organization

**Tournament Data** (`/data/tournament/`)
- `tournamentData.ts` - Players, matches, tournament information

**Events Data** (`/data/events/`)
- `eventsData.ts` - Event listings, past events, event types

### 🏷️ Type Definitions

**Tournament Types** (`/types/tournament.ts`)
```typescript
interface Player {
  id: string;
  name: string;
  company: string;
  seed?: number;
}

interface Match {
  id: string;
  player1: Player | null;
  player2: Player | null;
  winner: Player | null;
  score?: string;
  status: 'upcoming' | 'in-progress' | 'completed';
  // ... more fields
}
```

### 🚀 Development Guidelines

#### Adding New Features
1. Create a new folder in `/features/[feature-name]/`
2. Add components in `/features/[feature-name]/components/`
3. Add types in `/types/[feature-name].ts`
4. Add data in `/data/[feature-name]/`

#### Component Creation Rules
- **Layout components**: For app-wide layout elements
- **Shared components**: For reusable UI components across features
- **Feature components**: For feature-specific functionality
- **Page components**: Should be thin wrappers that compose feature components

#### Import Patterns
```typescript
// Types
import { Player, Match } from '@/types/tournament';

// Data
import { tournamentPlayers } from '@/data/tournament/tournamentData';

// Components
import TournamentBracket from '@/features/tournament/components/TournamentBracket';
import PageHero from '@/components/shared/PageHero';
import Navigation from '@/components/layout/Navigation';
```

### 🔧 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Icons**: Lucide React

### 🎨 Design System

The application uses a centralized design system with:
- **Semantic color tokens** in `index.css`
- **Custom component variants** using class-variance-authority
- **Responsive design** with mobile-first approach
- **Dark/light mode support**
- **Custom animations and transitions**

This structure ensures the codebase remains maintainable, scalable, and easy to understand for future development.