import React from 'react';
import { motion } from 'framer-motion';
import DarkModeButton from "../components/DarkModeButton";
import Prices from '../components/PricesAdmin';
import Promotions from '../components/PromotionsAdmin';
import Services from '../components/ServicesAdmin';

const AdminEdit = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Panel Administrativo</h1>
        <DarkModeButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Prices />
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Promotions />
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Services />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminEdit;
