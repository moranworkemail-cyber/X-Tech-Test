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
              href="#"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-blue-500 hover:text-white text-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-red-500 hover:text-white text-orange-400 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Messenger */}
            {/* Updated Button to trigger your free automated welcome message */}
            <a
              href="https://m.me/TuPagina?ref=ElLinkGratisDeManychat" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-blue-400 hover:text-white text-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Messenger"
            >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
                </svg>
              </a>

            {/* WhatsApp */}
            <a
              // 1. Added the encoded text parameter directly to your phone number link
              href="https://wa.me/50242848490?text=Hola%20X-Tech%2C%20%C2%BFc%C3%B3mo%20me%20pueden%20ayudar%3F"
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
            {/* Credit Card Payment */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream-100 hover:bg-blue-600 hover:text-white text-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Pagar con Tarjeta"
            >
              <CreditCard size={18} />
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
            Project-2026 X-Tech. Todos los derechos reservados.
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