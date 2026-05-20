import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PanaderiaPage from './pages/PanaderiaPage';
import PasteleriaPage from './pages/PasteleriaPage';
import ReposteriaPage from './pages/ReposteriaPage';

type Page = 'home' | 'panaderia' | 'pasteleria' | 'reposteria';

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '').replace('/', '');
  if (['panaderia', 'pasteleria', 'reposteria'].includes(hash)) {
    return hash as Page;
  }
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      if (page !== currentPage) {
        triggerNav(page);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  });

  const triggerNav = (page: Page) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTransitioning(false);
    }, 180);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'panaderia': return <PanaderiaPage />;
      case 'pasteleria': return <PasteleriaPage />;
      case 'reposteria': return <ReposteriaPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header currentPage={currentPage} onNavigate={triggerNav} />

      <main
        className={`flex-1 transition-opacity duration-180 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}
