# React Component Library

A comprehensive React component library built with TypeScript, featuring smart Input components, Toast notifications, and animated Sidebar Menu components. This project demonstrates modern React development practices with Storybook integration for component documentation and testing.

## 🚀 Features

### 📝 Smart Input Component
- **Multiple input types**: text, password, email, number
- **Password visibility toggle**: Eye icon to show/hide password
- **Clearable functionality**: X button to clear input when enabled
- **Size variants**: small, medium, large
- **Form validation**: Error states and required field indicators
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 🔔 Toast Notification Component  
- **Multiple variants**: success, error, warning, info
- **Auto-dismiss**: Configurable duration with auto-hide
- **Manual close**: Optional close button for user control
- **Smooth animations**: Slide-in/fade-out transitions
- **Positioning**: Bottom-right, top-right, bottom-left, top-left
- **Toast management**: Context-based toast provider system

### 📚 Animated Sidebar Menu Component
- **Slide animations**: Smooth slide-in from right with overlay
- **Nested submenus**: Accordion-style expandable menu items
- **Background click to close**: Configurable outside click behavior  
- **Custom icons**: Support for Lucide React icons
- **Flexible configuration**: Optional overlay, close button, custom titles
- **Responsive design**: Mobile-friendly with proper touch interactions

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Storybook 8** for component documentation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **ESLint + Prettier** for code quality

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-component-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5000`

4. **Run Storybook**
   ```bash
   npm run storybook
   ```
   Storybook will be available at `http://localhost:6006`

## 📖 Component Documentation

### Input Component

```tsx
import { Input } from '@/components/library';

// Basic usage
<Input 
  type="text" 
  placeholder="Enter text..." 
  label="Username"
/>

// Password with toggle
<Input 
  type="password" 
  placeholder="Enter password..." 
  label="Password"
/>

// Clearable input
<Input 
  type="text" 
  clearable 
  placeholder="Type something..." 
  label="Search"
  defaultValue="Clear me"
/>

