export type LossType = 'Water' | 'Mold' | 'Fire' | 'Storm';

export type ClaimStatus = 'Intake' | 'Extraction' | 'Drying' | 'Sanitization' | 'Structural' | 'Completed';

export interface ClaimDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  url: string;
  status: 'Processing' | 'Verified' | 'Pending Review';
}

export interface ClaimHistoryEvent {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RoomMoistureReading {
  roomName: string;
  material: string;
  dryStd: number;      // target moisture content (e.g., 12%)
  intakeLevel: number; // baseline level (e.g., 45%)
  currentLevel: number;// current dynamic level (e.g., 14%)
}

export interface ActiveEquipment {
  id: string;
  name: string;
  type: 'dehumidifier' | 'air_mover' | 'air_scrubber';
  room: string;
  status: 'active' | 'standby';
  serial: string;
  hoursRun: number;
}

export interface Message {
  id: string;
  sender: 'client' | 'specialist';
  senderName: string;
  text: string;
  timestamp: string;
}

export interface Claim {
  id: string;
  claimNumber: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  address: string;
  insuranceProvider: string;
  policyNumber: string;
  lossType: LossType;
  lossDate: string;
  status: ClaimStatus;
  description: string;
  documents: ClaimDocument[];
  history: ClaimHistoryEvent[];
  moistureReadings: RoomMoistureReading[];
  equipment: ActiveEquipment[];
  messages: Message[];
}
