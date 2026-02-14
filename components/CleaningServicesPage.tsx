import React from 'react';
import { Check } from 'lucide-react';

interface CleaningServicesPageProps {
  onNavigate: (page: string) => void;
}

export const CleaningServicesPage: React.FC<CleaningServicesPageProps> = ({ onNavigate }) => {
  const services = [
    "Daily/Nightly, weekly, monthly Commercial Cleaning",
    "State of the art Carpet Steam Cleaning",
    "Carpet Maintenance",
    "Floor Stripping and Refinishing",
    "Apartment Turnover Cleaning",
    "Painting",
    "24/7 Emergency Service",
    "Window Cleaning",
    "Post Construction Clean-Up",
    "Snow Removal"
  ];

  return (
    <div className="bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12 md:py-16">
            {/* Main Page Title */}
            <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-12">
                Cleaning Services
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                {/* Left Column: Image */}
                <div className="lg:w-1/2 w-full">
                    <img 
                        src="https://img.freepik.com/fotos-gratis/pessoas-de-tiro-medio-limpando-predio_23-2150454559.jpg?t=st=1769813994~exp=1769817594~hmac=000fb7dc31ec161b8885132f8799b6a726f51b465bcb97c298d3f8ccb3d68590"
                        alt="Cleaning Services Team"
                        className="w-full h-full object-cover rounded-sm shadow-sm min-h-[300px]"
                    />
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 w-full flex flex-col pt-2">
                    <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Cleaning Services</h2>
                    <div className="text-slate-500 text-[15px] leading-[1.7] space-y-4 mb-10 text-justify">
                        <p>
                            Keep your commercial facility looking its best with regular cleaning by Precision Point Cleaning. We understand that every building has its own particular needs. We'll create a plan to best meet your cleaning needs, and you can choose from daily, weekly, monthly, or semiannual cleaning.
                        </p>
                        <p>
                            We have developed a program which we can track when our managers go to your facility and when our employees are at your facility.
                        </p>
                        <p>
                            We can accommodate any schedule and budget. <button onClick={() => onNavigate('contacts')} className="text-slate-500 underline hover:text-brand-red transition-colors cursor-pointer bg-transparent border-none p-0 inline">Contact</button> us today for a FREE estimate.
                        </p>
                    </div>

                    <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Services Offered</h2>
                    <ul className="space-y-3">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-start text-[15px] text-slate-500">
                                <Check className="text-brand-red w-4 h-4 mr-3 shrink-0 mt-[3px]" strokeWidth={3} />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
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