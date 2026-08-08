export interface Treatment {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  duration: string;
  idealFor: string;
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  rating: number;
  text: string;
  date: string;
  avatarSeed?: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ClinicConfig {
  dentistName: string;
  cro: string;
  titleBadge: string;
  tagline: string;
  city: string;
  address: string;
  phone: string;
  whatsappNumber: string;
  whatsappClean: string;
  instagram: string;
  email: string;
  workingHours: string;
  plusCode?: string;
  heroImage: string;
  receptionImage: string;
  treatmentRoomImage: string;
  logoImage?: string;
}

export interface BookingFormData {
  patientName: string;
  phone: string;
  treatmentId: string;
  preferredShift: 'manha' | 'tarde' | 'noite';
  notes: string;
}
