import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { RealTimeScoring } from "@/components/RealTimeScoring";
import { Match } from "@/services/api";

const matchFormSchema = z.object({
  player1: z.string().min(2, "Player 1 name must be at least 2 characters"),
  player2: z.string().min(2, "Player 2 name must be at least 2 characters"),
  scorecard: z.string().min(1, "Scorecard is required"),
  status: z.enum(["scheduled", "in-progress", "completed", "cancelled"], {
    required_error: "Please select a match status",
  }),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
});

type MatchFormValues = z.infer<typeof matchFormSchema>;

const MatchEntry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdMatch, setCreatedMatch] = useState<Match | null>(null);
  const { toast } = useToast();

  const form = useForm<MatchFormValues>({
    resolver: zodResolver(matchFormSchema),
    defaultValues: {
      player1: "",
      player2: "",
      scorecard: "",
      status: "scheduled",
      date: "",
      time: "",
      notes: "",
    },
  });

  const onSubmit = async (data: MatchFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Call the FastAPI backend
      const response = await fetch('http://localhost:8000/api/v1/matches/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setCreatedMatch(result);
      
      toast({
        title: "Match Created Successfully!",
        description: `Match between ${data.player1} and ${data.player2} has been scheduled.`,
      });
      
      // Only reset form if match is not in progress
      if (data.status !== "in-progress") {
        form.reset();
      }
    } catch (error) {
      console.error("Error creating match:", error);
      toast({
        title: "Error",
        description: "Failed to create match. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show real-time scoring if match is in progress
  if (createdMatch && createdMatch.status === "in-progress") {
    return (
      <div className="min-h-screen bg-gradient-bg">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Live Match</h1>
              <p className="text-muted-foreground text-lg">
                {createdMatch.player1} vs {createdMatch.player2}
              </p>
            </div>

            <RealTimeScoring 
              match={createdMatch} 
              onMatchUpdate={setCreatedMatch}
            />

            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setCreatedMatch(null);
                  form.reset();
                }}
              >
                Create New Match
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Add New Match</h1>
            <p className="text-muted-foreground text-lg">Schedule a new match between players</p>
          </div>

          <Card className="shadow-elevated border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold text-foreground">Match Details</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill in the information below to schedule a new match
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="player1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Player 1</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter player 1 name" 
                              {...field} 
                              className="border-border focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="player2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Player 2</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter player 2 name" 
                              {...field} 
                              className="border-border focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="scorecard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Scorecard</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., 21-19, 18-21, 21-16" 
                            {...field} 
                            className="border-border focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Match Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border focus:ring-primary">
                              <SelectValue placeholder="Select match status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Date</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field} 
                              className="border-border focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">Time</FormLabel>
                          <FormControl>
                            <Input 
                              type="time" 
                              {...field} 
                              className="border-border focus:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Additional notes about the match..." 
                            className="min-h-[80px] border-border focus:ring-primary resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-medium py-3 text-lg shadow-elevated transition-all duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating Match..." : "Create Match"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MatchEntry;