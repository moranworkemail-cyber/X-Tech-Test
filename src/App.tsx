import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  // We force currentPage to always be 'home' so the Header doesn't crash 
  // if it expects this prop for navigation styling.
  const currentPage = 'home';

  // Dummy navigation handler to prevent breaking the Header component 
  // if it calls onNavigate when users click menu links.
  const handleNoOpNavigate = () => {
    console.log('Navigation is disabled for this single-page test deployment.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header currentPage={currentPage} onNavigate={handleNoOpNavigate} />

      <main className="flex-1">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}