import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

interface Match {
  id: number;
  player1: string;
  player2: string;
  scorecard: string;
  status: string;
  date: string;
  time: string;
  notes?: string;
  created_at: string;
}

const Index = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/matches/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMatches(data);
    } catch (error) {
      console.error("Error fetching matches:", error);
      setError("Failed to load matches");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    // Convert 24-hour format to 12-hour format
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading matches...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-destructive">{error}</p>
            <Button onClick={fetchMatches} className="mt-4">Retry</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Sports League Manager</h1>
          <p className="text-xl text-muted-foreground mb-8">Track matches, scores, and tournament progress</p>
          
          <Link to="/match-entry">
            <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-medium px-8 py-3 text-lg shadow-elevated">
              Add New Match
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elevated border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                {matches.length > 0 ? 'Recent & Upcoming Matches' : 'No Matches Yet'}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {matches.length > 0 ? 'Latest match results and scheduled games' : 'Start by adding your first match'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {matches.length > 0 ? (
                <div className="space-y-4">
                  {matches.map((match) => (
                    <div 
                      key={match.id} 
                      className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border hover:bg-accent transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            match.status === 'completed' ? 'bg-success text-success-foreground' :
                            match.status === 'in-progress' ? 'bg-warning text-warning-foreground' :
                            match.status === 'cancelled' ? 'bg-destructive text-destructive-foreground' :
                            'bg-primary text-primary-foreground'
                          }`}>
                            {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                          </div>
                          <span className="text-muted-foreground">
                            {formatDate(match.date)} • {formatTime(match.time)}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="font-semibold text-foreground">
                            {match.player1} <span className="text-muted-foreground">vs</span> {match.player2}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-foreground">{match.scorecard}</div>
                        {match.status === 'completed' && (
                          <div className="text-success font-medium">
                            Winner: {match.scorecard.includes('21') ? 
                              (match.scorecard.split(',')[0].includes('21') ? match.player1 : match.player2) : 
                              'TBD'
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">No matches have been created yet.</p>
                  <Link to="/match-entry">
                    <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground">
                      Create Your First Match
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
