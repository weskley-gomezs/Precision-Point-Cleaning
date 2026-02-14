import React from 'react';
import { Check } from 'lucide-react';

export const EmploymentPage: React.FC = () => {
  const positions = [
    "FT Cleaners (day and night)",
    "FT Sales Executive",
    "PT Cleaners (day and night)"
  ];

  return (
    <div className="bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12 md:py-16">
            {/* Main Page Title */}
            <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-12">
                Employment
            </h1>

            {/* Section 1: Employment Opportunities */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center mb-16 md:mb-24">
                {/* Left Column: Image */}
                <div className="lg:w-1/2 w-full">
                    <img 
                        src="https://images.unsplash.com/photo-1581578731117-10d52143b0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Cleaning Professional"
                        className="w-full h-[350px] lg:h-[400px] object-cover rounded-sm shadow-sm"
                    />
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 w-full flex flex-col pt-2">
                    <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Employment Opportunities</h2>
                    <div className="text-slate-500 text-[15px] leading-[1.7] space-y-4 mb-8 text-justify">
                        <p>
                            Precision Point Cleaning has salaried and hourly cleaning positions available with advancement to management opportunities. Benefits include health insurance, dental insurance, and an employee bonus program.
                        </p>
                        <p>
                            We are always looking for good people to join our team of cleaning professionals. Complete our employment application and email it to <a href="mailto:customerservice@precisionpointcleaning.com" className="text-slate-500 underline hover:text-brand-red">customerservice@precisionpointcleaning.com</a>.
                        </p>
                    </div>

                    <div>
                         <a 
                            href="#" 
                            className="inline-block bg-brand-red text-white px-8 py-3.5 rounded-full font-bold text-[14px] hover:bg-[#003d80] transition-colors shadow-md text-center w-full md:w-auto"
                         >
                            Download Employment Application
                         </a>
                    </div>
                </div>
            </div>

            {/* Section 2: Current Positions */}
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-12 items-center">
                 {/* Left Column: Content */}
                 <div className="lg:w-1/2 w-full flex flex-col pt-2">
                    <h2 className="text-2xl md:text-[1.75rem] font-bold text-slate-700 mb-6">Current Positions Available</h2>
                    
                    <ul className="space-y-4 mb-8">
                        {positions.map((position, index) => (
                            <li key={index} className="flex items-center text-[15px] text-slate-500">
                                <Check className="text-brand-red w-4 h-4 mr-3 shrink-0" strokeWidth={3} />
                                <span>{position}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="text-slate-500 text-[15px] leading-[1.7] text-justify">
                        <p>
                            We are an equal opportunity employer, dedicated to a policy of nondiscrimination in employment on any basis including race, color, age, sex, religion, disability or national origin.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="lg:w-1/2 w-full">
                    <img 
                        src="https://images.unsplash.com/photo-1527513123882-393226a7b7e5?q=80&w=1800&auto=format&fit=crop"
                        alt="Vacuum Cleaning Commercial"
                        className="w-full h-[350px] lg:h-[400px] object-cover rounded-sm shadow-sm object-top"
                    />
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