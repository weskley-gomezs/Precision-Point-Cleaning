import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white py-3 md:py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="https://i.imgur.com/D45ek8D.png" 
              alt="Precision Point Cleaning" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Info & CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Call for a Free Quote</span>
              <a href="tel:6173720093" className="text-xl font-black text-brand-red hover:text-blue-800 transition-colors flex items-center">
                <Phone size={18} className="mr-2 fill-brand-red" />
                (617) 372-0093
              </a>
            </div>
            <button 
              onClick={() => handleNavClick('schedule-cleaning')}
              className="bg-brand-red text-white px-8 py-3 rounded-full font-black uppercase tracking-wider hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-4">
            <a href="tel:6173720093" className="bg-brand-red text-white p-2.5 rounded-full shadow-md">
              <Phone size={20} fill="white" />
            </a>
            <button 
              className="text-slate-700 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-6 flex flex-col space-y-4 border-t pt-4 animate-fade-in">
            <button onClick={() => handleNavClick('home')} className="text-left font-bold text-slate-700 py-2">HOME</button>
            <button onClick={() => handleNavClick('cleaning-services')} className="text-left font-bold text-slate-700 py-2">SERVICES</button>
            <button onClick={() => handleNavClick('about')} className="text-left font-bold text-slate-700 py-2">ABOUT US</button>
            <button onClick={() => handleNavClick('contacts')} className="text-left font-bold text-slate-700 py-2">CONTACT</button>
            <button 
              onClick={() => handleNavClick('schedule-cleaning')}
              className="bg-brand-red text-white px-6 py-4 rounded-full font-black uppercase tracking-wider text-center"
            >
              Get Free Estimate
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
