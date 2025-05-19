import React, { createContext, useContext, useState } from 'react';

export type UseCase = 'ecommerce' | 'healthcare' | 'travel' | 'banking' | 'customer-support';

interface UseCaseContextType {
  useCase: UseCase;
  setUseCase: (useCase: UseCase) => void;
  useCaseData: {
    title: string;
    description: string;
    color: string;
    icon: string;
  };
}

const useCaseData = {
  ecommerce: {
    title: 'E-commerce',
    description: 'Personalized shopping experiences and product recommendations',
    color: 'from-blue-500 to-indigo-600',
    icon: 'shopping-bag',
  },
  healthcare: {
    title: 'Healthcare',
    description: 'Patient support and medical information assistance',
    color: 'from-teal-500 to-emerald-600',
    icon: 'heart-pulse',
  },
  travel: {
    title: 'Travel',
    description: 'Trip planning and travel recommendations',
    color: 'from-amber-500 to-orange-600',
    icon: 'plane',
  },
  banking: {
    title: 'Banking',
    description: 'Financial assistance and transaction support',
    color: 'from-purple-500 to-violet-600',
    icon: 'landmark',
  },
  'customer-support': {
    title: 'Customer Support',
    description: '24/7 assistance for customer inquiries',
    color: 'from-rose-500 to-pink-600',
    icon: 'headphones',
  },
};

const UseCaseContext = createContext<UseCaseContextType | undefined>(undefined);

export const UseCaseProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [useCase, setUseCase] = useState<UseCase>('ecommerce');

  return (
    <UseCaseContext.Provider value={{ 
      useCase, 
      setUseCase,
      useCaseData: useCaseData[useCase]
    }}>
      {children}
    </UseCaseContext.Provider>
  );
};

export const useUseCase = (): UseCaseContextType => {
  const context = useContext(UseCaseContext);
  
  if (context === undefined) {
    throw new Error('useUseCase must be used within a UseCaseProvider');
  }
  
  return context;
};