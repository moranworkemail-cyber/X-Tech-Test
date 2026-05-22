import { useState } from 'react';
import { ZoomIn, ShoppingBag } from 'lucide-react';
import Modal from '../components/Modal';

interface ModalData {
  image: string;
  title: string;
  description?: string;
}

const products = [
  {
    img: '',
    thumb: '',
    title: 'Brownies de Chocolate',
    desc: 'Con chispas de chocolate belga, nueces pecanas y una textura húmeda inigualable.',
    price: 'Q 00 c/u',
    tag: 'Popular',
  },
  {
    img: '',
    thumb: '',
    title: 'Chocolate Caliente',
    desc: 'Preparado con cacao puro guatemalteco. Un ritual de sabor y tradición en cada taza.',
    price: 'Q 00',
    tag: 'Bebida',
  },
  {
    img: '',
    thumb: '',
    title: 'Café Recién Hecho',
    desc: 'Granos de café guatemalteco de altura, tostado medio. Aroma y cuerpo incomparables.',
    price: 'Q 00',
    tag: 'Bebida',
  },
  {
    img: '',
    thumb: '',
    title: 'Galletas de Mantequilla',
    desc: 'Crujientes y doradas. Ideales para regalo, eventos o disfrutar con el café.',
    price: 'Q 0 c/u',
    tag: 'Clásica',
  },
  {
    img: '',
    thumb: '',
    title: 'Flan de Caramelo',
    desc: 'Textura sedosa, bañado en caramelo oscuro. Postre favorito de la casa.',
    price: 'Q 00',
    tag: 'Especial',
  },
  {
    img: '',
    thumb: '',
    title: 'Trufas de Chocolate',
    desc: 'Elaboradas a mano con ganache de chocolate negro y cobertura de cacao en polvo.',
    price: 'Q 00 c/u',
    tag: 'Gourmet',
  },
];

export default function ReposteriaPage() {
  const [modal, setModal] = useState<ModalData | null>(null);

  return (
    <>
      <div className="bg-xela-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xela-gold text-xs tracking-[0.3em] uppercase font-semibold mb-2">
            Catálogo
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream-100">
            Repostería
          </h1>
          <p className="text-cream-200/70 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Dulces artesanales, bebidas calientes y delicias para el alma. Todo elaborado
            con ingredientes naturales y mucho cariño.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-serif text-2xl text-xela-brown font-semibold">
            Nuestras Delicias
          </h2>
          <span className="text-sm text-gray-400">{products.length} productos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="card-zoom cursor-pointer"
                onClick={() =>
                  setModal({ image: p.img, title: p.title, description: p.desc })
                }
              >
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="w-full h-52 object-cover"
                />
                <div className="zoom-badge">
                  <ZoomIn size={11} />
                  <span>Zoom</span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-xela-brown/80 text-cream-100 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-serif font-semibold text-xela-brown text-base">{p.title}</h3>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif font-bold text-xela-gold text-lg">{p.price}</span>
                  <a
                    href="https://wa.me/50242878490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-xela-brown hover:bg-xela-dark text-cream-100 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                  >
                    <ShoppingBag size={12} />
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <Modal
          image={modal.image}
          title={modal.title}
          description={modal.description}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
