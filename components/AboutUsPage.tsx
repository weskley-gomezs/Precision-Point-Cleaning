import React from 'react';
import { CheckCircle, Users, Shield, Clock } from 'lucide-react';

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
                        src="https://i.imgur.com/vgIsIq1.jpeg" 
                        alt="Our Team" 
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

      {/* Values Section */}
      <div className="bg-brand-light-gray py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Why Choose Us</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">Our Core Values</h2>
                <p className="text-slate-500 leading-relaxed">
                    We believe that trust and reliability are the foundation of any service business. Here is what sets us apart from the competition.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className="w-16 h-16 mx-auto bg-brand-light-gray rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                        <Users className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-3">Experienced Team</h3>
                    <p className="text-slate-500 leading-relaxed">
                        Every member of our team is vetted, background-checked, and rigorously trained to ensure the highest standards of safety and quality.
                    </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className="w-16 h-16 mx-auto bg-brand-light-gray rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                        <Shield className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-3">Fully Insured</h3>
                    <p className="text-slate-500 leading-relaxed">
                        We are fully bonded and insured for your peace of mind. We treat your property with the utmost respect and care it deserves.
                    </p>
                </div>

                 {/* Value 3 */}
                <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow text-center group">
                    <div className="w-16 h-16 mx-auto bg-brand-light-gray rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                        <Clock className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-3">Reliable Service</h3>
                    <p className="text-slate-500 leading-relaxed">
                        We show up on time, every time. With our 24/7 availability, you can count on us to be there whenever you need us most.
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