import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const catalogItems = [
  { id: 'home', label: 'Homepage (Current)' },
  { id: 'panaderia', label: 'Panadería (Refined Pan Catalogs)' },
  { id: 'pasteleria', label: 'Pastelería (Refined Cake Catalogs)' },
  { id: 'reposteria', label: 'Repostería (Refined Pastry Catalogs)' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="bg-white border-b border-cream-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <div className="flex flex-col items-center leading-none">
              <span className="font-serif text-2xl md:text-3xl font-bold text-xela-brown tracking-tight group-hover:text-xela-gold transition-colors">
                <span className="bold text-blue-500">X</span>-Tech
              </span>
              <span className="text-[9px] text-xela-brown/60 tracking-[0.3em] uppercase font-medium">
                Panadería Artesanal
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNav('home')}
              className={`text-sm font-medium transition-colors hover:text-xela-gold ${
                currentPage === 'home' ? 'text-xela-gold' : 'text-xela-brown'
              }`}
            >
              Inicio
            </button>

            {/* Catalog dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                className="flex items-center gap-1 text-sm font-medium text-xela-brown hover:text-xela-gold transition-colors"
              >
                Catálogo
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-cream-200 overflow-hidden z-50 animate-fade-in">
                  {catalogItems.map((item) => (
                    <button
                      key={item.id}
                      onMouseDown={() => handleNav(item.id)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3 ${
                        currentPage === item.id
                          ? 'bg-xela-warm text-xela-brown font-semibold'
                          : 'text-gray-700 hover:bg-cream-100'
                      }`}
                    >
                      {currentPage === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-xela-gold flex-shrink-0" />
                      )}
                      {currentPage !== item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent flex-shrink-0" />
                      )}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mascot character */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-xela-warm border-2 border-blue-500 flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/image.png"
                  alt="Mascota X-Tech"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-xela-brown"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 px-4 py-4 space-y-1 animate-fade-in">
          <button
            onClick={() => handleNav('home')}
            className="block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-xela-brown hover:bg-cream-100"
          >
            Inicio
          </button>
          <div className="py-1 px-3 text-xs font-semibold text-xela-gold uppercase tracking-widest">
            Catálogo
          </div>
          {catalogItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left py-2.5 px-5 rounded-lg text-sm transition-colors ${
                currentPage === item.id
                  ? 'bg-xela-warm text-xela-brown font-semibold'
                  : 'text-gray-600 hover:bg-cream-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('home')}
            className="block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-xela-brown hover:bg-cream-100"
          >
            Contacto
          </button>
        </div>
      )}
    </header>
  );
}
