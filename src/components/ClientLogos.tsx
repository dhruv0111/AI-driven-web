import React from 'react';
import { motion } from 'framer-motion';
import clientLogos from '../data/clientLogosData';

const ClientLogos: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-16 rounded-2xl">
      <div className="container">
        <h3 className="text-2xl font-bold text-center mb-4">Trusted by Leading Companies</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Our AI solutions are helping companies across industries transform their customer experiences and operations
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ y: -5 }}
              className="flex justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 max-w-[120px] md:max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;