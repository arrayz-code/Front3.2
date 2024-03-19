import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
const servicesData = [
  {
    name: "Tratamientos de Spa",
    description: "Consiente tu cuerpo con nuestros lujosos tratamientos de spa.",
    image: "https://st5.depositphotos.com/16122460/64768/i/380/depositphotos_647687128-stock-photo-flat-lay-composition-spa-products.jpg" // Reemplaza con la URL de la imagen correspondiente
  },
  {
    name: "Piscina Olímpica",
    description: "Disfruta y relájate en nuestra piscina olímpica climatizada.",
    image: "https://st2.depositphotos.com/4413685/6537/i/380/depositphotos_65374199-stock-photo-yellow-pool-floats-in-a.jpg" // Reemplaza con la URL de la imagen correspondiente
  },
  {
    name: "Restaurante Gourmet",
    description: "Saborea la alta cocina en nuestro exclusivo restaurante gourmet.",
    image: "https://st.depositphotos.com/1499736/2459/i/380/depositphotos_24590415-stock-photo-chef-offering-pasta-salad-to.jpg" // Reemplaza con la URL de la imagen correspondiente
  },
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
    }
  }
};
const Services = () => {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      style={{ 
        backgroundImage: `url(${selectedImage})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(5px)',
        opacity: 0.1,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Añade un contenedor alrededor del título con un fondo semi-transparente */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-sky-600 inline-block p-2"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo blanco semi-transparente
              borderRadius: '10px',
              boxShadow: '0 0 10px #fff' // Sombra blanca alrededor del texto
            }}>
          Nuestros Servicios
        </h2>
      </div>
      <motion.div className="flex flex-wrap -m-4"
        variants={containerVariants}
      >
        {servicesData.map((service, idx) => (
          <motion.div key={idx} className="p-4 md:w-1/3"
            variants={itemVariants}
            onMouseEnter={() => setSelectedImage(service.image)}
            onMouseLeave={() => setSelectedImage('')}
          >
            <ServiceCard 
              serviceName={service.name} 
              serviceDescription={service.description}
              serviceImage={service.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );};
export default Services;

