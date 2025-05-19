import { ChatMessage } from '../types';
import { UseCase } from '../contexts/UseCaseContext';

type ChatScenarios = {
  [key in UseCase]: ChatMessage[];
};

// Helper to generate unique IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

// Helper to generate timestamps for messages
const createTimestamp = (minutesAgo: number): Date => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date;
};

export const chatScenarios: ChatScenarios = {
  ecommerce: [
    {
      id: generateId(),
      sender: 'user',
      message: 'I\'m looking for a gift for my wife who loves cooking',
      timestamp: createTimestamp(10),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'I\'d be happy to help you find the perfect cooking gift! Could you tell me what kind of cooking your wife enjoys most? For example, is she into baking, grilling, or perhaps international cuisines?',
      timestamp: createTimestamp(9),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'She\'s really into baking and has been talking about making her own bread recently',
      timestamp: createTimestamp(8),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'That\'s wonderful! For someone getting into bread making, I can recommend a few excellent options:\n\n1. A high-quality dutch oven, which is essential for creating artisanal bread with a perfect crust\n2. A professional bread proofing basket set\n3. A digital kitchen scale for precise measurements\n4. A premium bread knife\n\nWould you like details on any of these options? Or do you have a specific budget in mind?',
      timestamp: createTimestamp(7),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'The dutch oven sounds perfect. My budget is around $150',
      timestamp: createTimestamp(6),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Great choice! In your budget range, I\'d recommend the Lodge 6-Quart Enameled Cast Iron Dutch Oven at $89.99, which is excellent for bread baking.\n\nAlternatively, the Le Creuset 5.5-Quart Round Dutch Oven is on sale for $149.99 (normally $329.99), which is an exceptional value for a premium brand.\n\nBoth have excellent heat retention and are ideal for bread baking. Would you like to see either of these options?',
      timestamp: createTimestamp(5),
    },
  ],
  healthcare: [
    {
      id: generateId(),
      sender: 'user',
      message: 'I need to schedule a follow-up appointment with my doctor',
      timestamp: createTimestamp(10),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'I\'d be happy to help you schedule a follow-up appointment. To assist you properly, I\'ll need a few details:\n\n1. Which doctor would you like to see?\n2. Do you have a preferred date and time?\n3. Is this for an in-person visit or would you prefer telehealth?',
      timestamp: createTimestamp(9),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'Dr. Williams, preferably next Tuesday morning. In-person would be best.',
      timestamp: createTimestamp(8),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Thank you for providing those details. I\'ve checked Dr. Williams\' schedule for next Tuesday morning, and I see the following available slots for in-person appointments:\n\n• 9:00 AM\n• 10:30 AM\n• 11:45 AM\n\nWhich time would work best for you?',
      timestamp: createTimestamp(7),
    },
    {
      id: generateId(),
      sender: 'user',
      message: '9:00 AM would be perfect',
      timestamp: createTimestamp(6),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Excellent! I\'ve scheduled your in-person follow-up appointment with Dr. Williams for next Tuesday at 9:00 AM. You\'ll need to arrive 15 minutes early to complete any necessary paperwork.\n\nA confirmation has been sent to your email and phone. Would you like me to set a reminder for you as well?',
      timestamp: createTimestamp(5),
    },
  ],
  travel: [
    {
      id: generateId(),
      sender: 'user',
      message: 'I want to plan a vacation to Italy in September',
      timestamp: createTimestamp(10),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Italy in September is a wonderful choice! The weather is pleasant and there are fewer tourists than summer. To help you plan the perfect Italian vacation, could you share:\n\n1. How long you\'re planning to stay?\n2. Are you interested more in historical sites, food experiences, coastal areas, or a mix?\n3. Do you have a rough budget in mind?',
      timestamp: createTimestamp(9),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'About 10 days, interested in historical sites and food. Mid-range budget.',
      timestamp: createTimestamp(8),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Perfect! For a 10-day historical and culinary tour of Italy on a mid-range budget, I\'d recommend this itinerary:\n\n• Days 1-3: Rome (Colosseum, Vatican, Roman Forum, authentic trattorias)\n• Days 4-6: Florence (Renaissance art, Tuscan cuisine, day trip to Siena)\n• Days 7-8: Bologna (Italy\'s food capital, less touristy)\n• Days 9-10: Venice (unique cityscape, seafood specialties)\n\nFor mid-range accommodations, budget approximately €120-150/night. Would you like specific hotel recommendations for any of these cities?',
      timestamp: createTimestamp(7),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'Yes, please recommend hotels in Rome and Florence',
      timestamp: createTimestamp(6),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'For Rome, I recommend Hotel Artemide (€145/night) - it\'s centrally located near the Trevi Fountain with excellent reviews and includes breakfast.\n\nIn Florence, consider Hotel Davanzati (€135/night) - a charming boutique hotel in the historic center with complimentary happy hour and exceptional service.\n\nBoth hotels offer good value for money, excellent locations for sightseeing, and are known for helpful staff who can recommend authentic local restaurants. Would you like me to check availability for your September dates?',
      timestamp: createTimestamp(5),
    },
  ],
  banking: [
    {
      id: generateId(),
      sender: 'user',
      message: 'I need to dispute a transaction on my credit card',
      timestamp: createTimestamp(10),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'I\'m sorry to hear you need to dispute a transaction. I\'d be happy to help you with this process. To get started, could you please provide:\n\n1. The date of the transaction\n2. The merchant name\n3. The transaction amount\n\nThis information will help me locate the specific charge you\'re concerned about.',
      timestamp: createTimestamp(9),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'It was on July 15th, at Tech Galaxy Store for $899.99. I never made this purchase.',
      timestamp: createTimestamp(8),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Thank you for providing those details. I\'ve located the transaction with Tech Galaxy Store for $899.99 on July 15th. I understand this is a purchase you did not make, which is concerning.\n\nI\'ve initiated a dispute for this transaction (Case #DIS-2023745). Your card has been flagged for suspicious activity, and we\'ll issue you a new card with a different number as a precaution.\n\nYou will not be responsible for this charge while we investigate. The investigation typically takes 5-7 business days. Would you like to receive text alerts about the status of this dispute?',
      timestamp: createTimestamp(7),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'Yes, please send me text alerts. When will I receive my new card?',
      timestamp: createTimestamp(6),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'I\'ve enabled text alerts for this dispute case, and you should receive an initial confirmation message shortly.\n\nYour new card has been expedited and will arrive within 2-3 business days via priority mail. You can continue to use your current card for essential purchases until the new one arrives, but we recommend limiting its use.\n\nOnce you receive your new card, please activate it immediately through the mobile app or by calling the number on the back of the card. Is there anything else you need help with regarding this situation?',
      timestamp: createTimestamp(5),
    },
  ],
  'customer-support': [
    {
      id: generateId(),
      sender: 'user',
      message: 'My internet connection keeps dropping every few hours',
      timestamp: createTimestamp(10),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'I\'m sorry to hear you\'re experiencing intermittent internet connection issues. This must be frustrating. Let\'s troubleshoot this together.\n\nCould you please tell me:\n1. What type of internet connection do you have (fiber, cable, DSL)?\n2. Are you using WiFi or a wired connection when the drops occur?\n3. Approximately how long do the outages last before reconnecting?',
      timestamp: createTimestamp(9),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'I have fiber, using WiFi, and it\'s out for about 5-10 minutes each time.',
      timestamp: createTimestamp(8),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'Thank you for those details. Based on what you\'ve shared, there are several potential causes for your WiFi dropping with a fiber connection.\n\nLet\'s try these troubleshooting steps:\n\n1. Power cycle your equipment: Unplug both your router and fiber terminal, wait 30 seconds, then plug in the fiber terminal first, followed by the router after it fully boots\n\n2. Check for interference: Make sure your router isn\'t near microwaves, cordless phones, or Bluetooth devices\n\n3. Check for overheating: Ensure your router has proper ventilation\n\nHave you noticed if these drops happen at specific times of day?',
      timestamp: createTimestamp(7),
    },
    {
      id: generateId(),
      sender: 'user',
      message: 'I\'ll try those steps. It seems to happen more in the evening, actually.',
      timestamp: createTimestamp(6),
    },
    {
      id: generateId(),
      sender: 'ai',
      message: 'The timing is helpful information. Evening drops often indicate network congestion or interference issues as more people are online and using various devices.\n\nAfter trying the power cycle, also consider:\n\n1. Changing your WiFi channel through your router settings (channels 1, 6, or 11 for 2.4GHz networks)\n\n2. If possible, temporarily connect a device directly to your router via ethernet cable when the next outage occurs to determine if it\'s a WiFi issue or an internet service issue\n\nI\'ve also checked your account and see no reported outages in your area, but I can schedule a technician visit if these steps don\'t resolve the issue. Would you like me to do that?',
      timestamp: createTimestamp(5),
    },
  ],
};

export default chatScenarios;