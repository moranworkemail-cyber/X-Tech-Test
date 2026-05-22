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
            className="flex items-center gap-2"
          >
            <div className="flex flex-col items-center leading-none">
              {/* Main Heading - Words glow independently on hover */}
              <span className="font-serif text-2xl md:text-3xl font-bold text-black tracking-tight">
                <span className="font-bold text-blue-500 transition-all duration-200 hover:text-pink-400 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">PRESENCIA </span>
                <span className="font-bold text-blue-600 transition-all duration-200 hover:text-pink-500 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">DIGITAL </span>
                <span className="font-bold text-blue-500 transition-all duration-200 hover:text-pink-600 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">PARA </span>
                <span className="font-bold text-blue-500 transition-all duration-200 hover:text-pink-700 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">SU </span>
                <span className="font-bold text-blue-600 transition-all duration-200 hover:text-pink-600 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">NEGOCIO </span>
                <span className="font-bold text-blue-500 transition-all duration-200 hover:text-pink-500 hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">X</span>
                <span className="transition-all duration-200 hover:text-xela-gold hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">-Tech</span>
              </span>
              
              {/* Subtitle - Glows independently when hovered directly */}
              <span className="text-[9px] text-xela-brown/60 tracking-[0.3em] uppercase font-medium transition-all duration-200 hover:text-xela-brown hover:drop-shadow-[0_0_8px_rgba(78,52,46,0.6)] mt-1">
                Alimentos Artesanales
              </span>
            </div>
          </button>

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
        </div>
      </div>
    </header>
  );
}
