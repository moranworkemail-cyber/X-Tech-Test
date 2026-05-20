import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import ScrollingBanner from '../components/ScrollingBanner';
import Modal from '../components/Modal';

interface ModalData {
  image: string;
  title: string;
  description?: string;
}

const featuredProducts = [
  {
    img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Chocolate Caliente',
    desc: 'Receta artesanal con cacao 100% guatemalteco. Una taza llena de historia y sabor.',
  },
  {
    img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Brownies',
    desc: 'Suaves por dentro, con costra crujiente. Hechos con amor en nuestra cocina.',
  },
  {
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Pan de Yema',
    desc: 'Tradicional y esponjoso, elaborado con yemas frescas cada mañana.',
  },
  {
    img: 'https://images.pexels.com/photos/6941025/pexels-photo-6941025.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/6941025/pexels-photo-6941025.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Mantelito X-Tech',
    desc: 'Mantelito de tela GRATIS con cada pedido especial. ¡Presentación perfecta!',
  },
];

const rightBlocks = [
  {
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '¿Y tú... ya las probaste?',
    sub: 'Hamburguesas artesanales sobre pan X-Tech',
    badge: 'NUEVO',
    dark: true,
  },
  {
    img: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Disfruta el sabor en casa Q0.00',
    sub: 'Pan empacado para llevar, siempre fresco',
    badge: 'OFERTA',
    dark: false,
  },
];

export default function HomePage() {
  const [modal, setModal] = useState<ModalData | null>(null);

  const openModal = (data: ModalData) => setModal(data);
  const closeModal = () => setModal(null);

  return (
    <>
      <ScrollingBanner />

      {/* Hero split section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

          {/* LEFT: Large feature block */}
          <div className="paper-texture rounded-2xl overflow-hidden relative shadow-md border border-cream-200">
            {/* Wheat illustration top */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-xela-brown">
                <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(-20 50 20)" />
                <ellipse cx="50" cy="20" rx="8" ry="18" transform="rotate(20 50 20)" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
                <ellipse cx="38" cy="40" rx="7" ry="15" transform="rotate(-30 38 40)" />
                <ellipse cx="62" cy="40" rx="7" ry="15" transform="rotate(30 62 40)" />
              </svg>
            </div>

            {/* X-TECH branding inside */}
            <div className="px-6 pt-6 pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xela-brown/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Panadería Artesanal
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-xela-brown leading-tight mt-0.5">
                    <span className="bold text-blue-700">X</span>-Tech
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <p className="text-xela-brown font-semibold text-sm tracking-wide">
                  ¡Haz tu pedido!
                </p>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 fill-xela-gold flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="font-serif text-3xl font-bold text-xela-brown">4287-8490</span>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 bg-xela-gold/10 border border-xela-gold/30 rounded-full px-4 py-1.5">
                <span className="text-xela-brown text-sm font-medium">X</span>
                <span className="font-serif font-bold text-xela-brown text-lg leading-none">Tech</span>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 gap-2 p-4 mt-2">
              {featuredProducts.map((p, i) => (
                <div
                  key={i}
                  className="card-zoom rounded-xl overflow-hidden shadow-sm border border-cream-200 bg-white"
                  onClick={() => openModal({ image: p.img, title: p.title, description: p.desc })}
                >
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="w-full h-28 object-cover"
                  />
                  <div className="zoom-badge">
                    <ZoomIn size={11} />
                    <span>Zoom</span>
                  </div>
                  <div className="px-2.5 py-2">
                    <p className="text-xela-brown text-xs font-semibold truncate">{p.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom branding strip */}
            <div className="px-4 pb-4">
              <p className="text-xela-brown/40 text-[10px] text-right tracking-widest font-medium uppercase">
                R.R.R. X-Tech
              </p>
            </div>
          </div>

          {/* RIGHT: Two stacked blocks */}
          <div className="flex flex-col gap-4">
            {rightBlocks.map((block, i) => (
              <div
                key={i}
                className={`card-zoom rounded-2xl overflow-hidden shadow-md flex-1 relative cursor-pointer min-h-[200px] ${
                  block.dark ? 'bg-xela-dark' : 'bg-xela-warm'
                }`}
                onClick={() =>
                  openModal({
                    image: block.img,
                    title: block.title,
                    description: block.sub,
                  })
                }
              >
                <img
                  src={block.thumb}
                  alt={block.title}
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 ${
                    block.dark
                      ? 'bg-gradient-to-r from-xela-dark/90 via-xela-dark/50 to-transparent'
                      : 'bg-gradient-to-r from-xela-warm/95 via-xela-warm/60 to-transparent'
                  }`}
                />

                {/* Text content */}
                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <div>
                    {block.badge && (
                      <span className="inline-block bg-xela-gold text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 tracking-wider">
                        {block.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span
                        className={`text-[9px] font-semibold tracking-[0.2em] uppercase ${
                          block.dark ? 'text-xela-light/70' : 'text-xela-brown/60'
                        }`}
                      >
                        X-Tech
                      </span>
                    </div>
                    <h3
                      className={`font-serif font-bold text-lg leading-tight ${
                        block.dark ? 'text-cream-100' : 'text-xela-brown'
                      }`}
                    >
                      {block.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        block.dark ? 'text-cream-200/70' : 'text-xela-brown/70'
                      }`}
                    >
                      {block.sub}
                    </p>
                  </div>
                </div>

                {/* Zoom badge */}
                <div className="zoom-badge">
                  <ZoomIn size={11} />
                  <span>Zoom</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-xela-brown text-cream-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-green-400" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-cream-200/80">X-Text-MR, Xela</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-green-400" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-semibold">WhatsApp: 4287-8490</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-green-400" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span className="text-cream-200/80">Todo los dias · 8am – 6pm</span>
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <Modal
          image={modal.image}
          title={modal.title}
          description={modal.description}
          onClose={closeModal}
        />
      )}
    </>
  );
}
