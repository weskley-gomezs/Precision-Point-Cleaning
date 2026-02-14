import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT US', id: 'about' },
    { 
      name: 'OUR SERVICES', 
      id: 'services',
      subLinks: [
        { name: 'Cleaning services', id: 'cleaning-services' },
        { name: 'Special emergency cleaning', id: 'special-emergency-cleaning' },
        { name: 'Schedule cleaning', id: 'schedule-cleaning' }
      ]
    },
    { name: 'CUSTOMERS', id: 'customers' },
    { name: 'REVIEWS', id: 'reviews' },
    { name: 'CONTACTS', id: 'contacts' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const toggleMobileSubmenu = (name: string) => {
    if (name === 'OUR SERVICES') {
      setMobileServicesOpen(!mobileServicesOpen);
    }
  };

  return (
    <nav className="bg-white py-4 md:py-6 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Layout: Mobile (justify-between), Desktop (justify-center with logo and links grouped) */}
        <div className="flex items-center justify-between xl:justify-center gap-12">
          {/* Logo Section */}
          <div className="flex items-center shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="https://i.imgur.com/D45ek8D.png" 
              alt="Precision Point Cleaning" 
              className="h-16 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav - Centered with Logo */}
          <div className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button
                  onClick={() => !link.subLinks && handleNavClick(link.id)}
                  className={`flex items-center text-[15px] font-black uppercase tracking-wider transition-colors bg-transparent border-none cursor-pointer h-full py-2 ${
                    currentPage === link.id || (link.subLinks && link.subLinks.some(s => s.id === currentPage))
                      ? 'text-brand-red' 
                      : 'text-slate-600 hover:text-brand-red'
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                </button>

                {/* Dropdown Menu for Sublinks */}
                {link.subLinks && (
                   <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white border-t-2 border-brand-red shadow-xl rounded-b-sm flex flex-col py-2">
                        {link.subLinks.map((subLink) => (
                            <button
                                key={subLink.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNavClick(subLink.id);
                                }}
                                className="text-left px-6 py-3 text-[14px] font-bold text-slate-600 hover:bg-gray-50 hover:text-brand-red uppercase tracking-wide transition-colors border-b border-gray-50 last:border-0"
                            >
                                {subLink.name}
                            </button>
                        ))}
                      </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-gray-700 hover:text-brand-red p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="xl:hidden mt-4 pb-4 flex flex-col space-y-1 border-t pt-4 animate-fade-in">
             {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                 {link.subLinks ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className={`flex items-center justify-between text-left text-[15px] font-black uppercase tracking-wider transition-colors px-2 py-3 w-full ${
                          (currentPage === link.id || link.subLinks.some(s => s.id === currentPage)) ? 'text-brand-red bg-gray-50' : 'text-slate-600 hover:text-brand-red hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {mobileServicesOpen && (
                        <div className="bg-gray-50 pl-6 pr-2 py-2 space-y-1 border-l-4 border-brand-red/20 ml-2">
                            {link.subLinks.map((subLink) => (
                                <button
                                    key={subLink.id}
                                    onClick={() => handleNavClick(subLink.id)}
                                    className={`text-left text-[13px] font-bold uppercase tracking-wider transition-colors px-2 py-2 w-full ${
                                        currentPage === subLink.id ? 'text-brand-red' : 'text-slate-500 hover:text-brand-red'
                                    }`}
                                >
                                    {subLink.name}
                                </button>
                            ))}
                        </div>
                      )}
                    </>
                 ) : (
                    <button
                        onClick={() => handleNavClick(link.id)}
                        className={`text-left text-[15px] font-black uppercase tracking-wider transition-colors px-2 py-3 w-full ${
                        currentPage === link.id ? 'text-brand-red bg-gray-50' : 'text-slate-600 hover:text-brand-red hover:bg-gray-50'
                        }`}
                    >
                        {link.name}
                    </button>
                 )}
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-5px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.2s ease-out forwards;
            }
        `}</style>
    </nav>
  );
};