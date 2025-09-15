import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, MapPin, Users, Trophy, Star, Clock, Phone, Mail, Target, Award, Zap, Heart, Crown, TrendingUp, Medal, Instagram, Linkedin, Camera, Dumbbell, UtensilsCrossed, Waves } from 'lucide-react';
import heroImage from '@/assets/hero-pickleball-corrected.jpg';
import sainaNehwalImage from '@/assets/saina-nehwal.jpg';
import TournamentBracket from '@/features/tournament/components/TournamentBracket';
import { currentTournament, upcomingTournament } from '@/data/tournament/tournamentData';

const CxoLeague = () => {
  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Dummy leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      team: "HDFC ERGO Eagles",
      company: "HDFC ERGO",
      players: ["Rajesh Kumar", "Priya Sharma", "Amit Singh"],
      matches: 8,
      wins: 7,
      losses: 1,
      points: 21,
      winRate: 87.5,
      status: "champion"
    },
    {
      rank: 2,
      team: "Tata Digital Tigers",
      company: "Tata Digital", 
      players: ["Sanjay Mehta", "Kavya Patel", "Rohit Gupta"],
      matches: 8,
      wins: 6,
      losses: 2,
      points: 18,
      winRate: 75.0,
      status: "finalist"
    },
    {
      rank: 3,
      team: "ICICI Warriors",
      company: "ICICI",
      players: ["Neha Agarwal", "Vikram Shah", "Deepa Nair"],
      matches: 8,
      wins: 5,
      losses: 3,
      points: 15,
      winRate: 62.5,
      status: "semifinalist"
    },
    {
      rank: 4,
      team: "Barclays Bulldogs",
      company: "BARCLAYS",
      players: ["James Wilson", "Sneha Reddy", "Arjun Malhotra"],
      matches: 8,
      wins: 5,
      losses: 3,
      points: 15,
      winRate: 62.5,
      status: "semifinalist"
    },
    {
      rank: 5,
      team: "Hitachi Hawks",
      company: "HITACHI",
      players: ["Ravi Krishnan", "Ananya Joshi", "Suresh Rao"],
      matches: 7,
      wins: 4,
      losses: 3,
      points: 12,
      winRate: 57.1,
      status: "active"
    },
    {
      rank: 6,
      team: "WNS Wolves",
      company: "WNS",
      players: ["Madhavi Singh", "Karan Jain", "Ritika Chopra"],
      matches: 7,
      wins: 3,
      losses: 4,
      points: 9,
      winRate: 42.9,
      status: "active"
    },
    {
      rank: 7,
      team: "Adani Aces",
      company: "Adani Airport",
      players: ["Gautam Desai", "Shruti Iyer", "Manish Tiwari"],
      matches: 6,
      wins: 2,
      losses: 4,
      points: 6,
      winRate: 33.3,
      status: "active"
    },
    {
      rank: 8,
      team: "DSK Dynamos",
      company: "DSK Legal",
      players: ["Anil Kapoor", "Meera Joshi", "Varun Khanna"],
      matches: 6,
      wins: 1,
      losses: 5,
      points: 3,
      winRate: 16.7,
      status: "active"
    }
  ];

  const recentMatches = [
    {
      date: "Sept 26, 2025",
      time: "4:30 PM",
      team1: "HDFC ERGO Eagles",
      team2: "Tata Digital Tigers",
      score: "21-19, 18-21, 21-16",
      winner: "HDFC ERGO Eagles",
      status: "completed"
    },
    {
      date: "Sept 26, 2025", 
      time: "3:00 PM",
      team1: "ICICI Warriors",
      team2: "Barclays Bulldogs",
      score: "21-15, 19-21, 21-18",
      winner: "ICICI Warriors",
      status: "completed"
    },
    {
      date: "Sept 27, 2025",
      time: "2:00 PM",
      team1: "Hitachi Hawks",
      team2: "WNS Wolves",
      score: "TBD",
      winner: "TBD",
      status: "upcoming"
    },
    {
      date: "Sept 27, 2025",
      time: "3:30 PM", 
      team1: "Adani Aces",
      team2: "DSK Dynamos",
      score: "TBD",
      winner: "TBD",
      status: "upcoming"
    }
  ];

  const getRankIcon = (rank: number, status: string) => {
    if (status === "champion") return <Crown className="h-5 w-5 text-yellow-500" />;
    if (status === "finalist") return <Medal className="h-5 w-5 text-gray-400" />;
    if (status === "semifinalist") return <Trophy className="h-5 w-5 text-amber-600" />;
    return <span className="h-5 w-5 flex items-center justify-center text-sm font-semibold">{rank}</span>;
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "champion": return <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">Champion</Badge>;
      case "finalist": return <Badge className="bg-gradient-to-r from-gray-400 to-gray-600 text-white">Finalist</Badge>;
      case "semifinalist": return <Badge className="bg-gradient-to-r from-amber-500 to-amber-700 text-white">Semi-Finalist</Badge>;
      default: return <Badge variant="outline">Active</Badge>;
    }
  };
  const eventDetails = [
    { icon: Calendar, label: 'Date', value: '27 Sept 2025' },
    { icon: MapPin, label: 'Venue', value: 'Taj Lands End, Mumbai' },
    { icon: Users, label: 'Team Size', value: '3 Players per Team' },
    { icon: Phone, label: 'Entry Fee', value: 'Call for pricing' },
    { icon: Clock, label: 'Duration', value: 'Full Day Event' },
  ];

  const highlights = [
    {
      icon: Trophy,
      title: 'Elite Competition',
      description: 'Round-robin format with live commentators and professional scoring'
    },
    {
      icon: Star,
      title: 'Saina Nehwal Experience',
      description: 'Exclusive playtime with Olympic medallist Saina Nehwal, photo opportunities, live chat session, and prize distribution ceremony'
    },
    {
      icon: Target,
      title: 'Professional Training',
      description: 'Pre-match training by AIPA-certified coaches for all skill levels'
    },
    {
      icon: Award,
      title: 'Gourmet Experience',
      description: 'Curated sundowner and premium dining at Taj Lands End'
    },
    {
      icon: Zap,
      title: 'Premium Networking',
      description: 'Meaningful connections with CXOs, MDs, and industry leaders'
    },
    {
      icon: Heart,
      title: 'Complete Package',
      description: 'Personalized t-shirts, goodie bags, exclusive memorabilia, fitness sessions, padel coaching, and spa at discounted prices'
    }
  ];

  const companies = [
    'Premier League', 'ICICI', 'HDFC ERGO', 'BARCLAYS', 'HITACHI', 
    'WNS', 'DSK Legal', 'Tata Digital', 'Adani Airport', 'Hiranandani'
  ];

  const partners = [
    'Tata CLiQ', 'UNIREC'
  ];

  const schedule = [
    { time: '8:00 AM', activity: 'Registration & Welcome Breakfast' },
    { time: '9:00 AM', activity: 'Expert Coaching Sessions & Warm-up' },
    { time: '10:30 AM', activity: 'League Matches Begin - Round Robin Format' },
    { time: '1:00 PM', activity: 'Networking Lunch Break' },
    { time: '2:30 PM', activity: 'Continuation of League Matches' },
    { time: '4:00 PM', activity: 'Semi-Finals & Finals' },
    { time: '5:30 PM', activity: 'Live Chat with Saina Nehwal (Moderated by RJ Anmol)' },
    { time: '6:30 PM', activity: 'Awards Ceremony & Prize Distribution' },
    { time: '7:00 PM', activity: 'Sundowner & Premium Dining Experience' },
    { time: '9:00 PM', activity: 'Event Conclusion' }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start lg:items-center">
            <div className="lg:col-span-2">
              <Badge className="mb-4 sm:mb-6 bg-gradient-hero text-white border-0 px-4 sm:px-6 md:px-8 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase shadow-hero backdrop-blur-sm border border-white/20">
                INDIA'S FIRST EVER
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">CXO</span>
                <br />
                <span className="text-foreground">PICKLEBALL</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">LEAGUE</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                This isn't just a tournament, it's a celebration. A one-of-a-kind experience 
                where India's top business leaders come together not just to compete, but to connect.
              </p>
              
              {/* Saina Nehwal Special Guest Feature */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-primary/20">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={sainaNehwalImage} 
                        alt="Saina Nehwal" 
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-primary shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-background bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <Medal className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">Special Guest</h3>
                      <p className="text-lg sm:text-xl font-bold text-foreground">Saina Nehwal</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">Badminton Champion & Olympic Medalist</p>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Join us for an exclusive experience with India's badminton legend - live interaction, 
                      photo opportunities, and insights from one of the greatest athletes of our time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-hero border-primary/20 w-full max-w-md mx-auto lg:mx-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-xl sm:text-2xl">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {eventDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <detail.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-semibold text-sm sm:text-base truncate">{detail.value}</p>
                    </div>
                  </div>
                ))}
                
                <Separator className="my-4 sm:my-6" />
                
                <div className="text-center space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg font-semibold">Ready to Join?</p>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Button variant="premium" className="w-full text-sm sm:text-base py-2 sm:py-3">
                      <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="truncate">grv8sports@gmail.com</span>
                    </Button>
                    <Button variant="outline" className="w-full text-sm sm:text-base py-2 sm:py-3">
                      <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="truncate">+91 9818223112</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="schedule" className="w-full">
            {/* Desktop: Grid Layout */}
            <TabsList className="hidden lg:grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="schedule" className="text-lg">Event Schedule</TabsTrigger>
              <TabsTrigger value="participants" className="text-lg">Participants</TabsTrigger>
              <TabsTrigger value="draws" className="text-lg">Leaderboard & Results</TabsTrigger>
              <TabsTrigger value="sponsors" className="text-lg">Sponsors</TabsTrigger>
              <TabsTrigger value="social" className="text-lg">Social Media</TabsTrigger>
            </TabsList>

            {/* Mobile & Tablet: Horizontal Scrollable Tabs */}
            <div className="lg:hidden mb-12">
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                  <TabsList className="inline-flex w-max min-w-full space-x-1 p-1 bg-muted/50">
                    <TabsTrigger 
                      value="schedule" 
                      className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                    >
                      <span className="hidden sm:inline">Event </span>Schedule
                    </TabsTrigger>
                    <TabsTrigger 
                      value="participants" 
                      className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                    >
                      Participants
                    </TabsTrigger>
                    <TabsTrigger 
                      value="draws" 
                      className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                    >
                      <span className="hidden sm:inline">Leaderboard & </span>Results
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sponsors" 
                      className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                    >
                      Sponsors
                    </TabsTrigger>
                    <TabsTrigger 
                      value="social" 
                      className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                    >
                      <span className="hidden sm:inline">Social </span>Media
                    </TabsTrigger>
                  </TabsList>
                </div>
                {/* Gradient fade indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              </div>
            </div>
            
            
            {/* Event Schedule Tab */}
            <TabsContent value="schedule" className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Event <span className="text-cyan-400">Schedule</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  A full day of competition, networking, and celebration
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-slate-900/50 rounded-2xl p-8 space-y-6 border border-slate-700/50">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-6 p-6 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <Clock className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-white mb-1">
                          {item.time}
                        </div>
                        <div className="text-lg text-gray-300">
                          {item.activity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Visuals */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <Card className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Pickleball Court</h3>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Padel Court</h3>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Billiards Table</h3>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                      <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Fitness Session</h3>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                      <UtensilsCrossed className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Dining Area</h3>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero">
                      <Waves className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Spa</h3>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Participants Tab */}
            <TabsContent value="participants" className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Participating <span className="bg-gradient-hero bg-clip-text text-transparent">Companies</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  India's leading organizations competing for glory
                </p>
              </div>

              <div className="grid gap-8">
                <Card className="shadow-card border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Confirmed Teams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {companies.map((company, index) => (
                        <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                          <CardContent className="p-6 text-center">
                            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero text-white text-xl font-bold">
                              {company.charAt(0)}
                            </div>
                            <h3 className="font-semibold text-sm">{company}</h3>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Team Leaderboard */}
                <Card className="shadow-card border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Team Standings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboardData.slice(0, 5).map((team, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-hero text-white font-semibold">
                              {team.rank}
                            </div>
                            <div>
                              <p className="font-semibold">{team.team}</p>
                              <p className="text-sm text-muted-foreground">{team.company}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">{team.points} pts</p>
                            <p className="text-sm text-muted-foreground">{team.winRate}% win rate</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Leaderboard & Results Tab */}
            <TabsContent value="draws" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Leaderboard & <span className="text-cyan-400">Results</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Live standings and match results from the CXO Pickleball League
                </p>
              </div>

              <Tabs defaultValue="leaderboard" className="w-full">
                {/* Desktop: Grid Layout */}
                <TabsList className="hidden sm:grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="leaderboard" className="text-lg">Tournament Leaderboard</TabsTrigger>
                  <TabsTrigger value="results" className="text-lg">Match Results</TabsTrigger>
                </TabsList>

                {/* Mobile: Horizontal Scrollable Tabs */}
                <div className="sm:hidden mb-8">
                  <div className="relative">
                    <div className="overflow-x-auto scrollbar-hide">
                      <TabsList className="inline-flex w-max min-w-full space-x-1 p-1 bg-muted/50">
                        <TabsTrigger 
                          value="leaderboard" 
                          className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                        >
                          <span className="hidden xs:inline">Tournament </span>Leaderboard
                        </TabsTrigger>
                        <TabsTrigger 
                          value="results" 
                          className="whitespace-nowrap px-4 py-2 text-sm font-medium min-w-fit"
                        >
                          Match Results
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    {/* Gradient fade indicators */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Tournament Leaderboard Sub-tab */}
                <TabsContent value="leaderboard" className="space-y-6">
                  <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">Current Standings</h3>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1">Live</Badge>
                    </div>
                    
                    <div className="overflow-x-auto scrollbar-hide">
                      <Table className="min-w-[800px]">
                        <TableHeader>
                          <TableRow className="border-slate-700 hover:bg-slate-800/50">
                            <TableHead className="text-slate-300 w-16">Rank</TableHead>
                            <TableHead className="text-slate-300 min-w-[200px]">Team</TableHead>
                            <TableHead className="text-slate-300 min-w-[120px]">Company</TableHead>
                            <TableHead className="text-slate-300 text-center w-20">Matches</TableHead>
                            <TableHead className="text-slate-300 text-center w-16">Wins</TableHead>
                            <TableHead className="text-slate-300 text-center w-20">Losses</TableHead>
                            <TableHead className="text-slate-300 text-center w-20">Points</TableHead>
                            <TableHead className="text-slate-300 text-center w-20">Win %</TableHead>
                            <TableHead className="text-slate-300 text-center w-24">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {leaderboardData.map((team, index) => (
                            <TableRow key={index} className="border-slate-700 hover:bg-slate-800/30">
                              <TableCell className="font-medium text-white">
                                <div className="flex items-center justify-center">
                                  {getRankIcon(team.rank, team.status)}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <p className="font-semibold text-white">{team.team}</p>
                                  <p className="text-sm text-slate-400">{team.players.join(', ')}</p>
                                </div>
                              </TableCell>
                              <TableCell className="text-white font-medium">{team.company}</TableCell>
                              <TableCell className="text-center text-white">{team.matches}</TableCell>
                              <TableCell className="text-center">
                                <span className="text-green-400 font-semibold">{team.wins}</span>
                              </TableCell>
                              <TableCell className="text-center">
                                <span className="text-red-400 font-semibold">{team.losses}</span>
                              </TableCell>
                              <TableCell className="text-center">
                                <span className="text-cyan-400 font-bold text-lg">{team.points}</span>
                              </TableCell>
                              <TableCell className="text-center">
                                <span className="text-slate-300">{team.winRate}%</span>
                              </TableCell>
                              <TableCell className="text-center">
                                {getStatusBadge(team.status)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>

                {/* Match Results Sub-tab */}
                <TabsContent value="results" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2">
                      Match <span className="text-cyan-400">Results</span>
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Recent and upcoming matches in the tournament
                    </p>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                    <h4 className="text-2xl font-bold text-white mb-6">Recent & Upcoming Matches</h4>
                    
                    <div className="space-y-4">
                      {recentMatches.map((match, index) => (
                        <div key={index} className={`p-6 rounded-xl border transition-all duration-300 ${
                          match.status === 'completed' 
                            ? 'bg-slate-800/50 border-slate-600/50 hover:bg-slate-800/70' 
                            : 'bg-purple-900/30 border-purple-600/50 hover:bg-purple-900/50'
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className={
                                match.status === 'completed' 
                                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' 
                                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                              }>
                                {match.status === 'completed' ? 'Completed' : 'Upcoming'}
                              </Badge>
                              <span className="text-slate-400">{match.date} • {match.time}</span>
                            </div>
                            <div className="text-right">
                              {match.status === 'completed' ? (
                                <div>
                                  <div className="text-xl font-bold text-white mb-1">{match.score}</div>
                                  <div className="text-sm text-green-400">Winner: {match.winner}</div>
                                </div>
                              ) : (
                                <div>
                                  <div className="text-lg font-semibold text-pink-400 mb-1">Match Scheduled</div>
                                  <div className="text-sm text-slate-400">Court TBD</div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-4 flex items-center justify-center">
                            <div className="text-lg font-semibold text-white">
                              <span className={match.status === 'completed' && match.winner === match.team1 ? 'text-white' : 'text-slate-400'}>
                                {match.team1}
                              </span>
                              <span className="mx-4 text-slate-500">vs</span>
                              <span className={match.status === 'completed' && match.winner === match.team2 ? 'text-white' : 'text-slate-400'}>
                                {match.team2}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            {/* Sponsors Tab */}
            <TabsContent value="sponsors" className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Sponsors & <span className="bg-gradient-hero bg-clip-text text-transparent">Partners</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Powering excellence together
                </p>
              </div>

              <div className="grid gap-8">
                <Card className="shadow-card border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Title Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {partners.map((partner, index) => (
                        <Card key={index} className="group hover:shadow-card transition-all duration-300">
                          <CardContent className="p-8 text-center">
                            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-hero text-white text-2xl font-bold">
                              {partner.charAt(0)}
                            </div>
                            <h3 className="text-xl font-semibold">{partner}</h3>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Gifting Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {['Nike', 'Adidas', 'Puma', 'Under Armour', 'Wilson', 'Head', 'Babolat', 'Yonex'].map((brand, index) => (
                        <Card key={index} className="group hover:shadow-card transition-all duration-300">
                          <CardContent className="p-4 text-center">
                            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero text-white font-bold">
                              {brand.charAt(0)}
                            </div>
                            <p className="text-sm font-semibold">{brand}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Social Media Tab */}
            <TabsContent value="social" className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Social <span className="bg-gradient-hero bg-clip-text text-transparent">Media</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Stay connected and share the excitement
                </p>
              </div>

              <div className="grid gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Instagram Section */}
                  <Card className="shadow-card border-primary/10">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Instagram className="h-6 w-6 text-pink-600" />
                        <CardTitle className="text-2xl">Instagram</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div 
                          className="elfsight-app-587e2527-9609-477e-aa69-7fdaeb39618d w-full min-h-[400px]" 
                          data-elfsight-app-lazy
                        />
                        <Button className="w-full" variant="outline" asChild>
                          <a href="https://www.instagram.com/grv8sports/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="mr-2 h-4 w-4" />
                            Follow @grv8sports
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* LinkedIn Section */}
                  <Card className="shadow-card border-primary/10">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-6 w-6 text-blue-600" />
                        <CardTitle className="text-2xl">LinkedIn</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div 
                          className="elfsight-app-73e020a2-a84e-4316-af29-4451ee709599 w-full min-h-[400px]" 
                          data-elfsight-app-lazy
                        />
                        <Button className="w-full" variant="outline" asChild>
                          <a href="https://www.linkedin.com/company/grv8sports/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            Connect on LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Feed Placeholder */}
                <Card className="shadow-card border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl">Live Social Feed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20">
                          <div className="text-center">
                            <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="text-xs text-muted-foreground">Event Photo #{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Live photos and videos from the event will appear here during the tournament
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make History?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Be part of India's first-ever CXO Pickleball League. Limited teams, unlimited opportunities.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us Now</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                grv8sports@gmail.com
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                +91 9818223112
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CxoLeague;