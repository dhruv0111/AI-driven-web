import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import featureTourSteps from '../data/featureTourData';

const FeatureTour: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % featureTourSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + featureTourSteps.length) % featureTourSteps.length);
  };

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ className?: string }>>)[iconName];
    return Icon ? <Icon className="h-12 w-12 text-primary-500" /> : null;
  };

  return (
    <div className="card">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-center">How Our AI Works</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-lg mt-2">
          Explore the technology that powers our intelligent solutions
        </p>
        
        <div className="w-full mt-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-4"
            >
              <div className="flex-shrink-0 p-6 rounded-2xl bg-primary-50 dark:bg-gray-800">
                {getIcon(featureTourSteps[currentStep].icon)}
              </div>
              
              <div>
                <h4 className="text-xl font-semibold">
                  {featureTourSteps[currentStep].title}
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {featureTourSteps[currentStep].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              className="btn btn-outline"
            >
              Previous
            </button>
            
            <div className="flex space-x-2">
              {featureTourSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentStep 
                      ? 'bg-primary-600' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextStep}
              className="btn btn-outline"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTour;