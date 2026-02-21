import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200 pt-12 md:pt-20 pb-8 text-slate-600 font-sans relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
          
          {/* Column 1: Image (Logo) */}
          <div className="lg:w-[15%] flex justify-start items-start pt-2">
             <img 
                src="https://i.imgur.com/EPtHg0n.png" 
                alt="Precision Point Cleaning" 
                className="w-24 md:w-28 h-auto object-contain"
             />
          </div>

          {/* Column 2: Description Text */}
          <div className="lg:w-[30%] space-y-6">
             <div>
                <p className="text-base leading-relaxed mb-4 text-slate-500">
                    There's clean, and then there's <br/>
                    <span className="font-bold text-slate-700">PRECISION POINT</span> clean.
                </p>
                <p className="text-base leading-relaxed mb-4 text-slate-500">
                    Specializing in Commercial and Residential Emergency Cleaning.
                </p>
                <p className="text-base leading-relaxed text-slate-500">
                    Other services include: Post Construction Cleaning, Floor Work, Fire Damage, Mold Remediation, Disaster Clean-up, Crime Scene Clean-up, Storm Damage!
                </p>
             </div>
          </div>

          {/* Column 3: Cleaning Services */}
          <div className="lg:w-[25%]">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Cleaning Services</h3>
            <ul className="space-y-3">
                <li className="flex items-center text-base text-slate-500 group">
                    <Check className="text-brand-red w-5 h-5 mr-3 shrink-0" strokeWidth={3} size={16} />
                    <span className="group-hover:text-brand-red transition-colors">Commercial Cleaning</span>
                </li>
                <li className="flex items-center text-base text-slate-500 group">
                    <Check className="text-brand-red w-5 h-5 mr-3 shrink-0" strokeWidth={3} size={16} />
                    <span className="group-hover:text-brand-red transition-colors">Post Construction Cleaning</span>
                </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:w-[30%]">
             <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h3>
             <ul className="space-y-5">
                <li className="flex items-start text-base text-slate-500">
                    <MapPin className="text-brand-red w-5 h-5 mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>39 Pleasant Street Northborough MA 01532</span>
                </li>
                <li className="flex items-start text-base text-slate-500">
                    <Phone className="text-brand-red w-5 h-5 mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                    <a href="tel:6173720093" className="hover:text-brand-red transition-colors">Serving New England (617) 372-0093</a>
                </li>
                <li className="flex items-start text-base text-slate-500">
                    <Mail className="text-brand-red w-5 h-5 mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                    <a href="mailto:precisionpointcleaningco@gmail.com" className="hover:text-brand-red transition-colors break-all">precisionpointcleaningco@gmail.com</a>
                </li>
                <li className="flex items-start text-base text-slate-500">
                    <Clock className="text-brand-red w-5 h-5 mr-3 shrink-0 mt-0.5" strokeWidth={2} />
                    <span>24 hrs / 7 Days</span>
                </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 md:mt-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-[15px] text-slate-500 text-center md:text-left gap-4 md:gap-0">
            <p>© Since 1996 - Precision Point Cleaning. Designed by <a href="https://wa.me/5561981535040" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">Weskley Gomes</a></p>
            
            <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/profile.php?id=61588417671600&locale=pt_BR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-brand-red transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/precision.point.cleaning/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-brand-red transition-colors"
                >
                  <Instagram size={18} />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};