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
    img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Pastel de Cumpleaños',
    desc: 'Personalizado con tu diseño favorito. Rellenos de crema, fresa, chocolate o vainilla.',
    price: 'Desde Q 00',
    tag: 'Personalizado',
  },
  {
    img: 'https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Pastel de Boda',
    desc: 'Elegancia y sabor para el día más especial. Consulta nuestros diseños exclusivos.',
    price: 'Desde Q 00',
    tag: 'Exclusivo',
  },
  {
    img: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Cheesecake de Frutos Rojos',
    desc: 'Base de galleta, relleno cremoso y topping de frutos rojos frescos.',
    price: 'Q 00',
    tag: 'Favorito',
  },
  {
    img: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Tarta de Manzana',
    desc: 'Manzanas caramelizadas sobre hojaldre crujiente, glaseado con mermelada de albaricoque.',
    price: 'Q 00',
    tag: 'Clásica',
  },
  {
    img: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Cupcakes de Vainilla',
    desc: 'Esponjosos y decorados a mano. Ideales para eventos, bodas y reuniones.',
    price: 'Q 00 c/u',
    tag: 'Eventos',
  },
  {
    img: 'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Pastel de Tres Leches',
    desc: 'Receta tradicional guatemalteca, empapado en tres tipos de leche y crema chantilly.',
    price: 'Q 00',
    tag: 'Tradicional',
  },
];

export default function PasteleriaPage() {
  const [modal, setModal] = useState<ModalData | null>(null);

  return (
    <>
      <div className="bg-xela-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-xela-gold text-xs tracking-[0.3em] uppercase font-semibold mb-2">
            Catálogo
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream-100">
            Pastelería
          </h1>
          <p className="text-cream-200/70 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Pasteles y tortas diseñados con dedicación para cada celebración especial.
            Personalizamos tu pedido con gusto.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-serif text-2xl text-xela-brown font-semibold">
            Nuestros Pasteles
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
                  <span className="bg-xela-gold text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
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
