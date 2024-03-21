
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PromotionBanner from '../components/PromotionBanner';
import axios from 'axios';

const Promotions = () => {
  const [promotionsData, setPromotionsData] = useState([]);

  useEffect(() => {
    // Obtener las promociones del servidor
    axios.get('http://localhost:3001/promotions')
      .then(response => {
        setPromotionsData(response.data);
      })
      .catch(error => {
        console.error("Error al obtener las promociones:", error);
      });
  }, []);

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
      }
    },
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
          className='text-4xl text-center font-bold mb-8 mt-4 text-sky-600'
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
            className="p-6 w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-md transition-shadow duration-300 ease-in-out"
            variants={itemVariants} 
            whileHover="hover"
            whileTap="tap"
          >
            <PromotionBanner
              promotionTitle={promotion.title}
              promotionSubtitle={promotion.subtitle}
              startDate={new Date(promotion.startDate)}
              endDate={new Date(promotion.endDate)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Promotions;
