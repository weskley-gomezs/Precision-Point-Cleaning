import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Trust */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="https://i.imgur.com/D45ek8D.png" 
              alt="Precision Point Cleaning" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-slate-400 mb-6">
              The region's premier commercial and post-construction cleaning specialists. Serving Massachusetts and neighboring states. Licensed, insured, and ready for any job.
            </p>
            <div className="flex items-center text-brand-red font-bold">
              <ShieldCheck size={20} className="mr-2" />
              <span>Fully Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Our Services</a></li>
              <li><a href="#estimate-form" className="hover:text-brand-red transition-colors">Get Free Estimate</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-400">
                <Phone size={18} className="text-brand-red mr-3" />
                <a href="tel:6173720093" className="hover:text-white transition-colors">(617) 372-0093</a>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail size={18} className="text-brand-red mr-3" />
                <a href="mailto:precisionpointcleaningco@gmail.com" className="hover:text-white transition-colors break-all">precisionpointcleaningco@gmail.com</a>
              </li>
              <li className="flex items-start text-slate-400">
                <MapPin size={18} className="text-brand-red mr-3 mt-1" />
                <span>Serving Massachusetts & Neighboring States</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61588417671600" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-3 rounded-full hover:bg-brand-red transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/precision.point.cleaning/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-3 rounded-full hover:bg-brand-red transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Precision Point Cleaning. All rights reserved.</p>
          <p>Licensed & Insured in MA and Neighboring States</p>
        </div>
      </div>
    </footer>
  );
};
