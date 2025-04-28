
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-event-primary flex items-center justify-center">
            <span className="text-white font-bold">E</span>
          </div>
          <span className="font-heading font-semibold text-xl">EventHub</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-event-primary transition-colors">
            Explore
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-event-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/create-event" className="text-gray-700 hover:text-event-primary transition-colors">
            Create
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="bg-event-primary hover:bg-event-primary/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
