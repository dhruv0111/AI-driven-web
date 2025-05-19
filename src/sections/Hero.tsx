import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-10 dark:opacity-20" />
      
      {/* Floating orbs - decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-600/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Intelligent AI for
              <br />
              <span className="text-transparent bg-clip-text gradient-bg">every business</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Explore how our conversational AI platform can transform your customer experience and streamline operations across any industry.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#usecases"
                className="btn btn-primary px-8 py-3 text-base"
              >
                Try Demo
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#features"
                className="btn btn-outline px-8 py-3 text-base"
              >
                Learn More
              </motion.a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 dark:bg-primary-900/60 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium">Lightning Fast</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Responses in milliseconds</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 dark:bg-primary-900/60 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium">Enterprise Security</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">SOC 2 & HIPAA compliant</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 dark:bg-primary-900/60 p-2 rounded-lg">
                  <Brain className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium">Advanced AI</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">State-of-the-art models</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary-100 dark:bg-primary-900/60 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-medium">Custom Training</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tailored to your needs</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Animated AI brain visualization */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-2xl animate-pulse" />
              
              <div className="absolute inset-4 glass rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full absolute">
                  {/* Wave effect */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 4,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-primary-600/40 to-transparent rounded-full"
                  />
                </div>
                
                {/* Brain icon */}
                <Brain className="h-1/3 w-1/3 text-white drop-shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;