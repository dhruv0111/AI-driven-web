export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  message: string;
  timestamp: Date;
}

export interface FeatureTourStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface DashboardStat {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}