import React from 'react';
import { MapPin, Clock, Phone, Facebook, Instagram } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-2 hidden lg:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500 font-medium">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 group cursor-pointer hover:text-brand-red transition-colors">
            <MapPin size={14} className="text-brand-red" />
            <span>39 Pleasant Street Northborough MA 01532</span>
          </div>
          <div className="flex items-center space-x-1 group cursor-pointer hover:text-brand-red transition-colors">
            <Clock size={14} className="text-brand-red" />
            <span>24 hrs / 7 Days</span>
          </div>
          <a href="tel:6173720093" className="flex items-center space-x-1 group cursor-pointer hover:text-brand-red transition-colors">
            <Phone size={14} className="text-brand-red" />
            <span>Serving New England: (617) 372-0093</span>
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61588417671600&locale=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-red transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a 
              href="https://www.instagram.com/precision.point.cleaning/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-red transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
