import { Player, Match, Tournament } from '@/types/tournament';

export const tournamentPlayers: Player[] = [
  { id: '1', name: 'Rajesh Kumar', company: 'HDFC ERGO', seed: 1 },
  { id: '2', name: 'Sanjay Mehta', company: 'Tata Digital', seed: 2 },
  { id: '3', name: 'Neha Agarwal', company: 'ICICI Bank', seed: 3 },
  { id: '4', name: 'James Wilson', company: 'Barclays', seed: 4 },
  { id: '5', name: 'Ravi Krishnan', company: 'Hitachi', seed: 5 },
  { id: '6', name: 'Madhavi Singh', company: 'WNS Global', seed: 6 },
  { id: '7', name: 'Gautam Desai', company: 'Adani Airport', seed: 7 },
  { id: '8', name: 'Anil Kapoor', company: 'DSK Legal', seed: 8 },
  { id: '9', name: 'Priya Sharma', company: 'HDFC ERGO', seed: 9 },
  { id: '10', name: 'Kavya Patel', company: 'Tata Digital', seed: 10 },
  { id: '11', name: 'Vikram Shah', company: 'ICICI Bank', seed: 11 },
  { id: '12', name: 'Sneha Reddy', company: 'Barclays', seed: 12 },
  { id: '13', name: 'Ananya Joshi', company: 'Hitachi', seed: 13 },
  { id: '14', name: 'Karan Jain', company: 'WNS Global', seed: 14 },
  { id: '15', name: 'Shruti Iyer', company: 'Adani Airport', seed: 15 },
  { id: '16', name: 'Meera Joshi', company: 'DSK Legal', seed: 16 },
];

export const currentTournamentMatches: Match[] = [
  // Round 1 - First Round (32 → 16 players)
  {
    id: 'r1m1',
    player1: tournamentPlayers[0], // Rajesh Kumar (1)
    player2: tournamentPlayers[31], // Swati Narayanan (32)
    winner: tournamentPlayers[0],
    score: '21-15, 21-18',
    status: 'completed',
    date: 'Sept 25, 2025',
    time: '9:00 AM',
    court: 'A',
    round: 1
  },
  {
    id: 'r1m2',
    player1: tournamentPlayers[1], // Sanjay Mehta (2)
    player2: tournamentPlayers[30], // Rajat Khanna (31)
    winner: tournamentPlayers[1],
    score: '21-12, 19-21, 21-16',
    status: 'completed',
    date: 'Sept 25, 2025',
    time: '9:30 AM',
    court: 'B',
    round: 1
  },
  // ... continue with existing matches
  
  // Round 5 - Final (2 → 1 players)
  {
    id: 'final',
    player1: tournamentPlayers[0], // Rajesh Kumar (winner r4m1)
    player2: tournamentPlayers[8], // Priya Sharma (winner r4m2)
    winner: tournamentPlayers[0],
    score: '21-19, 18-21, 21-16',
    status: 'completed',
    date: 'Sept 27, 2025',
    time: '6:00 PM',
    court: 'Center',
    round: 5
  }
];

export const upcomingTournamentMatches: Match[] = [
  {
    id: 'next_r1m1',
    player1: { id: 'p17', name: 'Arjun Malhotra', company: 'Wipro', seed: 1 },
    player2: { id: 'p32', name: 'Deepa Nair', company: 'Infosys', seed: 16 },
    winner: null,
    status: 'upcoming',
    date: 'Oct 15, 2025',
    time: '9:00 AM',
    court: 'A',
    round: 1
  },
  {
    id: 'next_final',
    player1: null,
    player2: null,
    winner: null,
    status: 'upcoming',
    round: 2
  }
];

export const currentTournament: Tournament = {
  id: 'cxo_league_sept_2025',
  name: 'CXO Pickleball Championship',
  status: 'completed',
  startDate: 'Sept 25, 2025',
  endDate: 'Sept 27, 2025',
  matches: currentTournamentMatches,
  players: tournamentPlayers
};

export const upcomingTournament: Tournament = {
  id: 'cxo_league_oct_2025',
  name: 'CXO Pickleball Championship - October',
  status: 'upcoming',
  startDate: 'Oct 15, 2025',
  endDate: 'Oct 17, 2025',
  matches: upcomingTournamentMatches,
  players: []
};