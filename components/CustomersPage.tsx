import React from 'react';

interface CustomersPageProps {
  onNavigate: (page: string) => void;
}

export const CustomersPage: React.FC<CustomersPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12 md:py-16">
            {/* Main Page Title */}
            <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-12">
                Customers
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center bg-[#f9f9f9] lg:bg-transparent">
                {/* Left Column: Image */}
                <div className="lg:w-1/2 w-full h-full">
                    <img 
                        src="https://static6.depositphotos.com/1057968/615/i/450/depositphotos_6153518-stock-photo-cleaning.jpg"
                        alt="Cleaning Service Hallway"
                        className="w-full h-[300px] lg:h-[400px] object-cover object-center shadow-sm"
                    />
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 w-full flex flex-col p-6 lg:p-0 lg:bg-[#f9f9f9] lg:h-[400px] justify-center lg:pr-12">
                    <div className="lg:pl-8">
                        <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Valued Customers</h2>
                        <div className="text-slate-500 text-[15px] leading-[1.7] space-y-4 mb-4 text-justify">
                            <p>
                                Our goal at Precision Point Cleaning is to always meet and exceed your expectations. We are proud to list a few of our satisfied customers and would be honored to add you as one of our clients.
                            </p>
                            <p>
                                <button onClick={() => onNavigate('contacts')} className="text-slate-500 underline hover:text-brand-red transition-colors cursor-pointer bg-transparent border-none p-0 inline">Contact</button> us today for a FREE estimate and for more information on how we can help your business and keep it clean.
                            </p>
                        </div>
                    </div>
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