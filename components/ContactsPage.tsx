import React from 'react';
import { MapPin, Phone, Clock, Facebook, Twitter, Check } from 'lucide-react';

export const ContactsPage: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12 md:py-16">
            {/* Main Page Title */}
            <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-12">
                Contact Us
            </h1>

            {/* Map Section */}
            <div className="w-full h-[400px] bg-gray-200 mb-16 rounded-sm overflow-hidden relative shadow-sm">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14033.810660435436!2d-71.64810366848359!3d42.31596715369969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f5c23759b60f%3A0x2c839bd8e4539c35!2s39%20Pleasant%20St%2C%20Northborough%2C%20MA%2001532%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1771105286773!5m2!1spt-BR!2sbr"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </div>

            {/* General Office & Get in Touch Grid */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
                {/* Left Column: General Office */}
                <div className="lg:w-1/3 pt-2">
                    <h2 className="text-[1.75rem] font-bold text-slate-700 mb-8">General Office</h2>
                    
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <MapPin className="text-brand-red w-6 h-6 fill-brand-red text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-700 text-lg mb-1">Address</h3>
                                <p className="text-slate-500 text-[15px]">39 Pleasant Street</p>
                                <p className="text-slate-500 text-[15px]">Northborough, MA 01532</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-4">
                             <div className="mt-1">
                                <Phone className="text-brand-red w-6 h-6 fill-brand-red text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-700 text-lg mb-1">Phone 24/7</h3>
                                <p className="text-slate-500 text-[15px]">Serving New England (617) 372-0093</p>
                                <p className="text-slate-500 text-[15px]">Emergency Services: 888-76-FLOOD</p>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="flex gap-4">
                             <div className="mt-1">
                                <Clock className="text-brand-red w-6 h-6" strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-700 text-lg mb-1">Operating Hours</h3>
                                <p className="text-slate-500 text-[15px]">24 hrs / 7 Days</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pt-4">
                            <h3 className="font-bold text-slate-700 text-lg mb-3">Look for us on</h3>
                            <div className="flex gap-3">
                                <a href="#" className="bg-gray-400 hover:bg-brand-red transition-colors text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    <Facebook size={20} fill="white" className="border-none" />
                                </a>
                                <a href="#" className="bg-gray-400 hover:bg-brand-red transition-colors text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    <Twitter size={20} fill="white" className="border-none" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Get in Touch Form */}
                <div className="lg:w-2/3">
                    <h2 className="text-[1.75rem] font-bold text-slate-700 mb-8">Get in Touch</h2>
                    
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your name*" 
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400 bg-white" 
                        />
                        <input 
                            type="text" 
                            placeholder="Email*" 
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400 bg-white" 
                        />
                        <input 
                            type="text" 
                            placeholder="Phone*" 
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400 bg-white" 
                        />
                        <textarea 
                            placeholder="Message" 
                            rows={6}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400 bg-white resize-none" 
                        ></textarea>

                        {/* reCAPTCHA Placeholder */}
                        <div className="mt-4 mb-6">
                            <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded w-[304px] h-[78px] flex items-center justify-between shadow-inner px-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-[28px] h-[28px] border-2 border-[#c1c1c1] bg-white rounded-sm cursor-pointer hover:border-gray-400"></div>
                                    <span className="text-[14px] font-medium text-black">I'm not a robot</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-[32px] h-[32px] opacity-100"/>
                                    <span className="text-[10px] text-[#555] mt-1">reCAPTCHA</span>
                                    <div className="text-[8px] text-[#555]">
                                        <span className="mr-1">Privacy</span>-
                                        <span className="ml-1">Terms</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="bg-brand-red text-white px-8 py-3 rounded-full font-bold hover:bg-[#003d80] transition-colors shadow-md text-sm">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section: Info List & Affiliate Office */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 mt-12 items-start">
                 {/* Left: Contact List */}
                 <div className="lg:w-1/2">
                    <h3 className="text-xl font-bold text-slate-700 mb-6">Contact us to book your freequote.</h3>
                    <ul className="space-y-4">
                        {[
                            "No contracts and no obligation",
                            "Competitive Rates",
                            "Top quality work",
                            "A service schedule designed to meet your needs",
                            "Proud members of the Better Business Bureau",
                            "We provide all our own supplies."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start text-[15px] text-slate-500">
                                <Check className="text-brand-red w-4 h-4 mr-3 shrink-0 mt-[3px]" strokeWidth={3} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 {/* Right: Affiliate Office */}
                 <div className="lg:w-1/2 bg-[#f8f9fa] p-8 md:p-10 w-full">
                    <h2 className="text-2xl md:text-[1.75rem] font-bold text-slate-700 mb-6">Affiliate Office #1</h2>
                    
                    <div className="flex gap-4 items-start">
                         <div className="mt-1">
                            <MapPin className="text-brand-red w-6 h-6 fill-brand-red text-white" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-slate-500 text-[15px] mb-2">Northborough, MA 01532</h3>
                            <p className="text-slate-500 text-[15px]">Serving New England (617) 372-0093</p>
                            <p className="text-slate-500 text-[15px]">Emergency Services: 888-76-FLOOD</p>
                            <p className="text-slate-500 text-[15px]">Email: <a href="mailto:precisionpointcleaningco@gmail.com" className="underline hover:text-brand-red break-all">precisionpointcleaningco@gmail.com</a></p>
                            <p className="text-slate-500 text-[15px]">39 Pleasant Street</p>
                            <p className="text-slate-500 text-[15px]">Northborough, MA 01532</p>
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