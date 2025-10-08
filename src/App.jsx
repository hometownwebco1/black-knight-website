import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Core pages
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogPost = lazy(() => import('./pages/blog/Post'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Estimates = lazy(() => import('./pages/Estimates'));

// Service subpages (only the ones that actually exist)
const Driveways = lazy(() => import('./pages/services/Driveways'));
const SidewalksAndWalkways = lazy(() => import('./pages/services/SidewalksAndWalkways'));
const Foundations = lazy(() => import('./pages/services/Foundations'));
const ConcreteRepair = lazy(() => import('./pages/services/ConcreteRepair'));
const ProtectiveCoatings = lazy(() => import('./pages/services/ProtectiveCoatings'));
const PatiosAndPorches = lazy(() => import('./pages/services/PatiosAndPorches'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-V81D4JK8E6"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V81D4JK8E6');
            `}
          </script>
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
              <Routes>
                {/* Core */}
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/estimates" element={<Estimates />} />

                {/* Services */}
                <Route path="/services/driveways" element={<Driveways />} />

                {/* Legacy redirects */}
                <Route path="/services/sidewalks" element={<Navigate to="/services/sidewalks-and-walkways" replace />} />
                <Route path="/services/patios" element={<Navigate to="/services/patios-and-porches" replace />} />
                <Route path="/services/retainingwalls" element={<Navigate to="/services" replace />} />
                <Route path="/services/garagefloors" element={<Navigate to="/services" replace />} />

                {/* Existing pages */}
                <Route path="/services/sidewalks-and-walkways" element={<SidewalksAndWalkways />} />
                <Route path="/services/foundations" element={<Foundations />} />
                <Route path="/services/concrete-repair" element={<ConcreteRepair />} />
                <Route path="/services/protective-coatings" element={<ProtectiveCoatings />} />
                <Route path="/services/patios-and-porches" element={<PatiosAndPorches />} />

                {/* 404 */}
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
