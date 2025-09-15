export interface EventHighlight {
  title: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  price: string;
  participants: string;
  status: string;
  featured?: boolean;
  highlights?: string[];
}