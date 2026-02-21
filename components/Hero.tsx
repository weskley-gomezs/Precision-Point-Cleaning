import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://i.imgur.com/Lb5KjFx.jpeg',
    title: 'SPECIALIZING IN COMMERCIAL\nEMERGENCY CLEANING',
    buttonText: 'FREE Consultations'
  },
  {
    id: 2,
    image: 'https://i.imgur.com/vgIsIq1.jpeg', 
    title: "THERE'S CLEAN, AND THEN THERE'S\nENTERPRISE CLEAN",
    buttonText: 'FREE Consultations'
  }
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[450px] md:h-[650px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] transform scale-100 hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('${slide.image}')`
            }}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
            <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-4 md:mb-10 drop-shadow-md whitespace-pre-line leading-tight">
              {slide.title}
            </h1>
            
            <a 
              href="https://wa.me/16173720093"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-5 py-2 md:px-8 md:py-3 rounded-full font-bold uppercase text-xs sm:text-sm md:text-base hover:bg-white hover:text-brand-red transition-all duration-300 tracking-wider inline-block"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-10 -translate-y-1/2 text-white/80 hover:text-white cursor-pointer z-20 transition-transform hover:-translate-x-1 p-2"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16" strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-10 -translate-y-1/2 text-white/80 hover:text-white cursor-pointer z-20 transition-transform hover:translate-x-1 p-2"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16" strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 border-2 border-transparent ${
              current === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};