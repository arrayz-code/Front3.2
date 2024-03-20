import React from 'react';
import { motion } from 'framer-motion';
import PromotionBanner from '../components/PromotionBanner';

const Promotions = () => {
  const promotionsData = [
    { title: "Descuento de carnaval", subtitle: "Celebra con un 30% de descuento en tu estadía.", startDate: new Date(2024, 2, 1), endDate: new Date(2024, 3, 1) },
    { title: "Promoción de Verano", subtitle: "Hasta un 40% de descuento en habitaciones seleccionadas.", startDate: new Date(2024, 5, 1), endDate: new Date(2024, 8, 31) },
    { title: "Oferta de Bienvenida", subtitle: "Obtén un 25% de descuento en tu primera reserva.", startDate: new Date(2024, 0, 1), endDate: new Date(2024, 11, 31) },
    { title: "Paquete Romántico", subtitle: "Incluye cena para dos y decoración especial con un 20% de descuento.", startDate: new Date(2024, 1, 1), endDate: new Date(2024, 1, 28) },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {

    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }},
    hover: { 
      scale: 1.2,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"
    },
    tap: { 
      scale: 0.9 
    }
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={itemVariants} 
      initial="hidden"
      animate="visible"
    >
      <motion.h1
          className='text-4xl text-center font-bold mb-8 mt-4 '
          variants={containerVariants}
        >
          Promociones
        </motion.h1>
      <div
        className="flex flex-wrap justify-center items-center gap-8"
        initial="hidden"
        animate="visible"
      >
        {promotionsData.map((promotion, idx) => (
          <motion.div
            key={idx}
            className="p-6 w-full md:w-1/2 lg:w-1/3  rounded-xl shadow-md transition-shadow duration-300 ease-in-out"
            variants={itemVariants} 
            whileHover="hover"
            whileTap="tap"
          >
            <PromotionBanner
              promotionTitle={promotion.title}
              promotionSubtitle={promotion.subtitle}
              startDate={promotion.startDate}
              endDate={promotion.endDate}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Promotions;
