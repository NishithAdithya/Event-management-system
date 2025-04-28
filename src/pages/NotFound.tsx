
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-heading text-6xl font-bold text-event-primary mb-2">404</h1>
          <p className="text-2xl font-medium mb-6">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            We couldn't find the page you're looking for. The page might have been removed,
            renamed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-event-primary hover:bg-event-primary/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
