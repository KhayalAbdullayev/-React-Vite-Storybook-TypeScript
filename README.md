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
<img width="1626" height="721" alt="Ekran görüntüsü 2025-08-09 232830" src="https://github.com/user-attachments/assets/0ea86779-3287-41b1-9964-0bdeffcd5ac6" />
<img width="1637" height="722" alt="Ekran görüntüsü 2025-08-09 232823" src="https://github.com/user-attachments/assets/cbe26f31-02dc-4cf6-a7af-59510a96e181" />
<img width="1628" height="727" alt="Ekran görüntüsü 2025-08-09 232805" src="https://github.com/user-attachments/assets/23930997-dcb4-4260-b357-5e328f65636b" />
<img width="1260" height="445" alt="Ekran görüntüsü 2025-08-09 232928" src="https://github.com/user-attachments/assets/93c79dce-8440-4186-8565-e3b37e1e42c0" />
<img width="1174" height="456" alt="Ekran görüntüsü 2025-08-09 232921" src="https://github.com/user-attachments/assets/41f58505-b731-4fe6-b382-8f7b26d08dd2" />
<img width="398" height="715" alt="Ekran görüntüsü 2025-08-09 232839" src="https://github.com/user-attachments/assets/aa01d941-3011-48ef-9457-5b2871d20fcc" />
