import { FeatureTourStep } from '../types';

export const featureTourSteps: FeatureTourStep[] = [
  {
    id: 1,
    title: 'Natural Language Understanding',
    description: 'Our AI comprehends complex queries, extracts intent, and understands context through advanced NLP models trained on diverse datasets.',
    icon: 'brain',
  },
  {
    id: 2,
    title: 'Knowledge Integration',
    description: 'Seamlessly connects to your existing knowledge base, documentation, and business systems to provide accurate, company-specific responses.',
    icon: 'database',
  },
  {
    id: 3,
    title: 'Multi-turn Conversations',
    description: 'Maintains context throughout conversations, remembering previous interactions to provide coherent, contextually relevant responses.',
    icon: 'message-circle',
  },
  {
    id: 4,
    title: 'Personalization Engine',
    description: 'Adapts responses based on user history, preferences, and behavior patterns to deliver tailored experiences.',
    icon: 'user-cog',
  },
  {
    id: 5,
    title: 'Real-time Learning',
    description: 'Continuously improves through interaction analysis, feedback loops, and reinforcement learning techniques.',
    icon: 'trending-up',
  },
];

export default featureTourSteps;