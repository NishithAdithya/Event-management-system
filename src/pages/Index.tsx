
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard, { EventProps } from '@/components/EventCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data
const categories = ['Business', 'Technology', 'Music', 'Arts', 'Sports', 'Food'];

const mockEvents: EventProps[] = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&h=300'
  },
  {
    id: '2',
    title: 'Annual Music Festival',
    date: 'June 10, 2025',
    location: 'Austin, TX',
    category: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=500&h=300'
  },
  {
    id: '3',
    title: 'Business Leadership Summit',
    date: 'July 5, 2025',
    location: 'New York, NY',
    category: 'Business',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&h=300'
  },
  {
    id: '4',
    title: 'Art Exhibition: Modern Masters',
    date: 'August 12, 2025',
    location: 'Chicago, IL',
    category: 'Arts',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=500&h=300'
  },
  {
    id: '5',
    title: 'Marathon Championship',
    date: 'September 20, 2025',
    location: 'Boston, MA',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=500&h=300'
  },
  {
    id: '6',
    title: 'Food & Wine Festival',
    date: 'October 8, 2025',
    location: 'Napa Valley, CA',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&h=300'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    filterEvents(category, searchQuery);
  };

  const handleSearch = () => {
    filterEvents(selectedCategory, searchQuery);
  };

  const filterEvents = (category: string, query: string) => {
    let filtered = mockEvents;
    
    if (category !== 'all') {
      filtered = filtered.filter(event => event.category === category);
    }
    
    if (query.trim() !== '') {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(lowercaseQuery) || 
        event.location.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    setFilteredEvents(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-gradient-to-r from-event-primary to-event-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Unforgettable Events
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Find and create amazing experiences in your community and beyond.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/events" className="text-lg px-8">
                Explore Events
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-event-primary" asChild>
              <Link to="/create-event" className="text-lg px-8">
                Create Event
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured events section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-semibold mb-8 text-center">
            Featured Events
          </h2>
          
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              onSearch={handleSearch} 
            />
          </div>
          
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-gray-500">No events found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setFilteredEvents(mockEvents);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/events">
                View All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-semibold mb-12 text-center">
            How EventHub Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-event-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">Discover Events</h3>
              <p className="text-gray-600">
                Browse through our curated list of local and online events that match your interests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-event-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">Register & Attend</h3>
              <p className="text-gray-600">
                Secure your spot by registering for events and get all the details you need to attend.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-event-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">Create & Host</h3>
              <p className="text-gray-600">
                Have an idea? Create and manage your own events with our powerful tools.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-event-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold mb-4">
            Ready to Create Your Own Event?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our platform makes it easy to plan, promote, and manage events of any size.
          </p>
          <Button size="lg" className="bg-white text-event-accent hover:bg-gray-100" asChild>
            <Link to="/create-event" className="text-lg px-8">
              Get Started
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
