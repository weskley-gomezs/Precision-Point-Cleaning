import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="relative h-[300px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('https://i.imgur.com/2tRu1FI.jpeg')` }}
        ></div>
        <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">About Us</h1>
            <div className="flex justify-center items-center space-x-2 text-sm md:text-base font-medium text-gray-300">
                <span className="hover:text-white cursor-pointer transition-colors">HOME</span>
                <span>/</span>
                <span className="text-brand-red">ABOUT US</span>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                    <div className="absolute top-4 left-4 border-2 border-brand-red w-full h-full z-0 hidden md:block"></div>
                    <img 
                        src="https://i.imgur.com/7B5ncU3.png" 
                        alt="Business Owner" 
                        className="w-full h-auto object-cover rounded shadow-lg relative z-10"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2">
                    <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Story</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6 leading-tight">
                        Providing Top Quality Cleaning Services Since 1996
                    </h2>
                    <div className="text-slate-500 text-base leading-relaxed space-y-4">
                        <p>
                            Precision Point Cleaning is a locally owned and operated cleaning company dedicated to providing exceptional service to homes and businesses across New England. What started as a small team has grown into a full-service cleaning and restoration provider, known for our attention to detail and commitment to customer satisfaction.
                        </p>
                        <p>
                            We understand that every space is unique, which is why we tailor our services to meet your specific needs. From routine janitorial work to emergency flood clean-up, our team is trained, certified, and ready to handle it all.
                        </p>
                        <p>
                            Our mission is simple: to create cleaner, healthier, and safer environments for our clients. We take pride in our work so you can take pride in your space.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 text-slate-600 font-medium">
                            <CheckCircle className="text-brand-red w-5 h-5 shrink-0" />
                            <span>Professional Equipment</span>
                        </div>
                         <div className="flex items-center space-x-3 text-slate-600 font-medium">
                            <CheckCircle className="text-brand-red w-5 h-5 shrink-0" />
                            <span>Certified Technicians</span>
                        </div>
                         <div className="flex items-center space-x-3 text-slate-600 font-medium">
                            <CheckCircle className="text-brand-red w-5 h-5 shrink-0" />
                            <span>24/7 Emergency Support</span>
                        </div>
                         <div className="flex items-center space-x-3 text-slate-600 font-medium">
                            <CheckCircle className="text-brand-red w-5 h-5 shrink-0" />
                            <span>100% Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-brand-light-gray py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Recognition</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">Award Winning Service</h2>
                <p className="text-slate-500 leading-relaxed">
                    We are honored to have been recognized for our commitment to quality and customer service.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                 {/* Award 1 */}
                 <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                    <img 
                        src="https://i.imgur.com/QbLITYO.png" 
                        alt="Award Winner" 
                        className="h-48 md:h-60 w-auto object-contain hover:scale-105 transition-transform duration-300 flex-shrink-0"
                    />
                    <p className="text-slate-600 font-medium leading-relaxed text-center sm:text-left">
                        2022 & 2024 Award for excellence in environmental services, earned during prior senior leadership service with a national healthcare services organization.
                    </p>
                 </div>

                 {/* Award 2 */}
                 <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                    <img 
                        src="https://i.imgur.com/a7MiZjY.png" 
                        alt="Award Winner" 
                        className="h-48 md:h-60 w-auto object-contain hover:scale-105 transition-transform duration-300 flex-shrink-0"
                    />
                    <p className="text-slate-600 font-medium leading-relaxed text-center sm:text-left">
                        Our leadership has achieved deficiency-free regulatory surveys in acute care environments, demonstrating the highest standards of cleanliness, infection prevention, and compliance.
                    </p>
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
