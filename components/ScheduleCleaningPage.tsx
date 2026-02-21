import React, { useState } from 'react';
import { Calendar, ChevronDown, Minus, Plus } from 'lucide-react';

export const ScheduleCleaningPage = () => {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [frequency, setFrequency] = useState('One Time Service');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    serviceType: '',
    date: '',
    startTime: '7:00 AM',
    endTime: '8:00 AM'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookNow = () => {
    const text = `*New Cleaning Booking*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Address:* ${formData.address}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A%0A` +
      `*Home Info:* ${bedrooms} Bedrooms, ${bathrooms} Bathrooms%0A` +
      `*Service:* ${formData.serviceType}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.startTime} - ${formData.endTime}%0A` +
      `*Frequency:* ${frequency}`;

    window.open(`https://wa.me/16173720093?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white animate-fade-in pb-16">
      <div className="container mx-auto px-4 py-12">
         {/* Page Title */}
         <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-12">
            Order Form
         </h1>

         <div className="flex flex-col lg:flex-row max-w-6xl mx-auto shadow-sm">
            {/* Left Column: Form */}
            <div className="lg:w-2/3 border border-gray-200 lg:border-r-0 rounded-t-sm lg:rounded-l-sm lg:rounded-tr-none bg-white p-6 md:p-10">
                <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-8 border-b border-gray-100 pb-4">
                    Book your cleaning service in 60 seconds
                </h2>

                {/* Contact Information */}
                <div className="mb-8">
                    <h3 className="text-[16px] font-bold text-slate-700 mb-1">Contact Information</h3>
                    <p className="text-[13px] text-slate-400 mb-4">This information will be used to contact you about your service.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name*" className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400" />
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Your address*" className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400" />
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number*" className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400" />
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-mail*" className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:border-brand-red transition-colors placeholder-slate-400" />
                    </div>
                </div>

                {/* Home Information */}
                <div className="mb-8 border-t border-gray-100 pt-6">
                    <h3 className="text-[16px] font-bold text-slate-700 mb-1">Home Information</h3>
                    <p className="text-[13px] text-slate-400 mb-4">Tell us about your home</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Bedrooms Counter */}
                        <div>
                            <div className="flex items-center border border-gray-300 rounded bg-white">
                                <button 
                                    onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                                    className="px-4 py-2.5 text-slate-400 hover:text-brand-red border-r border-gray-300 transition-colors bg-white"
                                >
                                    <Minus size={16} />
                                </button>
                                <div className="flex-grow text-center text-sm font-medium text-black bg-white">
                                    {bedrooms} Bedrooms
                                </div>
                                <button 
                                    onClick={() => setBedrooms(bedrooms + 1)}
                                    className="px-4 py-2.5 text-slate-400 hover:text-brand-red border-l border-gray-300 transition-colors bg-white"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <p className="text-center text-[11px] text-slate-400 mt-1">(living room & kitchen included)</p>
                        </div>

                         {/* Bathrooms Counter */}
                         <div>
                            <div className="flex items-center border border-gray-300 rounded bg-white">
                                <button 
                                    onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                                    className="px-4 py-2.5 text-slate-400 hover:text-brand-red border-r border-gray-300 transition-colors bg-white"
                                >
                                    <Minus size={16} />
                                </button>
                                <div className="flex-grow text-center text-sm font-medium text-black bg-white">
                                    {bathrooms} Bathroom{bathrooms !== 1 ? 's' : ''}
                                </div>
                                <button 
                                    onClick={() => setBathrooms(bathrooms + 1)}
                                    className="px-4 py-2.5 text-slate-400 hover:text-brand-red border-l border-gray-300 transition-colors bg-white"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <p className="text-center text-[11px] text-slate-400 mt-1">(round half baths up)</p>
                        </div>
                    </div>
                </div>

                {/* Service Requested */}
                <div className="mb-8 border-t border-gray-100 pt-6">
                    <h3 className="text-[16px] font-bold text-slate-700 mb-4">Service Requested</h3>
                    <div className="relative">
                        <select 
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-black bg-white appearance-none focus:outline-none focus:border-brand-red cursor-pointer"
                        >
                            <option value="">- Please Select -</option>
                            <option value="Deep Cleaning">Deep Cleaning</option>
                            <option value="Standard Cleaning">Standard Cleaning</option>
                            <option value="Move In/Out">Move In/Out</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-3 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                 {/* Service Requested (Date/Time) */}
                 <div className="mb-8 border-t border-gray-100 pt-6">
                    <h3 className="text-[16px] font-bold text-slate-700 mb-1">Service Requested</h3>
                    <p className="text-[13px] text-slate-400 mb-4">When would you like us to come?</p>
                    
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="relative w-full md:w-1/3">
                            <input 
                                type="date" 
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:border-brand-red" 
                            />
                            <Calendar size={16} className="absolute right-4 top-3 text-slate-400 pointer-events-none hidden" /> 
                        </div>
                        <span className="text-sm text-slate-500 whitespace-nowrap">Any time between</span>
                        <div className="flex gap-2 w-full md:w-auto items-center">
                            <div className="relative w-full md:w-32">
                                <select 
                                    name="startTime"
                                    value={formData.startTime}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-black bg-white appearance-none focus:outline-none focus:border-brand-red cursor-pointer"
                                >
                                    <option>7:00 AM</option>
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-2 top-3.5 text-slate-400 pointer-events-none" />
                            </div>
                            <span className="self-center text-slate-400">-</span>
                            <div className="relative w-full md:w-32">
                                <select 
                                    name="endTime"
                                    value={formData.endTime}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-black bg-white appearance-none focus:outline-none focus:border-brand-red cursor-pointer"
                                >
                                    <option>8:00 AM</option>
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-2 top-3.5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* How Often */}
                <div className="mb-8 border-t border-gray-100 pt-6">
                    <h3 className="text-[16px] font-bold text-slate-700 mb-1">How Often?</h3>
                    <p className="text-[13px] text-slate-400 mb-6 leading-relaxed max-w-2xl">
                        It's all about matching you with the perfect cleaner for your home. Scheduling is flexible. Cancel or reschedule anytime.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['One Time Service', 'Weekly', 'Every 2 Weeks', 'Monthly'].map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setFrequency(opt)}
                                className={`py-4 px-2 text-sm font-bold rounded transition-colors border ${
                                    frequency === opt 
                                    ? 'bg-brand-red text-white border-brand-red' 
                                    : 'bg-white text-slate-600 border-gray-200 hover:border-brand-red hover:text-brand-red'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-4 border-t border-gray-100 mt-6">
                     <p className="text-sm text-slate-500 mb-6 mt-6">We will confirm your service request within 24 hours. Thank you very much!</p>
                     <button 
                        onClick={handleBookNow}
                        className="bg-brand-red text-white px-16 py-3.5 rounded-full font-bold uppercase tracking-wider hover:bg-[#003d80] transition-colors shadow-lg text-sm w-full md:w-auto"
                     >
                        Book Now
                     </button>
                </div>

            </div>


            {/* Right Column: Image */}
            <div className="lg:w-1/3 hidden lg:block border border-gray-200 border-l-0 rounded-r-sm">
                <img 
                    src="https://i.imgur.com/R60thSh.jpeg" 
                    alt="Cleaning Service Woman" 
                    className="w-full h-full object-cover rounded-r-sm"
                />
            </div>
            {/* Mobile Image (shown below form on mobile) */}
            <div className="lg:hidden w-full h-64 mt-[-1px] border border-gray-200 border-t-0 rounded-b-sm">
                <img 
                    src="https://i.imgur.com/R60thSh.jpeg" 
                    alt="Cleaning Service Woman" 
                    className="w-full h-full object-cover rounded-b-sm"
                />
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