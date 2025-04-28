
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar } from 'lucide-react';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    category: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    address: '',
    description: '',
    organizerName: '',
    organizerEmail: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const categories = ['Business', 'Technology', 'Music', 'Arts', 'Sports', 'Food'];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setEventData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Event data submitted:', eventData);
      toast.success('Event created successfully!', {
        description: 'Your event has been created and is now live.',
      });
      setIsSubmitting(false);
      // In a real application, you might redirect to the event page here
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl font-bold mb-2">Create an Event</h1>
          <p className="text-gray-600 mb-8">Fill out the form below to create and publish your event.</p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-heading text-xl font-semibold mb-6">Event Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={eventData.title}
                    onChange={handleChange}
                    placeholder="Give your event a catchy title"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={eventData.category} 
                    onValueChange={(value) => handleSelectChange('category', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <div className="relative">
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={eventData.date}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="startTime">Start Time</Label>
                      <Input
                        id="startTime"
                        name="startTime"
                        type="time"
                        value={eventData.startTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="endTime">End Time</Label>
                      <Input
                        id="endTime"
                        name="endTime"
                        type="time"
                        value={eventData.endTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={eventData.address}
                    onChange={handleChange}
                    placeholder="Full venue address"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="imageUrl">Event Image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    value={eventData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Provide a URL to an image that represents your event.
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    placeholder="Describe your event, including what attendees can expect"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-heading text-xl font-semibold mb-6">Organizer Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="organizerName">Organizer Name</Label>
                  <Input
                    id="organizerName"
                    name="organizerName"
                    value={eventData.organizerName}
                    onChange={handleChange}
                    placeholder="Individual or organization name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="organizerEmail">Organizer Email</Label>
                  <Input
                    id="organizerEmail"
                    name="organizerEmail"
                    type="email"
                    value={eventData.organizerEmail}
                    onChange={handleChange}
                    placeholder="contact@example.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-event-primary hover:bg-event-primary/90"
              >
                {isSubmitting ? 'Creating...' : 'Create Event'}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default CreateEvent;
