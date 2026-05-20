import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PanaderiaPage from './pages/PanaderiaPage';
import PasteleriaPage from './pages/PasteleriaPage';
import ReposteriaPage from './pages/ReposteriaPage';

type Page = 'home' | 'panaderia' | 'pasteleria' | 'reposteria';

// 1. Limpieza absoluta del Hash eliminando barras diagonales no deseadas
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

  // 2. Escuchar los cambios de la URL de forma limpia
  useEffect(() => {
    const handleHashChange = () => {
      const targetPage = getPageFromHash();
      
      // Iniciamos la animación de transición de salida
      setTransitioning(true);
      
      setTimeout(() => {
        setCurrentPage(targetPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTransitioning(false);
      }, 180);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // <-- ¡Importante! El array vacío aquí evita que se reinicie el listener constantemente.

  // 3. Cuando un botón del Header o de la App quiere navegar, solo cambia la URL
  const triggerNav = (page: Page) => {
    // Si la página elegida es home, limpiamos el hash. Si no, le ponemos su nombre.
    window.location.hash = page === 'home' ? '' : page;
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