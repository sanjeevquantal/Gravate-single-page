import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trophy, Calendar, MapPin, Clock } from 'lucide-react';
import { Match, Player } from '@/types/tournament';

interface TournamentBracketProps {
  matches: Match[];
  tournamentName: string;
  status: 'upcoming' | 'active' | 'completed';
}

const MatchCard = ({ match, onClick }: { match: Match; onClick: () => void }) => {
  const getPlayerDisplay = (player: Player | null, isWinner: boolean) => {
    if (!player) return <div className="text-muted-foreground italic">TBD</div>;
    
    return (
      <div className={`flex flex-col ${isWinner ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
        <span className="text-sm truncate">{player.name}</span>
        <span className="text-xs text-muted-foreground truncate">{player.company}</span>
      </div>
    );
  };

  return (
    <Card className="w-48 cursor-pointer hover:shadow-card transition-all duration-300" onClick={onClick}>
      <CardContent className="p-3">
        <div className="space-y-2">
          <Badge className={match.status === 'completed' ? 'bg-primary' : 'bg-secondary'}>
            {match.status === 'completed' ? 'Completed' : 'Upcoming'}
          </Badge>
          
          <div className="space-y-1">
            {getPlayerDisplay(match.player1, match.winner?.id === match.player1?.id)}
            <div className="text-center text-xs text-muted-foreground">vs</div>
            {getPlayerDisplay(match.player2, match.winner?.id === match.player2?.id)}
          </div>
          
          {match.score && (
            <div className="text-center text-xs font-medium text-primary">{match.score}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TournamentBracket = ({ matches, tournamentName, status }: TournamentBracketProps) => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const rounds = [...new Set(matches.map(match => match.round))].sort((a, b) => a - b);

  const getRoundName = (round: number) => {
    const totalRounds = Math.max(...matches.map(m => m.round));
    const roundsFromEnd = totalRounds - round + 1;
    
    switch (roundsFromEnd) {
      case 1: return 'Final';
      case 2: return 'Semifinals';
      case 3: return 'Quarterfinals';
      case 4: return 'Round of 16';
      case 5: return 'Round of 32';
      default: return `Round ${round}`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center gap-3">
          <Trophy className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">{tournamentName}</h2>
        </div>
        <Badge className={status === 'completed' ? 'bg-primary' : 'bg-secondary'}>
          {status === 'completed' ? 'Tournament Completed' : 'Upcoming Tournament'}
        </Badge>
      </div>
      
      <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg p-6 overflow-x-auto">
        <div className="flex gap-8 items-center justify-center min-w-fit">
          {rounds.map((roundNumber, index) => (
            <div key={roundNumber} className="flex items-center">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="font-bold text-lg">Round {roundNumber}</h3>
                <div className="space-y-4">
                  {matches
                    .filter(match => match.round === roundNumber)
                    .map(match => (
                      <MatchCard 
                        key={match.id} 
                        match={match} 
                        onClick={() => setSelectedMatch(match)}
                      />
                    ))}
                </div>
              </div>
              {index < rounds.length - 1 && (
                <div className="w-8 h-0.5 bg-muted-foreground/30 mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedMatch && (
        <Dialog open={!!selectedMatch} onOpenChange={() => setSelectedMatch(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Match Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="font-semibold">{selectedMatch.player1?.name || 'TBD'}</div>
                <div className="text-muted-foreground">vs</div>
                <div className="font-semibold">{selectedMatch.player2?.name || 'TBD'}</div>
              </div>
              {selectedMatch.score && (
                <div className="text-center text-lg font-bold">{selectedMatch.score}</div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TournamentBracket;