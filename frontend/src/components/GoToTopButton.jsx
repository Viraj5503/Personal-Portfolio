// frontend/src/components/GoToTopButton.jsx

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTopButton = () => {
  // State to track whether the button should be visible or not
  const [isVisible, setIsVisible] = useState(false);

  // This function will be called when the user scrolls
  const handleScroll = () => {
    // If the user has scrolled down more than 300 pixels, show the button
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This function will be called when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll smooth
    });
  };

  // useEffect hook to add and remove the scroll event listener
  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    // This is crucial for performance and preventing memory leaks.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  return (
    // We only render the button if isVisible is true
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full 
        bg-blue-600 text-white shadow-lg 
        hover:bg-blue-700 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Go to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default GoToTopButton;