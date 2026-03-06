import React from 'react';
import { Check } from 'lucide-react';

interface CleaningServicesPageProps {
  onNavigate: (page: string) => void;
}

export const CleaningServicesPage: React.FC<CleaningServicesPageProps> = ({ onNavigate }) => {
  const services = [
    "Restaurant & Kitchen Deep Cleaning (Health Code Specialists)",
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
                        src="https://i.imgur.com/0Ut4r6C.jpeg"
                        alt="Restaurant Kitchen Cleaning"
                        className="w-full h-full object-cover rounded-sm shadow-sm min-h-[300px]"
                    />
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 w-full flex flex-col pt-2">
                    <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Specialized Restaurant & Commercial Cleaning</h2>
                    <div className="text-slate-500 text-[15px] leading-[1.7] space-y-4 mb-10 text-justify">
                        <p>
                            Precision Point Cleaning is the region's leader in <strong>Restaurant and Commercial Kitchen cleaning</strong>. We understand the high stakes of health inspections and the rigorous standards required for food service environments.
                        </p>
                        <p>
                            From deep degreasing of exhaust hoods and kitchen equipment to sanitizing dining areas and restrooms, we ensure your facility is inspection-ready 24/7. We also provide comprehensive cleaning for offices, gyms, and retail spaces.
                        </p>
                        <p>
                            We can accommodate any schedule and budget. <button id="cleaning-services-contact-button" onClick={() => onNavigate('estimate-form')} className="text-slate-500 underline hover:text-brand-red transition-colors cursor-pointer bg-transparent border-none p-0 inline">Contact</button> us today for a FREE estimate.
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