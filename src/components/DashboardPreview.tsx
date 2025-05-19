import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useUseCase } from '../contexts/UseCaseContext';
import dashboardStats from '../data/dashboardData';

const DashboardPreview: React.FC = () => {
  const { useCase } = useUseCase();
  const stats = dashboardStats[useCase];

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ className?: string }>>)[iconName];
    return Icon ? <Icon className="h-6 w-6 text-white" /> : null;
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold">AI Performance Dashboard</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Real-time metrics showing how our AI drives business results
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <h4 className="text-2xl font-bold mt-1">{stat.value}</h4>
              </div>
              
              <div className={`${stat.color} p-3 rounded-xl`}>
                {getIcon(stat.icon)}
              </div>
            </div>
            
            <div className={`mt-4 flex items-center ${
              stat.change > 0 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {stat.change > 0 ? (
                <LucideIcons.TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <LucideIcons.TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm font-medium">
                {stat.change > 0 ? '+' : ''}{stat.change}%
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                vs last period
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPreview;