import React from 'react';
import { Leaf } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Image */}
            <div className="lg:w-1/2">
                 <img 
                    src="https://i.imgur.com/2tRu1FI.jpeg" 
                    alt="Cleaning Services" 
                    className="w-full h-auto object-cover rounded-sm shadow-sm"
                />
            </div>

            {/* Right: Text Services */}
            <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
                <div>
                    <h3 className="text-2xl md:text-[26px] font-bold text-slate-700 mb-6 md:mb-8 leading-tight">
                        Keep Your Business Clean With Our Updated Steam Cleaning Process
                    </h3>
                </div>

                <div className="flex gap-4 group">
                    <div className="mt-1 shrink-0">
                        <Leaf className="text-brand-red w-5 h-5 fill-brand-red" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-700 mb-2 md:mb-3 group-hover:text-brand-red transition-colors">Flood Clean-up</h4>
                        <p className="text-slate-500 text-base leading-relaxed">
                            We hold a successful track record of satisfying our customers and getting back their bond money.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 group">
                    <div className="mt-1 shrink-0">
                         <Leaf className="text-brand-red w-5 h-5 fill-brand-red" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-700 mb-2 md:mb-3 group-hover:text-brand-red transition-colors">Special Cleaning</h4>
                        <p className="text-slate-500 text-base leading-relaxed">
                            We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 group">
                    <div className="mt-1 shrink-0">
                         <Leaf className="text-brand-red w-5 h-5 fill-brand-red" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-700 mb-2 md:mb-3 group-hover:text-brand-red transition-colors">Daily & Nightly Janitorial Services</h4>
                        <p className="text-slate-500 text-base leading-relaxed">
                            We use biodegradable products which do not harm the environment, pets or humans in any way.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};