# Black Knight Solutions Website

A professional brochure-style website for Black Knight Solutions concrete company in Concord, NC.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React, Vite, Tailwind CSS, and react-router-dom
- **Professional Pages**:
  - Homepage with company overview and hero section
  - Gallery showcasing completed concrete work
  - Services page detailing all offered services
  - Contact form with company information
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized build with Vite for quick loading times

## Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Routing**: React Router DOM 7.6.1
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui components

## Project Structure

```
black-knight-website/
├── public/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   │   ├── ui/         # UI components from shadcn/ui
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main App component with routing
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:5173`

## Building for Production

1. **Build the Project**:
   ```bash
   npm run build
   # or
   pnpm build
   ```

2. **Preview Production Build**:
   ```bash
   npm run preview
   # or
   pnpm preview
   ```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard

1. Connect your GitHub repository to Vercel
2. Import the project in Vercel dashboard
3. Vercel will automatically detect it's a Vite project
4. Deploy with default settings

### Deployment Configuration

The project is pre-configured for Vercel deployment:
- ✅ All required config files are present
- ✅ Build process tested and working
- ✅ No broken dependencies
- ✅ Proper routing configuration for SPA
- ✅ Optimized assets and images

## Environment Requirements

- **Node.js**: 18.0.0 or higher
- **Package Manager**: npm or pnpm
- **Build Target**: ES2020+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Asset Optimization**: Images and assets are optimized for web
- **CSS Optimization**: Tailwind CSS purging removes unused styles
- **Fast Refresh**: Hot module replacement during development

## Contact Form

The contact form is fully functional with:
- Form validation
- Service selection dropdown
- Required field indicators
- Professional styling
- Responsive design

Note: Form submission currently shows an alert. For production, integrate with a backend service or form handling service like Netlify Forms, Formspree, or similar.

## Customization

### Colors and Branding
The website uses a professional black and white color scheme matching the Black Knight Solutions logo. Colors can be customized in:
- `tailwind.config.js` for theme colors
- `src/App.css` for CSS custom properties

### Content Updates
- Company information: Update in `src/pages/Home.jsx`
- Services: Modify `src/pages/Services.jsx`
- Contact details: Update `src/pages/Contact.jsx`
- Gallery images: Replace images in `src/assets/` and update imports

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

## License

This project is created for Black Knight Solutions concrete company.

