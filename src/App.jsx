import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ✅ keep
import './App.css';

// Lazy-loaded core pages
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogPost = lazy(() => import('./pages/blog/Post'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Estimates = lazy(() => import('./pages/Estimates'));

// Lazy-loaded service subpages
const Driveways = lazy(() => import('./pages/services/Driveways'));
// ❌ removed: ./pages/services/Patios (file does not exist)
const PatiosAndPorches = lazy(() => import('./pages/services/PatiosAndPorches'));
const Sidewalks = lazy(() => import('./pages/services/Sidewalks'));
const SidewalksAndWalkways = lazy(() => import('./pages/services/SidewalksAndWalkways'));
const GarageFloors = lazy(() => import('./pages/services/GarageFloors'));
const Foundations = lazy(() => import('./pages/services/Foundations'));
const RetainingWalls = lazy(() => import('./pages/services/RetainingWalls'));
const ConcreteRepair = lazy(() => import('./pages/services/ConcreteRepair'));
const ProtectiveCoatings = lazy(() => import('./pages/services/ProtectiveCoatings'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <Helmet>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-V81D4JK8E6"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V81D4JK8E6');
            `}
          </script>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
              <Routes>
                {/* Core Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/estimates" element={<Estimates />} />

                {/* Service Subpages */}
                <Route path="/services/driveways" element={<Driveways />} />
                {/* 🔁 Redirect legacy /services/patios → /services/patios-and-porches */}
                <Route
                  path="/services/patios"
                  element={<Navigate to="/services/patios-and-porches" replace />}
                />
                <Route path="/services/patios-and-porches" element={<PatiosAndPorches />} />
                <Route path="/services/sidewalks" element={<Sidewalks />} />
                <Route path="/services/sidewalks-and-walkways" element={<SidewalksAndWalkways />} />
                <Route path="/services/garagefloors" element={<GarageFloors />} />
                <Route path="/services/foundations" element={<Foundations />} />
                <Route path="/services/retainingwalls" element={<RetainingWalls />} />
                <Route path="/services/concrete-repair" element={<ConcreteRepair />} />
                <Route path="/services/protective-coatings" element={<ProtectiveCoatings />} />

                {/* 404 Fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
