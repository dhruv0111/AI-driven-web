import React from 'react';
import { motion } from 'framer-motion';
import DashboardPreview from '../components/DashboardPreview';

const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Track Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-600 dark:text-gray-300"
          >
            Monitor your AI performance in real-time with our comprehensive analytics dashboard
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DashboardPreview />
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Beyond Metrics: Actionable Insights</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our dashboard doesn't just show you numbers—it provides context, trends, and actionable recommendations to continuously improve your AI's performance.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
                    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
                    <rect width="20" height="8" x="2" y="8" rx="1"></rect>
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Customizable Dashboard</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Tailor your view to focus on the metrics that matter most to your business goals.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                    <path d="M10.5 20.5a2.5 2.5 0 0 1-5 0c0-2.5 2.5-2.5 2.5-5 0-1.2-1-2.3-2.1-2.7"></path>
                    <path d="M4.4 12.8C3 10.5 3 9.2 4.4 7.8c2.3-2.3 5.4-2.3 7.8 0l.4.3"></path>
                    <path d="M20.5 14.5c-2.3 2.3-5.4 2.3-7.8 0l-2.7-2.7c-2.3-2.3-2.3-5.4 0-7.8 2.3-2.3 5.4-2.3 7.8 0C20.5 6.8 20.5 10 18 12.5"></path>
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Intelligent Trend Detection</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Automatically identifies patterns and anomalies in your data to highlight opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 dark:text-teal-400">
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                    <path d="M8 4v5"></path>
                    <path d="M16 4v5"></path>
                    <path d="M10 14h4"></path>
                  </svg>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Scheduled Reports</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Automated insights delivered to your inbox on your preferred schedule.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl transform -rotate-2"></div>
            <div className="card relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics at a Glance</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h4 className="font-medium text-sm mb-2">Intent Recognition Accuracy</h4>
                  <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="bg-primary-600 h-full rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>Current: 94%</span>
                    <span className="text-green-600 dark:text-green-400">↑ 2.5%</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h4 className="font-medium text-sm mb-2">User Satisfaction Score</h4>
                  <div className="flex justify-between mb-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={star <= 4.5 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm">4.5/5</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Based on 12,453 feedback responses</p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h4 className="font-medium text-sm mb-3">Top User Intents</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Product Information</span>
                      <span>32%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span>Order Status</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span>Technical Support</span>
                      <span>21%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full" style={{ width: '21%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;