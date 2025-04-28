
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { EventProps } from '@/components/EventCard';

// Mock data
const mockEvents: Record<string, EventProps & { 
  description: string;
  startTime: string;
  endTime: string;
  address: string;
  organizer: string;
  attendees: number;
}> = {
  '1': {
    id: '1',
    title: 'Tech Conference 2025',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&h=400',
    description: 'Join us for the biggest tech conference of the year! Network with industry leaders, attend workshops, and learn about the latest technologies shaping our future. This two-day event features keynote speakers, panel discussions, and hands-on demonstrations.',
    startTime: '9:00 AM',
    endTime: '6:00 PM',
    address: '123 Tech Way, San Francisco, CA 94105',
    organizer: 'TechConf Inc.',
    attendees: 1250
  },
  '2': {
    id: '2',
    title: 'Annual Music Festival',
    date: 'June 10, 2025',
    location: 'Austin, TX',
    category: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&h=400',
    description: 'A three-day music extravaganza featuring top artists across multiple genres. Experience live performances, food stalls, and art installations in the heart of Austin\'s music scene.',
    startTime: '12:00 PM',
    endTime: '11:00 PM',
    address: 'Zilker Park, Austin, TX 78704',
    organizer: 'Austin Music Productions',
    attendees: 5000
  },
  '3': {
    id: '3',
    title: 'Business Leadership Summit',
    date: 'July 5, 2025',
    location: 'New York, NY',
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=400',
    description: 'Elevate your leadership skills at this premier business summit. Learn from Fortune 500 executives, participate in strategic workshops, and expand your professional network.',
    startTime: '8:30 AM',
    endTime: '5:30 PM',
    address: '500 Broadway Ave, New York, NY 10012',
    organizer: 'Global Business Forum',
    attendees: 750
  },
  '4': {
    id: '4',
    title: 'Art Exhibition: Modern Masters',
    date: 'August 12, 2025',
    location: 'Chicago, IL',
    category: 'Arts',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&h=400',
    description: 'Experience breathtaking works from contemporary artists pushing the boundaries of modern art. This exhibition features paintings, sculptures, and multimedia installations from around the world.',
    startTime: '10:00 AM',
    endTime: '8:00 PM',
    address: 'Chicago Art Institute, 111 S Michigan Ave, Chicago, IL 60603',
    organizer: 'Contemporary Arts Foundation',
    attendees: 2000
  },
  '5': {
    id: '5',
    title: 'Marathon Championship',
    date: 'September 20, 2025',
    location: 'Boston, MA',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&h=400',
    description: 'Challenge yourself in one of the most prestigious marathons in the country. This 26.2-mile course takes runners through historic Boston with cheering crowds supporting you every step of the way.',
    startTime: '7:00 AM',
    endTime: '3:00 PM',
    address: 'Boston Common, Boston, MA 02116',
    organizer: 'Boston Athletic Association',
    attendees: 30000
  },
  '6': {
    id: '6',
    title: 'Food & Wine Festival',
    date: 'October 8, 2025',
    location: 'Napa Valley, CA',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&h=400',
    description: 'Indulge in gourmet cuisine and world-class wines at this annual culinary celebration. Meet celebrity chefs, attend cooking demonstrations, and sample delicacies from top restaurants.',
    startTime: '11:00 AM',
    endTime: '9:00 PM',
    address: 'Napa Valley Expo, 575 3rd St, Napa, CA 94559',
    organizer: 'Napa Valley Food & Wine Association',
    attendees: 3500
  }
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = id ? mockEvents[id] : null;
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Event not found</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <Badge className="absolute top-4 left-4 bg-event-accent text-white text-lg py-1.5 px-3">
            {event.category}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {event.title}
            </h1>
            
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h2 className="font-heading text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {event.description}
              </p>
              
              <div className="mt-6">
                <h3 className="font-heading text-lg font-medium mb-2">Organizer</h3>
                <p className="text-gray-700">{event.organizer}</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white shadow-sm rounded-lg p-6 mb-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-event-primary">Free</span>
                <Badge variant="outline" className="text-gray-500 border-gray-300">
                  {event.attendees} attendees
                </Badge>
              </div>
              
              <Button className="w-full mb-4 bg-event-primary hover:bg-event-primary/90 text-lg py-6">
                Register Now
              </Button>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-event-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-gray-600 text-sm">{event.startTime} - {event.endTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-event-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                    <p className="text-gray-600 text-sm">{event.address}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default EventDetails;
