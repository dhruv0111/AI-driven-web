import { DashboardStat } from '../types';
import { UseCase } from '../contexts/UseCaseContext';

type DashboardStatsByUseCase = {
  [key in UseCase]: DashboardStat[];
};

export const dashboardStats: DashboardStatsByUseCase = {
  ecommerce: [
    {
      id: '1',
      title: 'Conversion Rate',
      value: '24.8%',
      change: 12.5,
      icon: 'shopping-cart',
      color: 'bg-indigo-500',
    },
    {
      id: '2',
      title: 'Avg. Order Value',
      value: '$68.42',
      change: 8.3,
      icon: 'credit-card',
      color: 'bg-purple-500',
    },
    {
      id: '3',
      title: 'Customer Satisfaction',
      value: '92%',
      change: 4.7,
      icon: 'smile',
      color: 'bg-green-500',
    },
    {
      id: '4',
      title: 'Return Rate',
      value: '3.2%',
      change: -5.1,
      icon: 'package',
      color: 'bg-teal-500',
    },
  ],
  healthcare: [
    {
      id: '1',
      title: 'Patient Engagement',
      value: '78.3%',
      change: 15.2,
      icon: 'activity',
      color: 'bg-teal-500',
    },
    {
      id: '2',
      title: 'Appointment Completion',
      value: '92.7%',
      change: 3.8,
      icon: 'calendar',
      color: 'bg-emerald-500',
    },
    {
      id: '3',
      title: 'Symptom Assessment',
      value: '86%',
      change: 7.4,
      icon: 'clipboard-check',
      color: 'bg-green-500',
    },
    {
      id: '4',
      title: 'Follow-up Adherence',
      value: '68.9%',
      change: 12.3,
      icon: 'repeat',
      color: 'bg-cyan-500',
    },
  ],
  travel: [
    {
      id: '1',
      title: 'Booking Completion',
      value: '82.4%',
      change: 9.6,
      icon: 'map',
      color: 'bg-amber-500',
    },
    {
      id: '2',
      title: 'Upsell Conversion',
      value: '34.7%',
      change: 22.3,
      icon: 'star',
      color: 'bg-orange-500',
    },
    {
      id: '3',
      title: 'Customer Satisfaction',
      value: '88%',
      change: 5.2,
      icon: 'smile',
      color: 'bg-yellow-500',
    },
    {
      id: '4',
      title: 'Avg. Booking Value',
      value: '$842',
      change: 18.4,
      icon: 'credit-card',
      color: 'bg-red-500',
    },
  ],
  banking: [
    {
      id: '1',
      title: 'Issue Resolution',
      value: '93.6%',
      change: 4.8,
      icon: 'check-circle',
      color: 'bg-purple-500',
    },
    {
      id: '2',
      title: 'Processing Time',
      value: '1.2 min',
      change: -42.6,
      icon: 'clock',
      color: 'bg-violet-500',
    },
    {
      id: '3',
      title: 'Self-Service Rate',
      value: '78.9%',
      change: 23.5,
      icon: 'user',
      color: 'bg-indigo-500',
    },
    {
      id: '4',
      title: 'Fraud Detection',
      value: '99.7%',
      change: 1.2,
      icon: 'shield',
      color: 'bg-blue-500',
    },
  ],
  'customer-support': [
    {
      id: '1',
      title: 'First Response Time',
      value: '0.4 min',
      change: -68.7,
      icon: 'zap',
      color: 'bg-pink-500',
    },
    {
      id: '2',
      title: 'Resolution Rate',
      value: '87.3%',
      change: 12.8,
      icon: 'check-circle',
      color: 'bg-rose-500',
    },
    {
      id: '3',
      title: 'CSAT Score',
      value: '4.8/5',
      change: 6.7,
      icon: 'star',
      color: 'bg-red-500',
    },
    {
      id: '4',
      title: 'Escalation Rate',
      value: '4.2%',
      change: -15.3,
      icon: 'alert-circle',
      color: 'bg-fuchsia-500',
    },
  ],
};

export default dashboardStats;