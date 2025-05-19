import React from 'react';
import { motion } from 'framer-motion';
import FeatureTour from '../components/FeatureTour';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Powerful AI Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-600 dark:text-gray-300"
          >
            Discover the advanced capabilities that power our intelligent AI solutions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FeatureTour />
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-3">Enterprise-grade Security</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Built with security and compliance as core principles, our platform meets the highest standards for data protection.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                SOC 2 Type II compliant
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                HIPAA compliant solutions
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                End-to-end encryption
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                Private cloud deployment options
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with your existing tools and systems to create a unified workflow and enhanced productivity.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                300+ pre-built integrations
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                API-first architecture
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                Custom webhook support
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                SSO and identity management
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-3">Actionable Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Gain valuable insights from every interaction to continuously improve your AI performance and business outcomes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
                Real-time performance monitoring
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
                Sentiment analysis
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
                Conversation intelligence
              </li>
              <li className="flex items-center">
                <div className="mr-2 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
                Custom reporting dashboard
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;