import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

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

class ContactUs extends Component {
  render() {
    const position = [8.5981, -71.1449]; // Coordenadas de Mérida
    return (
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className='text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 mt-4 '
          variants={itemVariants}
        >
          Contáctanos
        </motion.h1>
        <div className='flex flex-col md:flex-row justify-between items-start w-full'>
          <motion.div className='w-full md:w-1/2 p-4' variants={itemVariants}>
           
               <p className='text-lg'><strong>Dirección:</strong></p> <ul>Calle 23, entre avenidas 4 y 5, Mérida, Venezuela</ul>
               <p className='text-lg'><strong>Teléfonos:</strong></p>
               <ul className='list-disc pl-4'>
                 <li className='text-lg'><span >+58 272 555 1234</span></li>
                 <li className='text-lg'><span >+58 272 555 5678</span></li>
               </ul>
               <a href='https://www.instagram.com/hotellamontaña' target='_blank' rel='noopener noreferrer' className='text-blue-500'>
                 <FaInstagram className='inline mr-2' />
                 Síguenos en Instagram
               </a>
               <br />
               <a href='https://www.facebook.com/hotellamontaña' target='_blank' rel='noopener noreferrer' className='text-blue-500'>
                <FaFacebook className='inline mr-2' />
                Síguenos en Facebook
               </a>
          </motion.div>
          <motion.div className='w-full md:w-1/2' variants={itemVariants}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-64 my-4'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </motion.div>
    );
  }
}

export default ContactUs;