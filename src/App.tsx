import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/shared/ScrollToTop';
import HomePage from './pages/HomePage';

// Solutions — audience
import DentistsPage from './pages/solutions/DentistsPage';
import DSOsPage from './pages/solutions/DSOsPage';
import InsurersPage from './pages/solutions/InsurersPage';
import EducatorsPage from './pages/solutions/EducatorsPage';

// Solutions — products
import VisionAIPage from './pages/products/VisionAIPage';
import ImagingPage from './pages/products/ImagingPage';
import VoicePage from './pages/products/VoicePage';
import RCMPage from './pages/products/RCMPage';
import InsVerificationPage from './pages/products/InsVerificationPage';
import PreTreatmentPage from './pages/products/PreTreatmentPage';

// Other pages
import PricingPage from './pages/PricingPage';
import CustomersPage from './pages/CustomersPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogPage from './pages/BlogPage';
import GlossaryPage from './pages/GlossaryPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookDemoPage from './pages/BookDemoPage';
import TryPage from './pages/TryPage';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <span className="text-7xl font-black text-neige-dark mb-4">404</span>
      <h1 className="text-2xl font-bold text-black mb-2">Page not found</h1>
      <p className="text-body mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn-primary">Go home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          {/* Audience solution pages */}
          <Route path="/solutions/dentists" element={<DentistsPage />} />
          <Route path="/solutions/dsos" element={<DSOsPage />} />
          <Route path="/solutions/insurers" element={<InsurersPage />} />
          <Route path="/solutions/educators" element={<EducatorsPage />} />

          {/* Product pages */}
          <Route path="/solutions/vision-ai" element={<VisionAIPage />} />
          <Route path="/solutions/imaging" element={<ImagingPage />} />
          <Route path="/solutions/voice" element={<VoicePage />} />
          <Route path="/solutions/rcm" element={<RCMPage />} />
          <Route path="/solutions/insurance-verification" element={<InsVerificationPage />} />
          <Route path="/solutions/pre-treatment-estimates" element={<PreTreatmentPage />} />

          {/* Other pages */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-demo" element={<BookDemoPage />} />
          <Route path="/try" element={<TryPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
