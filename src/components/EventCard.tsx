
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface EventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
}

const EventCard = ({ id, title, date, location, category, imageUrl }: EventProps) => {
  return (
    <Link to={`/event/${id}`} className="event-card block">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-event-accent">{category}</Badge>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-medium line-clamp-2">{title}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
