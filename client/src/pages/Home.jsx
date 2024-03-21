import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Componente para mostrar estrellas de calificación
const EstrellasCalificacion = ({ calificacion }) => {
  const estrellasLlenas = Array(Math.floor(calificacion)).fill('★');
  const estrellasMedias = calificacion % 1 ? ['☆'] : [];
  const estrellasVacias = Array(5 - estrellasLlenas.length - estrellasMedias.length).fill('☆');

  return (
    <div> 
      {estrellasLlenas.concat(estrellasMedias).concat(estrellasVacias)}
    </div>
  );
};

const Home = () => {

  const containerVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const comentarios = [
    { id: 1, texto: '¡Una experiencia increíble!', autor: 'Juan Pérez', calificacion: 4 },
    { id: 2, texto: 'El mejor hotel en el que he estado.', autor: 'Ana Gómez', calificacion: 5 },
    { id: 3, texto: 'Economico y acogedor.', autor: 'Maria Torres', calificacion: 3 },
  ];

  return (
  
    <motion.div variants={containerVariants} initial="hidden" animate="visible" >
   
      <div className="container mx-auto px-4 py-8">
    
        <motion.h2 className="text-4xl font-bold mb-12" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
     
          Bienvenidos a Hotel La Montaña
        </motion.h2>
        <motion.p className="text-lg mb-12" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}>
          Experimenta el lujo y la comodidad en nuestro hotel. Ofrecemos servicios e instalaciones de primera para hacer tu estancia inolvidable.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Sección de servicios */}
          <motion.div className="bg-white/10 backdrop-blur-sm shadow-lg p-6 rounded-lg" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <h3 className="text-xl font-semibold">Nuestros Servicios</h3>
            <p>Disfruta de nuestros tratamientos de spa, la alta cocina y nuestro centro de fitness.</p>
          </motion.div>
          {/* Sección de promociones */}
          <motion.div className="bg-white/10 backdrop-blur-sm shadow-lg p-6 rounded-lg" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
            <h3 className="text-xl font-semibold">Promociones Especiales</h3>
            <p>Aprovecha nuestras promociones exclusivas y descuentos para una estancia memorable.</p>
          </motion.div>
        </div>
        {/* Sección de imágenes */}
        <div className="flex flex-wrap -m-4 mb-12">
          <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
             
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://st2.depositphotos.com/1000975/7817/i/450/depositphotos_78170466-stock-photo-hotel-room-with-modern-interior.jpg" alt="imagen del hotel" />
              <div className="p-6">
                <h2 className="text-base font-medium">Habitaciones de Lujo</h2>
                <p className="leading-relaxed mb-3">Habitaciones con vistas impresionantes y todas las comodidades modernas.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://static7.depositphotos.com/1005629/736/i/380/depositphotos_7364008-stock-photo-grilled-chicken-breast-on-ratatouille.jpg" alt="imagen del restaurante" />
              <div className="p-6">
                <h2 className="text-base font-medium">Restaurante Gourmet</h2>
                <p className="leading-relaxed mb-3">Disfruta de la mejor gastronomía en un ambiente elegante y sofisticado.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Sección de comentarios de clientes */}
        <div className="container mx-auto px-4 py-12 bg-gold-300/50 rounded-lg mb-12">
          <Slider {...settings}>
            {comentarios.map((comentario) => (
              <div key={comentario.id} className="text-center p-8">
                <EstrellasCalificacion calificacion={comentario.calificacion} />
                <p className="text-white text-xl">{comentario.texto}</p>
                <p className="text-green-100 text-lg">{comentario.autor}</p>
              </div>
            ))}
          </Slider>
        </div>
        {/* Botón de reserva */}
        <motion.div className="fixed bottom-4 left-4 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/reservas" className="inline-block text-center bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-violet-400">
            Realizar una Reserva
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
