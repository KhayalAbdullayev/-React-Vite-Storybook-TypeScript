# replit.md

## Overview

This is a React component library project featuring smart Input components, Toast notifications, and animated Sidebar Menu components. The project is built with TypeScript and showcases modern React development patterns. It includes a Storybook setup for component documentation and development, along with a full-stack architecture using React with Express.js backend.

The library provides three main UI components:
- **Smart Input Component**: Multi-type input with password visibility toggle, clearable functionality, and various size variants
- **Toast Notification Component**: Context-based toast system with multiple variants, auto-dismiss, and smooth animations
- **Animated Sidebar Menu Component**: Sliding sidebar with nested accordion-style submenus and flexible configuration options

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern React features
- **Component-based architecture** with reusable UI components in `client/src/components/library/`
- **Storybook 8** for component development, documentation, and testing
- **Tailwind CSS** with custom CSS variables for theming and styling
- **Radix UI** primitives for accessible, unstyled UI components
- **Client-side routing** using Wouter for lightweight navigation

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Modular route structure** with separation of concerns in `server/routes.ts`
- **Storage abstraction layer** with in-memory storage implementation and interface for future database integration
- **Vite development server** integration for hot module replacement and fast development

### Build System & Development
- **Vite** as the primary build tool with React plugin
- **TypeScript** configuration with path aliases for clean imports (`@/`, `@shared/`)
- **ESBuild** for production server bundling
- **PostCSS** with Tailwind CSS for style processing

### Database Layer
- **Drizzle ORM** configured for PostgreSQL with schema definitions in `shared/schema.ts`
- **Database migrations** support through Drizzle Kit
- **Type-safe database operations** with Zod schema validation

### Component System Design
- **Radix UI** foundation for accessibility and unstyled components
- **Class Variance Authority (CVA)** for consistent component variants
- **Compound component patterns** for flexible API design
- **Context-based state management** for complex components like Toast system

### Development Workflow
- **Hot module replacement** in development mode
- **Path aliasing** for clean imports across the application
- **Shared types** between client and server in `shared/` directory
- **Runtime error overlay** for better development experience

## External Dependencies

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating component variants

### Development Tools
- **Storybook**: Component development environment and documentation
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing and optimization

### Backend & Database
- **Express.js**: Web framework for Node.js
- **Drizzle ORM**: Type-safe ORM for database operations
- **Neon Database**: Serverless PostgreSQL database (via @neondatabase/serverless)
- **Zod**: Schema validation library

### State Management & Data Fetching
- **TanStack Query**: Data fetching and caching library
- **React Hook Form**: Forms with easy validation
- **Context API**: Built-in React state management for component-level state

### Routing & Navigation
- **Wouter**: Lightweight client-side routing library

### Utilities
- **clsx & tailwind-merge**: Conditional className utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation