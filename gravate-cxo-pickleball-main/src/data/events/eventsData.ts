import { Event } from '@/types/events';

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'CXO Pickleball League',
    subtitle: 'India\'s First Ever CXO Sports League',
    date: '27 Sept 2025',
    venue: 'Taj Lands End, Mumbai',
    price: 'Call for enquiry',
    participants: '9+ Companies',
    status: 'Registration Open',
    featured: true,
    highlights: [
      'Olympic medallist Saina Nehwal appearance',
      'Premium networking with top CXOs',
      'Professional coaching sessions',
      'Gourmet dining experience'
    ]
  }
];

export const pastEvents = [
  {
    title: 'Corporate Tennis Championship',
    date: 'March 2024',
    venue: 'Delhi Lawn Tennis Club',
    participants: '15 Companies',
    status: 'Completed'
  },
  {
    title: 'Executive Golf Tournament',
    date: 'January 2024', 
    venue: 'DLF Golf Club, Gurgaon',
    participants: '20 Companies',
    status: 'Completed'
  },
  {
    title: 'Leadership Cricket League',
    date: 'November 2023',
    venue: 'MCA Club, Mumbai',
    participants: '12 Companies',
    status: 'Completed'
  }
];

export const eventTypes = [
  {
    title: 'Tournament Style',
    description: 'Competitive leagues with professional format and scoring'
  },
  {
    title: 'Celebrity Appearances',
    description: 'Sports legends and celebrities to inspire and engage'
  },
  {
    title: 'Skill Development',
    description: 'Professional coaching and training sessions'
  },
  {
    title: 'Networking Focus',
    description: 'Designed for meaningful business connections'
  }
];