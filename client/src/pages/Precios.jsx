import React, { useState } from 'react';
import RoomCard from '../components/RoomCard';
import { motion } from 'framer-motion';

const pricesData = [
  {
    name: "Habitación Doble",
    description: "Una habitación cómoda y espaciosa con dos camas individuales.",
    image: "https://st2.depositphotos.com/1000975/11773/i/600/depositphotos_117733132-stock-photo-modern-hotel-room-with-big.jpg",
    price: 50
  },
  {
    name: "Habitación Suite",
    description: "Una habitación de lujo con una cama king size y un jacuzzi privado.",
    image: "https://st2.depositphotos.com/1000975/8586/i/450/depositphotos_85867294-stock-photo-hotel-room-with-modern-interior.jpg",
    price: 100
  },
  {
    name: "Habitación Familiar",
    description: "Una habitación ideal para familias con una cama matrimonial y dos camas individuales.",
    image: "https://st2.depositphotos.com/1321174/8163/i/600/depositphotos_81631752-stock-photo-luxury-hotel-room.jpg",
    price: 80
  }
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

const Prices = () => {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1); // Tipo de cambio por defecto

  const handleCurrencyChange = (newCurrency) => {
    const newExchangeRate = newCurrency === 'EUR' ? 0.93 : 1; // tipo de cambio
    setCurrency(newCurrency);
    setExchangeRate(newExchangeRate);
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      style={{ 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(5px)',
        opacity: 0.1,
      }}
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
          Precios de las Habitaciones
        </h2>
        <div>
  <button
    onClick={() => handleCurrencyChange('EUR')}
    className="text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 font-medium py-1 px-3 rounded shadow-sm"
  >
    Cambiar a Euros
  </button>
  <button
    onClick={() => handleCurrencyChange('USD')}
    className="text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 font-medium py-1 px-3 rounded shadow-sm ml-2"
  >
    Cambiar a Dólares
  </button>
</div>

      </div>
      <motion.div className="flex flex-wrap -m-4"
        variants={containerVariants}
      >
        {pricesData.map((price, idx) => (
          <motion.div key={idx} className="p-4 md:w-1/3"
            variants={itemVariants}
          >
            <RoomCard 
              roomName={price.name} 
              roomDescription={price.description}
              roomImage={price.image}
              price={price.price}
              currency={currency}
              exchangeRate={exchangeRate}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Prices;