import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Precision Point Crew, you all were amazing and the homeowners were absolutely astounded by the transformation from a attacking a dust disaster ..",
    author: "D Pierce dpi Denise Pierce",
    date: "12/2/2018",
  },
  {
    id: 2,
    text: "I cannot express how grateful I am for the quick response and incredible work done on our water damaged basement. Truly professional service!",
    author: "Johnathan Smith",
    date: "03/15/2019",
  },
  {
    id: 3,
    text: "The team was efficient, polite, and thorough. Our office carpets look brand new again. Highly recommend Precision Point for commercial cleaning.",
    author: "Elena Rodriguez",
    date: "09/10/2020",
  },
  {
    id: 4,
    text: "Reliable and detail-oriented. We've been using their janitorial services for over a year now and haven't had a single complaint.",
    author: "Mark Thompson",
    date: "11/05/2021",
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-12 md:py-24 bg-white border-t border-gray-100">
      {/* Background with faint room image overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502005229766-939760a7cb0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl text-slate-700 font-bold mb-8 md:mb-12">Happy Customers, Happy Homes</h2>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          
          <div key={currentIndex} className="flex flex-col items-center animate-fade-in w-full px-4">
              <p className="text-slate-500 italic text-lg md:text-xl leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </p>

              <div className="mb-6 text-brand-red opacity-10">
                <Quote className="w-[60px] h-[60px] md:w-20 md:h-20" fill="currentColor" />
              </div>

              <div className="flex flex-col items-center justify-center">
                {/* Logo/Icon in circle */}
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg flex items-center justify-center bg-white mb-6 p-3 md:p-4">
                     <img src="https://i.imgur.com/EPtHg0n.png" alt="Precision Point" className="w-full h-full object-contain" />
                 </div>
                 
                 <p className="text-brand-red text-base font-medium">
                    {testimonials[currentIndex].author} | <span className="text-gray-400">{testimonials[currentIndex].date}</span>
                 </p>
              </div>
          </div>

          {/* Slider Dots */}
          <div className="flex space-x-4 mt-12">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                        ? 'bg-brand-red ring-2 ring-brand-red ring-offset-2 scale-125' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                />
            ))}
          </div>
        </div>
      </div>
      <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
            }
        `}</style>
    </div>
  );
};