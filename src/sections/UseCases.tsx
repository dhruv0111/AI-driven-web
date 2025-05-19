import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, HeartPulse, Plane, Landmark, Headphones } from 'lucide-react';
import ChatSimulator from '../components/ChatSimulator';
import { useUseCase, UseCase } from '../contexts/UseCaseContext';

const UseCases: React.FC = () => {
  const { useCase, setUseCase } = useUseCase();

  const useCases = [
    { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingBag className="h-5 w-5" />, color: 'from-blue-500 to-indigo-600' },
    { id: 'healthcare', label: 'Healthcare', icon: <HeartPulse className="h-5 w-5" />, color: 'from-teal-500 to-emerald-600' },
    { id: 'travel', label: 'Travel', icon: <Plane className="h-5 w-5" />, color: 'from-amber-500 to-orange-600' },
    { id: 'banking', label: 'Banking', icon: <Landmark className="h-5 w-5" />, color: 'from-purple-500 to-violet-600' },
    { id: 'customer-support', label: 'Customer Support', icon: <Headphones className="h-5 w-5" />, color: 'from-rose-500 to-pink-600' },
  ];

  return (
    <section id="usecases" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Industry-specific AI Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-600 dark:text-gray-300"
          >
            Select an industry to see how our AI platform adapts to different business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              {useCases.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ y: -3 }}
                  onClick={() => setUseCase(item.id as UseCase)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl
                    ${useCase === item.id 
                      ? `bg-gradient-to-r ${item.color} text-white` 
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ChatSimulator />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Transform Your Business with AI</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our AI solutions are designed to adapt to your specific industry requirements, providing intelligent assistance, automating routine tasks, and delivering exceptional customer experiences.
            </p>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Industry-Specific Training</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our AI is trained with domain-specific knowledge, terminology, and best practices for each industry.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Seamless Integration</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Connect with your existing systems, databases, and tools for a unified workflow.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The AI learns from every interaction, constantly refining its responses and recommendations.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">
                Get a Custom Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;