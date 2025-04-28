
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { EventProps } from '@/components/EventCard';
import { Badge } from '@/components/ui/badge';

// Mock data
const myEvents: (EventProps & { status: string; attendees: number })[] = [
  {
    id: '101',
    title: 'Web Development Workshop',
    date: 'June 5, 2025',
    location: 'Online',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=150',
    status: 'Upcoming',
    attendees: 45
  },
  {
    id: '102',
    title: 'Local Business Networking',
    date: 'June 15, 2025',
    location: 'Seattle, WA',
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&h=150',
    status: 'Upcoming',
    attendees: 32
  },
  {
    id: '103',
    title: 'Photography Basics Course',
    date: 'April 10, 2025',
    location: 'Portland, OR',
    category: 'Arts',
    imageUrl: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=300&h=150',
    status: 'Past',
    attendees: 18
  }
];

const registeredEvents: (EventProps & { status: string })[] = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=300&h=150',
    status: 'Upcoming'
  },
  {
    id: '4',
    title: 'Art Exhibition: Modern Masters',
    date: 'August 12, 2025',
    location: 'Chicago, IL',
    category: 'Arts',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=300&h=150',
    status: 'Upcoming'
  },
  {
    id: '201',
    title: 'Digital Marketing Summit',
    date: 'March 25, 2025',
    location: 'New York, NY',
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=300&h=150',
    status: 'Past'
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('my-events');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-2">My Dashboard</h1>
            <p className="text-gray-600">Manage your events and registrations</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button asChild className="bg-event-primary hover:bg-event-primary/90">
              <Link to="/create-event">Create New Event</Link>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="my-events" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="my-events">My Events</TabsTrigger>
            <TabsTrigger value="registered">Registered Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-events">
            {myEvents.filter(event => event.status === 'Upcoming').length > 0 ? (
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Upcoming Events</h2>
                <div className="space-y-4">
                  {myEvents
                    .filter(event => event.status === 'Upcoming')
                    .map((event) => (
                      <div key={event.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full sm:w-48 h-32 object-cover rounded-md mb-4 sm:mb-0"
                        />
                        <div className="flex-grow sm:ml-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="font-heading text-lg font-medium">{event.title}</h3>
                            <Badge className="w-fit mt-1 sm:mt-0">{event.category}</Badge>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{event.date} • {event.location}</p>
                          <div className="mt-2 text-sm">
                            <span className="text-event-secondary font-medium">{event.attendees} attendees</span>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link to={`/event/${event.id}`}>View</Link>
                            </Button>
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : null}
            
            {myEvents.filter(event => event.status === 'Past').length > 0 ? (
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4">Past Events</h2>
                <div className="space-y-4">
                  {myEvents
                    .filter(event => event.status === 'Past')
                    .map((event) => (
                      <div key={event.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full sm:w-48 h-32 object-cover rounded-md mb-4 sm:mb-0 opacity-70"
                        />
                        <div className="flex-grow sm:ml-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="font-heading text-lg font-medium text-gray-700">{event.title}</h3>
                            <Badge variant="outline" className="w-fit mt-1 sm:mt-0">{event.category}</Badge>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{event.date} • {event.location}</p>
                          <div className="mt-2 text-sm">
                            <span className="text-gray-500 font-medium">{event.attendees} attendees</span>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link to={`/event/${event.id}`}>View</Link>
                            </Button>
                            <Button size="sm" variant="outline">Analytics</Button>
                            <Button size="sm" variant="outline">Duplicate</Button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : null}
            
            {myEvents.length === 0 && (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-medium mb-2">You haven't created any events yet</h3>
                <p className="text-gray-600 mb-6">Get started by creating your first event</p>
                <Button asChild className="bg-event-primary hover:bg-event-primary/90">
                  <Link to="/create-event">Create Event</Link>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="registered">
            {registeredEvents.filter(event => event.status === 'Upcoming').length > 0 ? (
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Upcoming Registrations</h2>
                <div className="space-y-4">
                  {registeredEvents
                    .filter(event => event.status === 'Upcoming')
                    .map((event) => (
                      <div key={event.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full sm:w-48 h-32 object-cover rounded-md mb-4 sm:mb-0"
                        />
                        <div className="flex-grow sm:ml-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="font-heading text-lg font-medium">{event.title}</h3>
                            <Badge className="w-fit mt-1 sm:mt-0">{event.category}</Badge>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{event.date} • {event.location}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link to={`/event/${event.id}`}>View Details</Link>
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                              Cancel Registration
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : null}
            
            {registeredEvents.filter(event => event.status === 'Past').length > 0 ? (
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4">Past Registrations</h2>
                <div className="space-y-4">
                  {registeredEvents
                    .filter(event => event.status === 'Past')
                    .map((event) => (
                      <div key={event.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title}
                          className="w-full sm:w-48 h-32 object-cover rounded-md mb-4 sm:mb-0 opacity-70"
                        />
                        <div className="flex-grow sm:ml-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="font-heading text-lg font-medium text-gray-700">{event.title}</h3>
                            <Badge variant="outline" className="w-fit mt-1 sm:mt-0">{event.category}</Badge>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{event.date} • {event.location}</p>
                          <div className="mt-4">
                            <Button size="sm" variant="outline" asChild>
                              <Link to={`/event/${event.id}`}>View Event</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : null}
            
            {registeredEvents.length === 0 && (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-medium mb-2">You haven't registered for any events</h3>
                <p className="text-gray-600 mb-6">Explore events and register for ones that interest you</p>
                <Button asChild className="bg-event-primary hover:bg-event-primary/90">
                  <Link to="/">Find Events</Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
