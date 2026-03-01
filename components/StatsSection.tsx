import React, { useEffect, useState, useRef } from 'react';

// Helper component to handle the animation of each number
const AnimatedCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Extract the numeric part and the suffix (e.g., "1500+" -> 1500 and "+")
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Start animation only when visible and hasn't animated yet
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds animation

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quart formula for smooth deceleration: 1 - (1 - t)^4
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setDisplayValue(Math.floor(easeProgress * numericValue));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [numericValue]);

  return (
    <span ref={elementRef}>
      {displayValue}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { 
      icon: <img src="https://i.imgur.com/qVlX04l.png" alt="Happy Customers" className="w-[50px] h-[50px] object-contain brightness-0 invert" />, 
      value: '1500+', 
      label: 'Happy Customers' 
    },
    { 
      icon: <img src="https://i.imgur.com/j9AYm60.png" alt="Service Guarantee" className="w-[50px] h-[50px] object-contain brightness-0 invert" />, 
      value: '100%', 
      label: 'Service Guarantee' 
    },
    { 
      icon: <img src="https://i.imgur.com/Xqy9YvJ.png" alt="Cleaners" className="w-[50px] h-[50px] object-contain brightness-0 invert" />, 
      value: '25', 
      label: 'Cleaners' 
    },
    { 
      icon: <img src="https://i.imgur.com/L2aclF4.png" alt="Cleans Completed" className="w-[50px] h-[50px] object-contain brightness-0 invert" />, 
      value: '1500+', 
      label: 'Cleans Completed' 
    },
  ];

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
        {/* Background - Fixed on Desktop, Scroll on Mobile (fixes iOS parallax issues) */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
            style={{ backgroundImage: `url('https://img.freepik.com/fotos-gratis/pessoas-de-servico-de-limpeza-profissional-trabalhando-juntas-em-um-escritorio_23-2150520639.jpg?semt=ais_user_personalization&w=740&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-gray-900/60"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center text-white group">
                        <div className="mb-4 relative flex justify-center items-center">
                           {/* Icon with faint dotted circle hint */}
                           <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           {stat.icon}
                        </div>
                        <div className="w-10 h-1 bg-brand-red mb-4"></div>
                        <h3 className="text-4xl font-bold mb-2">
                            <AnimatedCounter value={stat.value} />
                        </h3>
                        <p className="text-sm uppercase font-bold tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};