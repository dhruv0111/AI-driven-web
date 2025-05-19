import React from 'react';
import { ChevronDown, ShoppingBag, HeartPulse, Plane, Landmark, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUseCase, UseCase } from '../contexts/UseCaseContext';

const UseCaseSelector: React.FC = () => {
  const { useCase, setUseCase, useCaseData } = useUseCase();
  const [isOpen, setIsOpen] = React.useState(false);

  const useCases = [
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingBag className="h-4 w-4" /> },
    { id: 'healthcare', label: 'Healthcare', icon: <HeartPulse className="h-4 w-4" /> },
    { id: 'travel', label: 'Travel', icon: <Plane className="h-4 w-4" /> },
    { id: 'banking', label: 'Banking', icon: <Landmark className="h-4 w-4" /> },
    { id: 'customer-support', label: 'Customer Support', icon: <Headphones className="h-4 w-4" /> },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (selected: UseCase) => {
    setUseCase(selected);
    setIsOpen(false);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'ecommerce':
        return <ShoppingBag className="h-4 w-4" />;
      case 'healthcare':
        return <HeartPulse className="h-4 w-4" />;
      case 'travel':
        return <Plane className="h-4 w-4" />;
      case 'banking':
        return <Landmark className="h-4 w-4" />;
      case 'customer-support':
        return <Headphones className="h-4 w-4" />;
      default:
        return <ShoppingBag className="h-4 w-4" />;
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {getIcon(useCase)}
        <span>{useCaseData.title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg p-1 right-0"
          >
            <div className="py-1">
              {useCases.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id as UseCase)}
                  className={`
                    flex items-center w-full px-4 py-2 text-sm rounded-md
                    ${useCase === item.id 
                      ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
                  `}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UseCaseSelector;