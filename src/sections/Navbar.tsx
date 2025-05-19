import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import UseCaseSelector from '../components/UseCaseSelector';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600 dark:text-primary-500" />
            <span className="text-xl font-bold">NovaAI</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="#features" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Features
              </a>
              <a href="#usecases" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Use Cases
              </a>
              <a href="#dashboard" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Dashboard
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Testimonials
              </a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <UseCaseSelector />
              <ThemeToggle />
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>

          <div className="flex items-center md:hidden space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container py-4 flex flex-col space-y-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Features
                </a>
                <a
                  href="#usecases"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Use Cases
                </a>
                <a
                  href="#dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Dashboard
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Testimonials
                </a>
              </nav>
              
              <UseCaseSelector />
              
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;