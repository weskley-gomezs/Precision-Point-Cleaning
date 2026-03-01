import React from 'react';
import { Check } from 'lucide-react';

interface SpecialServicesPageProps {
  onNavigate: (page: string) => void;
}

export const SpecialServicesPage: React.FC<SpecialServicesPageProps> = ({ onNavigate }) => {
  const services = [
    "Window washing",
    "Painting",
    "Floor stripping and refinishing",
    "Steam cleaning",
    "Floor buffing"
  ];

  return (
    <div className="bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12 md:py-16">
            {/* Main Page Title */}
            <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-12">
                Special Services
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
                {/* Left Column: Image */}
                <div className="lg:w-1/2 w-full">
                    <img 
                        src="https://img.freepik.com/fotos-premium/um-trabalhador-homem-limpando-o-chao-com-a-imagem-da-maquina-lavadora_293953-528.jpg"
                        alt="Special Cleaning Services Floor Buffer"
                        className="w-full h-auto object-cover rounded-sm shadow-sm max-h-[500px]"
                    />
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2 w-full flex flex-col pt-2">
                    <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Special Services</h2>
                    <div className="text-slate-500 text-[15px] leading-[1.7] space-y-4 mb-10 text-justify">
                        <p>
                            The appearance of your commercial building can have a direct effect on your bottom line. Whether your building suffered a flood and need emergency clean-up or just want to give your building a fresh coat of paint, Precision Point Cleaning is your solution.
                        </p>
                        <p>
                            Make sure your business is inviting for customers and employees - <button onClick={() => onNavigate('estimate-form')} className="text-slate-500 underline hover:text-brand-red transition-colors cursor-pointer bg-transparent border-none p-0 inline">contact</button> us today for a FREE estimate.
                        </p>
                    </div>

                    <h2 className="text-[1.35rem] font-bold text-slate-700 mb-5">Keeping Your Business Clean</h2>
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