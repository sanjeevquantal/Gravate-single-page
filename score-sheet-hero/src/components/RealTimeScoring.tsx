import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ApiService, Match, ScoreUpdate } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

interface RealTimeScoringProps {
  match: Match;
  onMatchUpdate: (updatedMatch: Match) => void;
}

export const RealTimeScoring = ({ match, onMatchUpdate }: RealTimeScoringProps) => {
  const [currentScore, setCurrentScore] = useState({
    player1: match.current_score?.player1 || 0,
    player2: match.current_score?.player2 || 0,
    setNumber: 1
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const connectWebSocket = () => {
      try {
        const ws = new WebSocket(`ws://localhost:8000/ws/${match.id}`);
        wsRef.current = ws;

        ws.onopen = () => {
          console.log('WebSocket connected for match', match.id);
        };

        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.type === 'score_update' && data.match_id === match.id) {
            // Update local state with real-time data
            setCurrentScore(data.data);
          }
        };

        ws.onclose = () => {
          console.log('WebSocket disconnected, attempting to reconnect...');
          setTimeout(connectWebSocket, 3000);
        };

        ws.onerror = (error) => {
          console.error('WebSocket error:', error);
        };
      } catch (error) {
        console.error('Failed to connect WebSocket:', error);
      }
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [match.id]);

  const updateScore = async (player1Score: number, player2Score: number) => {
    if (isUpdating) return;

    // Validate scores
    if (player1Score < 0 || player2Score < 0) {
      toast({
        title: "Invalid Score",
        description: "Scores cannot be negative.",
        variant: "destructive",
      });
      return;
    }

    setIsUpdating(true);
    const newScore = {
      ...currentScore,
      player1: player1Score,
      player2: player2Score
    };

    try {
      const scoreUpdate: ScoreUpdate = {
        player1_score: player1Score,
        player2_score: player2Score,
        set_number: newScore.setNumber
      };

      const updatedMatch = await ApiService.updateMatchScore(match.id, scoreUpdate);
      setCurrentScore(newScore);
      onMatchUpdate(updatedMatch);

      // Send update via WebSocket
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify(newScore));
      }

      toast({
        title: "Score Updated",
        description: `Score updated to ${player1Score}-${player2Score}`,
      });
    } catch (error) {
      console.error('Error updating score:', error);
      toast({
        title: "Error",
        description: "Failed to update score. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const completeMatch = async () => {
    if (isUpdating) return;

    setIsUpdating(true);
    try {
      const updatedMatch = await ApiService.completeMatch(match.id);
      onMatchUpdate(updatedMatch);
      toast({
        title: "Match Completed",
        description: "The match has been marked as completed.",
      });
    } catch (error) {
      console.error('Error completing match:', error);
      toast({
        title: "Error",
        description: "Failed to complete match. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const completedSets = match.current_score?.sets || [];
  const isSetComplete = (currentScore.player1 >= 21 || currentScore.player2 >= 21) && 
                       Math.abs(currentScore.player1 - currentScore.player2) >= 2;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Live Scoring</CardTitle>
        <CardDescription>
          Real-time score updates for {match.player1} vs {match.player2}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Completed Sets Display */}
        {completedSets.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Completed Sets</h3>
            <div className="flex flex-wrap gap-2">
              {completedSets.map((set, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  Set {set.set_number}: {set.player1}-{set.player2}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Current Set Score */}
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">
            Current Set {currentScore.setNumber}
            {isSetComplete && <span className="text-green-600 ml-2">(Set Complete!)</span>}
          </h3>
          
          <div className="flex items-center justify-center space-x-8">
            {/* Player 1 */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">{match.player1}</div>
              <Input
                type="number"
                min="0"
                value={currentScore.player1}
                onChange={(e) => setCurrentScore(prev => ({ ...prev, player1: parseInt(e.target.value) || 0 }))}
                className="text-center text-2xl font-bold w-20"
                disabled={isUpdating}
              />
            </div>

            {/* VS */}
            <div className="text-2xl font-bold text-muted-foreground">VS</div>

            {/* Player 2 */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">{match.player2}</div>
              <Input
                type="number"
                min="0"
                value={currentScore.player2}
                onChange={(e) => setCurrentScore(prev => ({ ...prev, player2: parseInt(e.target.value) || 0 }))}
                className="text-center text-2xl font-bold w-20"
                disabled={isUpdating}
              />
            </div>
          </div>

          {/* Update Score Button */}
          <div className="mt-4">
            <Button
              onClick={() => updateScore(currentScore.player1, currentScore.player2)}
              disabled={isUpdating}
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              {isUpdating ? "Updating..." : "Update Score"}
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button
            onClick={completeMatch}
            disabled={isUpdating}
            variant="destructive"
            className="px-8"
          >
            Complete Match
          </Button>
        </div>

        {/* Connection Status */}
        <div className="text-center">
          <div className={`inline-flex items-center space-x-2 text-sm ${
            wsRef.current?.readyState === WebSocket.OPEN ? 'text-green-600' : 'text-red-600'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              wsRef.current?.readyState === WebSocket.OPEN ? 'bg-green-600' : 'bg-red-600'
            }`} />
            <span>
              {wsRef.current?.readyState === WebSocket.OPEN ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
