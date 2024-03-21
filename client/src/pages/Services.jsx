
import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import axios from 'axios';

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
  }
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los servicios:', error);
      });
  }, []);

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-sky-600 inline-block p-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '10px',
            boxShadow: '0 0 10px #fff'
          }}>
          Nuestros Servicios
        </h2>
      </div>
      <motion.div className="flex flex-wrap -m-4" variants={containerVariants}>
        {services.map((service, idx) => (
          <motion.div key={idx} className="p-4 md:w-1/3" variants={itemVariants}>
            <ServiceCard
              serviceName={service.name}
              serviceDescription={service.description}
              serviceImage={`http://localhost:3001/${service.image}`} // URL completa de la imagen
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;

