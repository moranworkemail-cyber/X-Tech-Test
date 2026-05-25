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
    title: 'Chocolate Caliente artesanal',
    desc: 'Receta artesanal con cacao 100%. Una taza llena de historia y sabor artesanal.',
  },
  {
    img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Brownies artesanal',
    desc: 'Suaves por dentro, con costra crujiente. Hechos con amor en nuestra cocina artesanal.',
  },
  {
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Pan artesanal',
    desc: 'Tradicional y esponjoso, elaborado con yemas frescas.',
  },
  {
    img: 'https://images.pexels.com/photos/6941025/pexels-photo-6941025.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/6941025/pexels-photo-6941025.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Mantelito artesanal',
    desc: 'Descuentos especiales con cada pedido especial. ¡Presentación perfecta!',
  },
    {
    img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Chocolate Caliente artesanal',
    desc: 'Receta artesanal con cacao 100%. Una taza llena de historia y sabor.',
  },
  {
    img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Brownies artesanal',
    desc: 'Suaves por dentro, con costra crujiente. Hechos con amor en nuestra cocina.',
  },
];

const rightBlocks = [
  {
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '¿Y tú... ya las probaste?',
    sub: 'Hamburguesas artesanales X-Tech',
    badge: 'OFERTA',
    dark: true,
  },
  {
    img: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Disfruta el sabor en Xela Q0.00',
    sub: 'Pan empacado artesanal, siempre fresco',
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

          {}
          <div className="paper-texture rounded-2xl overflow-hidden relative shadow-md border border-cream-200">
            {}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">

              </svg>
            </div>

            {/* X-TECH branding inside */}
            <div className="px-6 pt-6 pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xela-brown/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Alimentos Artesanales
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-black leading-tight mt-0.5">
                    <span className="bold text-blue-700">X</span>-Tech
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <p className="text-xela-brown font-semibold text-sm tracking-wide">MODERNIZATE, LA PRESENCIA DIGITAL DE TU NEGOCIO ES IMPORTANTE...</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Aparecer en los motores de búsqueda de Google!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Confiancia con tus futuros clientes!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Solidez de tu negocio!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Enlace de tus redes sociales para atraer más clientes!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Dar a conocer tu negocio al mundo!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Aparecer en Google!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Hacer más ventas!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Y más ventas equivale a más clientes o dinero!</p>
                <p className="text-xela-brown font-semibold text-sm tracking-wide">🚀¡Además, todos los botones integrados para una mejor experiencia de tus clientes y tu negocio!</p>             
                <p className="text-xela-brown font-semibold text-sm tracking-wide"></p>
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
                M.R. X-Tech
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
      <section className="bg-[#e5bdb7] text-[#f3c1b6] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-left gap-6 md:gap-12 text-base">
            <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">Teléfono:</span> <span className="text-cream-50">4287-8490</span>
            </div>
              <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Horario:</span> <span className="text-cream-50">AM – PM</span>
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
