import React, { useState } from 'react';
import { Phone, MapPin, Check } from 'lucide-react';

export const EstimatePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceType: formData.service,
          city: formData.city
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          city: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase">Request a Free Estimate</h1>
            <p className="text-lg text-slate-600">Get a professional quote for your commercial or post-construction cleaning project.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 bg-slate-900 text-white">
              <h2 className="text-3xl font-black mb-6 uppercase">Contact Info</h2>
              <p className="text-slate-300 mb-8 text-lg">Prefer to talk? Give us a call or send an email directly.</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-brand-red p-2 rounded-lg mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Call Us</p>
                    <p className="font-bold text-xl">(617) 372-0093</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-brand-red p-2 rounded-lg mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider">Service Area</p>
                    <p className="font-bold">MA & Neighboring States</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800">
                <h3 className="text-xl font-bold mb-4">Why Precision Point?</h3>
                <ul className="space-y-3">
                  {['Licensed & Insured', 'Same-Week Availability', 'Commercial Specialists'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <Check size={16} className="text-brand-red mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 p-10 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name*</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number*</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="(000) 000-0000" 
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address*</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Type of Service*</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors bg-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Post-Construction">Post-Construction</option>
                    <option value="Office Janitorial">Office Janitorial</option>
                    <option value="Snow Removal">Snow Removal</option>
                    <option value="Floor Work">Floor Work</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">City*</label>
                  <input 
                    type="text" 
                    name="city"
                    placeholder="Boston, MA" 
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-white py-4 rounded-full font-black uppercase tracking-wider hover:bg-blue-800 transition-all shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request My Free Estimate'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-xl mt-4">
                    <p className="text-green-700 font-bold text-center">Em breve nossa equipe entrará em contato</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl mt-4">
                    <p className="text-red-700 font-bold text-center">Failed to send request. Please try again.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
