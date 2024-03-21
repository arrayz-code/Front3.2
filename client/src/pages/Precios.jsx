import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import { motion } from 'framer-motion';
import axios from 'axios';

// Variants para las animaciones con Framer Motion
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

// Componente Prices
const Prices = () => {
  const [roomsData, setRoomsData] = useState([]); // Datos de las habitaciones
  const [selectedRoom, setSelectedRoom] = useState(null); // Habitación seleccionada
  const [currency, setCurrency] = useState('USD'); // Moneda seleccionada
  const [exchangeRate, setExchangeRate] = useState(1); // Tasa de cambio
  const [peopleFilter, setPeopleFilter] = useState(''); // Filtro de personas
  const [loading, setLoading] = useState(false); // Estado de carga

  // Efecto para cargar los datos de las habitaciones
  useEffect(() => {
    setLoading(true); // Iniciar la carga
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3001/rooms');
        setRoomsData(response.data); // Establecer los datos de las habitaciones
      } catch (error) {
        console.error('Error al obtener los datos de las habitaciones:', error);
      }
      setLoading(false); // Finalizar la carga
    };

    fetchRooms();
  }, []);

  // Manejador para seleccionar una habitación
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  // Filtrado de habitaciones según el número de personas
  const filteredRooms = roomsData.filter(room => room.people >= peopleFilter);

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-8 mt-4 text-sky-600">
          Habitaciones disponibles
        </h2>
        {/* Input para el filtro de personas */}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Ingresa número de personas a hospedar"
          value={peopleFilter}
          onChange={(e) => setPeopleFilter(e.target.value)}
        />
      </div>
      {/* Loader visual */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      ) : filteredRooms.length > 0 ? (
        <motion.div className="flex flex-wrap -m-4"
          variants={containerVariants}
        >
          {/* Renderizado de las habitaciones */}
          {filteredRooms.map((room, idx) => (
            <motion.div key={idx} className="p-4 md:w-1/3"
              variants={itemVariants}
              onClick={() => handleRoomSelect(room)}
            >
              <RoomCard
                roomName={room.name}
                roomDescription={room.description}
                roomImages={room.images}
                price={room.price}
                currency={currency}
                exchangeRate={exchangeRate}
                reviews={room.reviews}
                people={room.people}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Mensaje cuando no se encuentran habitaciones
        <div className="text-center text-xl mt-8">
          No se encontraron habitaciones para la cantidad de personas especificada.
        </div>
      )}
    </motion.div>
  );
};

export default Prices;
