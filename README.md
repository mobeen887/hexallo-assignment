# Hexallo Assignment - Event Discovery Platform

A modern, responsive event discovery web application built with React, TypeScript, and Vite. Features interactive card components with sophisticated hover effects, accessible design, and a clean, professional UI.

## 🚀 Features

- **Interactive Card System**: Two distinct hover effect types (with/without dates)
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **TypeScript**: Full type safety with strict mode enabled
- **Modern SCSS Architecture**: Organized with partials, mixins, and CSS variables
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance Optimized**: React.memo, lazy loading, code splitting, modern Sass API
- **Error Handling**: Production-ready error boundary for graceful failures
- **Code Quality**: Prettier formatting, no CSS anti-patterns (!important removed)

## 📁 Project Structure

```
hexallo-assignment/
├── src/
│   ├── components/        # React components
│   │   ├── Card.tsx       # Reusable card component (with React.memo)
│   │   ├── Icon.tsx       # Centralized icon component (eliminates SVG duplication)
│   │   ├── ErrorBoundary.tsx  # Error boundary for graceful failures
│   │   ├── Navbar.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section with search
│   │   └── ...
│   ├── data/
│   │   └── cards.ts       # Data source for all cards
│   ├── styles/
│   │   ├── base/          # Variables, mixins, reset
│   │   ├── components/    # Component-specific styles
│   │   ├── layout/        # Layout containers
│   │   └── sections/      # Section-specific styles
│   ├── App.tsx            # Main app component (with code splitting)
│   └── main.tsx           # Entry point
├── public/                # Static assets
├── .prettierrc            # Prettier configuration
└── vite.config.ts         # Vite configuration
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS** - Styling with modern @use syntax
- **ESNext** - Modern JavaScript features

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Key Sections

1. **Tonight's Spotlight** - Featured events for tonight
2. **Hot This Week** - Trending events
3. **Unmissable** - Must-see events
4. **For You** - Personalized recommendations
5. **Ghana's Top 10s** - Top-rated events
6. **Buzzing Destinations** - Popular locations

## 🎯 Card Hover Effects

### With Date (Stronger Effect)
- Transform: `translateY(-8px) scale(1.02)`
- Shows: Date → Time → Location with icons
- Heart icon appears on hover

### Without Date (Softer Effect)
- Transform: `translateY(-6px) scale(1.01)`
- Shows: Only location with icon
- No date indicator

## 🔧 Configuration

The project uses modern Sass API to avoid deprecation warnings:

```typescript
// vite.config.ts
css: {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler'
    }
  }
}
```

### Prettier Configuration

Consistent code formatting is enforced via `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 120,
  "trailingComma": "none"
}
```

### Performance Optimizations

- **React.memo**: Card component wrapped to prevent unnecessary re-renders
- **Lazy Loading**: Images use `loading="lazy"` attribute for native browser optimization
- **Code Splitting**: Heavy components (Exclusives, BlazingDeals, etc.) are lazy-loaded with React.lazy()
- **Error Boundary**: Graceful error handling prevents app crashes

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Laptop**: 900px - 1200px
- **Tablet**: 768px - 900px
- **Mobile**: < 768px
- **Mobile Small**: < 600px

## 🎨 Design Principles

- **Data-Driven**: All content sourced from `src/data/cards.ts`
- **Component-Based**: Reusable, presentational components
- **Accessible**: Semantic HTML, ARIA attributes, keyboard support
- **Maintainable**: Clear separation of concerns, organized file structure

## 📝 Development Notes

- Components are purely presentational (no business logic)
- Card component optimized with React.memo to prevent unnecessary re-renders
- Centralized Icon component eliminates SVG duplication across components
- Images use native lazy loading for performance
- Heavy components are code-split with React.lazy and Suspense
- Styles use BEM-like naming conventions with proper CSS specificity (no !important)
- TypeScript strict mode enabled for maximum type safety
- Modern CSS features (Grid, Flexbox, CSS Variables)
- Error boundary wraps entire app for production-ready error handling
- Prettier configured for consistent code formatting

## 📄 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

**Mubeen Hussain**  
Senior Software Engineer

Developed as an assignment for Hexallo