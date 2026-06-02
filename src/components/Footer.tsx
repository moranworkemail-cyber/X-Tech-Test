import { Phone, MapPin, CreditCard} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-3 w-full">
      {/* SECTION 1: Social Row & Map Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          
          {/* Left Side: Social Icons AND the New Map Button */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100010592556025"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-blue-500 hover:text-white text-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.facebook.com/profile.php?id=100010592556025"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-black hover:text-white text-slate-800 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,242,234,0.6)]"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.14 2.29 1.88 3.73 2.15v3.83c-1.63-.04-3.23-.53-4.59-1.46-.07-.05-.12-.07-.21-.01v5.77c0 2.45-1.11 4.79-3.03 6.13-1.85 1.34-4.29 1.69-6.46.96-2.28-.73-4.13-2.58-4.75-4.86-.71-2.46-.09-5.18 1.62-7.11 1.68-1.92 4.21-2.88 6.74-2.52v3.91c-1.39-.24-2.83.18-3.87 1.15-.97.89-1.42 2.23-1.19 3.52.22 1.36 1.19 2.5 2.5 2.92 1.25.43 2.66.11 3.59-.79.66-.6 1.03-1.45 1.02-2.34V0l-.06.02z" />
              </svg>
            </a>
            
            {/* WhatsApp */}
            <a
              // 1. Added the encoded text parameter directly to your phone number link
              href="https://wa.me/50247338991?text=Hola%20X·-Tech%2C%20%C2%BFc%C3%B3mo%20me%20pueden%20ayudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-green-400 hover:text-white text-green-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+50245388057"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-green-600 hover:text-white text-green-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Teléfono"
            >
              <Phone size={18} />
            </a>

            {/* 📍 NEW: Google Maps Square Button */}
            {/* Replace the URL inside href with your exact Google Maps business link */}
            <a
              href="https://maps.google.com/?q=Quetzaltenango,Guatemala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-cream-100 hover:bg-green-400 hover:text-white text-red-500 flex items-center justify-center transition-all duration-200 hover:scale-110 border border-cream-200/50 shadow-sm"
              aria-label="Ver ubicación en Google Maps"
            >
              <MapPin size={19} className="animate-pulse" />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2: Full-Width Divider Line */}
      <div className="w-full border-t border-cream-200 mt-3" />

      {/* SECTION 3: Copyright Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
          <p className="text-xs text-gray-500">
            Project-2026 X·-Tech. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Alimentos Artesanales</span>
            <span className="text-gray-400">•</span>
            <span>Xela.</span>
          </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Dirección:</span>
            <span className="text-gray-400"></span>
            <span>Zona 9,Quetzaltenango.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}