const bannerItems = [
  {
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Pan de Yema',
    sub: 'a jueves a Jueves',
  },
  {
    img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Cumpleaños',
    sub: 'Celebra tu día especial',
  },
  {
    img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Café Recién Hecho',
    sub: 'Aroma y sabor auténtico',
  },
  {
    img: 'https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Pasteles de Boda',
    sub: 'Tu momento perfecto',
  },
  {
    img: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Croissants',
    sub: 'Recién horneados',
  },
  {
    img: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Pan Artesanal',
    sub: 'Tradición en cada bocado',
  },
  {
    img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Brownies',
    sub: 'Irresistiblemente suaves',
  },
  {
    img: 'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=320&h=200&fit=crop',
    label: 'Chocolate Caliente',
    sub: 'Calidez en cada taza',
  },
];

// Duplicate for seamless loop
const doubled = [...bannerItems, ...bannerItems];


export default function ScrollingBanner() {
  return (
    <section className="bg-xela-brown overflow-hidden py-0 relative">
      <div className="flex marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-56 md:w-64 mx-1 relative group cursor-pointer"
          >
            <div className="overflow-hidden rounded-none">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-36 md:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-3">
                <p className="text-white font-serif font-semibold text-sm leading-tight drop-shadow">
                  {item.label}
                </p>
                <p className="text-cream-200 text-[11px] leading-tight mt-0.5 drop-shadow">
                  {item.sub}
                </p>
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="text-[9px] text-xela-light tracking-widest uppercase font-semibold">
                    X-Tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
