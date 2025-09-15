export interface Player {
  id: string;
  name: string;
  company: string;
  seed?: number;
}

export interface Match {
  id: string;
  player1: Player | null;
  player2: Player | null;
  winner: Player | null;
  score?: string;
  status: 'upcoming' | 'in-progress' | 'completed';
  date?: string;
  time?: string;
  court?: string;
  round: number;
}

export interface Tournament {
  id: string;
  name: string;
  status: 'upcoming' | 'active' | 'completed';
  startDate: string;
  endDate: string;
  matches: Match[];
  players: Player[];
}