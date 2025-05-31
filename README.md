# LocalQR Landing Page

A beautiful, responsive landing page for LocalQR - a platform for travelers, locals, and businesses to share curated recommendations through a personalized QR code and short link.

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Backend**: Express.js with TypeScript (minimal API for health checks)
- **UI Components**: Radix UI primitives with shadcn/ui

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── CreateCustomize.tsx
│   │   │   ├── ShareAnywhere.tsx
│   │   │   ├── Analytics.tsx
│   │   │   ├── ReferEarn.tsx
│   │   │   ├── WhoIsFor.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SVGOverlays.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   │   ├── useLanguage.tsx
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/           # Utility functions
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   └── not-found.tsx
│   │   ├── types/         # TypeScript type definitions
│   │   │   └── index.ts
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # App entry point
│   │   └── index.css      # Global styles and custom CSS variables
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database storage interface
│   └── vite.ts           # Vite development server setup
├── shared/               # Shared code between client and server
│   └── schema.ts         # Database schema definitions
├── components.json       # shadcn/ui configuration
├── drizzle.config.ts     # Drizzle ORM configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Design Features

- **Multi-language Support**: English, Spanish, and French translations
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark/Light Sections**: Modular color-coded sections following brand guidelines
- **Smooth Animations**: Framer Motion powered scroll animations and hover effects
- **Custom Color Palette**: Brand-specific colors including Evergreen, Clay Brown, Deep Blue, Maroon Red
- **SVG Overlays**: Decorative background patterns for visual character
- **Accessibility**: WCAG AA+ compliant with proper focus states and contrast ratios

## 📦 Dependencies

### Core Dependencies
- `react` & `react-dom`: React 18 framework
- `typescript`: Type safety and better development experience
- `vite`: Fast build tool and development server
- `express`: Backend web framework
- `framer-motion`: Animation library
- `wouter`: Lightweight React router
- `@tanstack/react-query`: Server state management
- `tailwindcss`: Utility-first CSS framework
- `drizzle-orm`: Type-safe SQL toolkit
- `@neondatabase/serverless`: PostgreSQL database driver

### UI Components
- `@radix-ui/*`: Accessible UI primitives
- `lucide-react`: Icon library
- `class-variance-authority`: Utility for conditional classes
- `tailwind-merge`: Merge Tailwind classes
- `cmdk`: Command palette component

### Development Dependencies
- `@vitejs/plugin-react`: Vite React plugin
- `@types/*`: TypeScript type definitions
- `autoprefixer`: PostCSS plugin
- `drizzle-kit`: Database migration toolkit
- `tsx`: TypeScript execution engine

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed on your machine
- npm or yarn package manager
- PostgreSQL database (optional - uses in-memory storage by default)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd localqr-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional)**
   Create a `.env` file in the root directory if you want to use a PostgreSQL database:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/localqr
   PGPORT=5432
   PGUSER=your_username
   PGPASSWORD=your_password
   PGDATABASE=localqr
   PGHOST=localhost
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000` to view the application

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
This command starts both the Express backend server and Vite frontend development server concurrently on port 5000.

### Production Build
```bash
npm run build
npm start
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run type-check` - Run TypeScript type checking

## 🌐 Features

### 1. Hero Section (Evergreen Background)
- Compelling headline and subtext
- Interactive QR claim input with real-time validation
- Animated QR code mockup
- Smooth scroll animations

### 2. Create & Customize Section (Off-white)
- Step-by-step feature breakdown with checkmark bullets
- Interactive dashboard mockup
- Grid overlay background pattern

### 3. Share Anywhere Section (Clay Brown)
- Multiple sharing use cases with emoji bullets
- Social media and physical touchpoint examples
- Mockup examples of QR implementation

### 4. Analytics Section (Deep Blue)
- Data tracking capabilities with chart icons
- Interactive analytics dashboard mockup
- Animated chart visualization

### 5. Refer & Earn Section (Maroon Red)
- Passive income opportunity highlighting
- Reward system explanation with coin/badge icons
- Coming soon feature callout

### 6. Who Is For Section (Mint Grey)
- 10 use case cards with icons and descriptions
- Hover animations and responsive grid layout
- Target audience breakdown

### 7. Testimonials Section (Charcoal)
- Horizontal scrolling testimonial carousel
- Real user quotes with avatars and ratings
- Smooth scroll navigation controls

### 8. FAQ Section (Light Grey)
- Expandable accordion with smooth animations
- Comprehensive question coverage
- Keyboard accessible navigation

### 9. Final CTA Section (CTA Blue)
- Prominent call-to-action with QR visual
- World map overlay background
- Form interaction with loading states

### 10. Footer (Charcoal Dark)
- Complete site navigation links
- Social media integration
- Legal page links and contact information

## 🌍 Multi-language Support

The application supports three languages with full translation coverage:
- **English** (default)
- **Spanish** (es)
- **French** (fr)

Language switching is available via the header dropdown and persists in localStorage.

## 🎨 Customization

### Colors
Custom color variables are defined in `client/src/index.css`:
- `--evergreen`: #1B3B1A (Hero section)
- `--clay-brown`: #4B2E1D (Share section)
- `--deep-blue`: #1A2B49 (Analytics section)
- `--maroon-red`: #471919 (Refer section)
- `--cta-blue`: #0066FF (CTA buttons)

### Typography
The application uses Inter font family loaded from Google Fonts with weights 400, 500, 600, and 700.

### Animations
Framer Motion animations are configured for:
- Scroll-triggered fade-ins
- Hover state transitions
- Loading state animations
- Mobile menu interactions

## 🚀 Deployment

The application is designed to be deployed on platforms like Vercel, Netlify, or any Node.js hosting service. The build process creates optimized static assets for the frontend and a production-ready Express server.

For Replit deployment, the application is already configured with the necessary files and can be deployed directly using Replit's deployment features.

## 🔧 Development Notes

- The project uses a monorepo structure with shared TypeScript types
- Database operations are abstracted through storage interfaces
- The Vite development server is integrated with Express for seamless full-stack development
- All components are built with accessibility in mind using proper ARIA attributes
- The design system is extensible and follows atomic design principles

## 📝 Contributing

1. Follow the existing code style and TypeScript conventions
2. Ensure all animations are performant and accessible
3. Test responsive design across multiple breakpoints
4. Update translations when adding new content
5. Maintain the established color palette and design patterns

## 📄 License

This project is part of the LocalQR platform. Please refer to the main project license for usage terms.