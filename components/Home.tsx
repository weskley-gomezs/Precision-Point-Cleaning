import React, { useState } from 'react';
import { Check, Star, MapPin, Phone } from 'lucide-react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
        
        // Reset form
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
    <div className="flex flex-col w-full">
      {/* 2️⃣ Hero Section */}
      <section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://i.imgur.com/Lb5KjFx.jpeg" 
            alt="Commercial Cleaning Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Expert Commercial & <span className="text-brand-red">Post-Construction</span> Cleaning in Massachusetts & Neighboring States
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 font-medium">
              Reliable, inspection-ready results for businesses and job sites. Fast scheduling and professional crews you can trust.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Licensed & Insured',
                'Same Week Service Available',
                'Serving MA & Neighboring States',
                'Commercial Specialists'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-white font-bold">
                  <div className="bg-brand-red p-1 rounded-full mr-3">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate ? onNavigate('estimate-form') : null}
                className="bg-brand-red text-white px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-blue-800 transition-all text-center shadow-xl"
              >
                Request Free Estimate
              </button>
              <a 
                href="tel:6173720093"
                className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-slate-100 transition-all text-center flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Trust Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FFD700" color="#FFD700" />)}
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Trusted by Business Owners Across the Region</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Precision Point handled our post-construction cleanup perfectly. The site was inspection-ready in 48 hours. Highly recommend their commercial crew!",
                author: "Sarah J., Project Manager"
              },
              {
                text: "We've used their janitorial services for our office for over a year. Consistent, professional, and always on time. Best cleaning company in the region.",
                author: "Michael R., Facility Director"
              },
              {
                text: "When we needed emergency snow removal for our retail lot, they responded immediately. Their reliability is unmatched.",
                author: "David L., Store Owner"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 italic text-slate-600 relative">
                <span className="text-4xl text-brand-red font-serif absolute top-4 left-4 opacity-20">"</span>
                <p className="mb-4 relative z-10">{t.text}</p>
                <p className="font-bold text-slate-800 not-italic">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Expertise Section (New) */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-brand-red font-bold mb-2">Expert Cleaning by</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Precision Point Cleaning</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our highly trained and experienced team delivers top-quality cleaning for all types of commercial environments — going beyond cleaning to create a healthier, safer, and spotless space for your business. Our highly trained and experienced team delivers top-quality cleaning for all types of commercial environments — going beyond cleaning to create a healthier, safer, and spotless space for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Post Construction Cleaning",
                desc: "After renovations or construction, we remove dust, debris, and residues, leaving your space spotless, safe, and ready to use.",
                image: "https://i.imgur.com/pk55fix.jpeg"
              },
              {
                title: "Office & Gym",
                desc: "We provide professional cleaning services for corporate offices and fitness centers, maintaining a sanitized, organized, and healthy environment for your employees and clients.",
                image: "https://i.imgur.com/ssA694n.jpeg"
              },
              {
                title: "Commercial Kitchen Deep Cleaning",
                desc: "We specialize in commercial kitchen deep cleaning for restaurants and food service facilities. Our team provides complete cleaning solutions, including floors, walls, hoods, and equipment, ensuring every area meets the highest hygiene and safety standards.",
                image: "https://i.imgur.com/0Ut4r6C.jpeg"
              },
              {
                title: "Window cleaning & Exterior cleaning",
                desc: "We specialize in commercial kitchen deep cleaning for restaurants and food service facilities. Our team provides complete cleaning solutions, including floors, walls, hoods, and equipment, ensuring every area meets the highest hygiene and safety standards.",
                image: "https://i.imgur.com/rgdP33T.jpeg"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full border border-slate-100 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Services Section */}

      {/* 5️⃣ Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://i.imgur.com/D2mtPVc.png" 
                alt="Professional Cleaning Crew" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase">Why Choose Precision Point?</h2>
              <div className="space-y-6">
                {[
                  { title: "Experienced Commercial Crews", desc: "Our teams are trained specifically for large-scale commercial and construction environments." },
                  { title: "Attention to Detail", desc: "We don't just clean; we inspect every corner to ensure perfection." },
                  { title: "Flexible Scheduling", desc: "We work around your business hours to minimize disruption." },
                  { title: "Fast Response", desc: "Need a quote or service fast? We pride ourselves on our quick turnaround times." },
                  { title: "Fully Insured & Compliant", desc: "Rest easy knowing we are fully covered and follow all safety regulations." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-brand-red/10 p-2 rounded-lg mr-4 mt-1">
                      <Check className="text-brand-red" size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Lead Capture Section */}
      <section id="estimate-form" className="py-20 bg-brand-red">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 bg-slate-900 text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">Get Your Free Estimate</h2>
              <p className="text-slate-300 mb-8 text-lg">Fill out this short form and our team will contact you within 24 hours to discuss your needs.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={20} className="text-brand-red mr-4" />
                  <span className="font-bold">(617) 372-0093</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="text-brand-red mr-4" />
                  <span className="font-bold">Serving MA & Neighboring States</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-10 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name*" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number*" 
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address*" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                />
                <select 
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors bg-transparent"
                >
                  <option value="">Type of Service*</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                  <option value="Post-Construction">Post-Construction</option>
                  <option value="Office Janitorial">Office Janitorial</option>
                  <option value="Snow Removal">Snow Removal</option>
                  <option value="Floor Work">Floor Work</option>
                </select>
                <input 
                  type="text" 
                  name="city"
                  placeholder="City*" 
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-slate-200 py-3 focus:border-brand-red outline-none transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-white py-4 rounded-full font-black uppercase tracking-wider hover:bg-blue-800 transition-all shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request My Free Estimate'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 font-bold text-center mt-2">Em breve nossa equipe entrará em contato</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 font-bold text-center mt-2">Failed to send request. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Urgency Section */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">Final Inspections Coming?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Don't let a dirty site slow you down. We offer same-week service for urgent commercial and post-construction needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-slate-800 px-8 py-4 rounded-2xl border border-slate-700">
              <p className="text-brand-red font-black text-2xl">FAST</p>
              <p className="text-sm uppercase tracking-widest font-bold">Turnaround</p>
            </div>
            <div className="bg-slate-800 px-8 py-4 rounded-2xl border border-slate-700">
              <p className="text-brand-red font-black text-2xl">SAME-WEEK</p>
              <p className="text-sm uppercase tracking-widest font-bold">Availability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
