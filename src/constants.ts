// Constants for the application
export const CONNECT_ROUTING_PROFILES = [
  '21e47565-3477-44bb-a804-a903e1e777e1',
  'b521514c-d75e-4bdb-be78-59bb5f08b193',
  'b79b2b5c-1690-415c-b7ee-98481e2804e8',
  'bddc2518-45df-407e-9fae-770fc89058a9',
  'f68ed474-cc59-43e1-b915-b9602a9dd4cb',
]

export const CONNECT_METRICS = [
  'ABANDONMENT_RATE',
  'AGENT_OCCUPANCY',
  'AVG_CONTACT_DURATION',
  'AVG_CONVERSATION_DURATION',
  'AVG_NON_TALK_TIME',
  'AVG_QUEUE_ANSWER_TIME',
]

// Set of keywords to alert the supervisor of potential issues
export const KEYWORDS: Set<string> = new Set([
  // Medical Emergencies
  'emergency',
  'heart attack',
  'medical',
  'sick',
  'doctor',
  'hospital',
  'ambulance',
  'illness',
  'injury',
  'medicine',
  'prescription',
  'health',

  // Safety and Security Concerns
  'danger',
  'threat',
  'terrorist',
  'bomb',
  'weapon',
  'hijack',
  'kidnap',
  'unsafe',
  'security',
  'police',
  'attack',
  'violence',
  'harassment',
  'assault',

  // Travel Disruptions
  'cancelled',
  'delayed',
  'stranded',
  'stuck',
  'missed flight',
  'no flight',
  'overbooked',
  'lost luggage',
  'baggage issue',
  'no transportation',

  // Natural Disasters and Severe Weather
  'hurricane',
  'storm',
  'tornado',
  'earthquake',
  'flood',
  'tsunami',
  'blizzard',
  'volcano',
  'avalanche',
  'landslide',
  'natural disaster',

  // General Urgency
  'urgent',
  'asap',
  'immediately',
  'now',
  'help',
  'critical',
  'emergency contact',

  // Technical Issues
  'system down',
  'technical issue',
  'computer problem',
  'website error',
  'booking failure',
  'confirmation issue',
])
