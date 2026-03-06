import React, { useState, useEffect } from 'react';
import { Check, Star, MapPin, Phone, ChevronLeft, ChevronRight, Shield, Zap, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const testimonials = [
  {
    text: "Precision Point handled our post-construction cleanup perfectly. The site was inspection-ready in 48 hours. Highly recommend their commercial crew!",
    author: "Sarah J.",
    role: "Project Manager",
    rating: 5
  },
  {
    text: "We've used their janitorial services for our office for over a year. Consistent, professional, and always on time. Best cleaning company in the region.",
    author: "Michael R.",
    role: "Facility Director",
    rating: 5
  },
  {
    text: "When we needed emergency snow removal for our retail lot, they responded immediately. Their reliability is unmatched.",
    author: "David L.",
    role: "Store Owner",
    rating: 5
  },
  {
    text: "The deep cleaning they did for our gym was incredible. Our members noticed the difference immediately. They are now our go-to partners.",
    author: "Jessica M.",
    role: "Gym Owner",
    rating: 5
  },
  {
    text: "Professional, thorough, and efficient. They handled our restaurant's kitchen deep clean with precision. Passed inspection with flying colors!",
    author: "Robert T.",
    role: "Restaurant Manager",
    rating: 5
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    service: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          businessName: formData.businessName,
          phone: formData.phone,
          email: formData.email,
          serviceType: formData.service,
          city: formData.city
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        window.location.href = '/thank-you.html';
        
        setFormData({
          name: '',
          businessName: '',
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
      {/* 2️⃣ Hero Section - More Aggressive */}
      <section className="relative bg-slate-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://i.imgur.com/ze8WcXL.jpeg" 
            alt="Commercial Cleaning Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-6">
                #1 Commercial Cleaning in Massachusetts
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase">
                Expert <span className="text-brand-red">Restaurant</span> & Commercial Cleaning.
              </h1>
              <p className="text-2xl md:text-3xl text-slate-200 mb-10 font-medium leading-relaxed">
                We specialize in <span className="text-white font-bold">Restaurant Kitchens</span>, Offices, and Gyms. Inspection-ready results guaranteed.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <Shield size={20} />, text: 'Fully Licensed & Insured' },
                  { icon: <Zap size={20} />, text: 'Same-Week Service Guaranteed' },
                  { icon: <Clock size={20} />, text: '24/7 Emergency Response' },
                  { icon: <Check size={20} />, text: '100% Satisfaction Guarantee' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-white font-bold text-lg">
                    <div className="bg-brand-red p-2 rounded-lg mr-4 shadow-lg shadow-brand-red/20">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  id="home-hero-estimate-button"
                  onClick={() => onNavigate ? onNavigate('estimate-form') : null}
                  className="bg-brand-red text-white px-12 py-5 rounded-full font-black uppercase tracking-wider hover:bg-blue-800 transition-all text-center shadow-2xl hover:scale-105 transform active:scale-95 text-lg"
                >
                  Get My Free Quote Now
                </button>
                <a 
                  id="home-hero-call-now-link"
                  href="tel:6173720093"
                  className="bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-wider hover:bg-slate-100 transition-all text-center flex items-center justify-center shadow-xl hover:scale-105 transform active:scale-95 text-lg"
                >
                  <Phone size={24} className="mr-3" />
                  (617) 372-0093
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Testimonial Slider Section */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase">What Our Clients Say</h2>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FFD700" color="#FFD700" />)}
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Trusted by 500+ Businesses Across the Region</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden px-4 py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-50 p-10 md:p-16 rounded-3xl border border-slate-100 shadow-xl relative"
                >
                  <span className="text-8xl text-brand-red font-serif absolute -top-4 left-8 opacity-10">"</span>
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white text-2xl font-black mr-4 shadow-lg">
                      {testimonials[currentTestimonial].author[0]}
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-xl">{testimonials[currentTestimonial].author}</p>
                      <p className="text-brand-red font-bold uppercase tracking-widest text-sm">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-4 rounded-full shadow-2xl text-slate-900 hover:bg-brand-red hover:text-white transition-all z-20 border border-slate-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-4 rounded-full shadow-2xl text-slate-900 hover:bg-brand-red hover:text-white transition-all z-20 border border-slate-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 4️⃣ Expertise Section */}
      <section className="py-24 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-brand-red font-black uppercase tracking-widest mb-4">Our Specialized Expertise</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase">We Clean What Others Miss</h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Don't risk your business reputation with subpar cleaning. Our crews are trained for high-stakes environments where cleanliness isn't just a preference—it's a requirement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Restaurant Specialists",
                desc: "Deep degreasing and sanitization for kitchens and dining areas. We ensure you pass every health inspection.",
                image: "https://i.imgur.com/0Ut4r6C.jpeg"
              },
              {
                title: "Post Construction",
                desc: "Site-ready results. We remove every trace of dust and debris so you can hand over the keys with confidence.",
                image: "https://i.imgur.com/pk55fix.jpeg"
              },
              {
                title: "Offices & Gyms",
                desc: "High-traffic sanitization. We keep your workspace and fitness centers healthy, organized, and professional.",
                image: "https://i.imgur.com/ssA694n.jpeg"
              },
              {
                title: "Window & Exterior",
                desc: "First impressions matter. We keep your storefront and windows crystal clear and inviting.",
                image: "https://i.imgur.com/rgdP33T.jpeg"
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border border-slate-100 group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://i.imgur.com/g0HDEkq.jpeg" 
                alt="Professional Cleaning Crew" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-red/10 rounded-full -z-0 blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-800/10 rounded-full -z-0 blur-3xl"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 uppercase leading-tight">Why Businesses <span className="text-brand-red">Trust</span> Us</h2>
              <div className="space-y-8">
                {[
                  { title: "Specialized Commercial Crews", desc: "We don't do residential 'tidying'. We do heavy-duty commercial sanitization." },
                  { title: "Inspection-Ready Guarantee", desc: "If you don't pass your cleanliness inspection, we'll come back for free." },
                  { title: "Zero Disruption Policy", desc: "We work while you sleep. Your business stays operational and spotless." },
                  { title: "Direct Communication", desc: "No call centers. You get a dedicated account manager for every project." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="bg-brand-red text-white p-3 rounded-2xl mr-6 mt-1 shadow-lg shadow-brand-red/20 group-hover:scale-110 transition-transform">
                      <Check size={24} strokeWidth={4} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Lead Capture Section - High Conversion */}
      <section id="estimate-form" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 p-12 md:p-16 bg-slate-800 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-black mb-8 uppercase leading-tight">Get Your <span className="text-brand-red">Free</span> Quote Today</h2>
              <p className="text-slate-300 mb-10 text-xl leading-relaxed">Stop worrying about cleanliness. Let the professionals handle it while you focus on your business.</p>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-slate-700/50 rounded-2xl border border-slate-600">
                  <Phone size={24} className="text-brand-red mr-5" />
                  <span className="font-black text-xl">(617) 372-0093</span>
                </div>
                <div className="flex items-center p-4 bg-slate-700/50 rounded-2xl border border-slate-600">
                  <MapPin size={24} className="text-brand-red mr-5" />
                  <span className="font-black text-lg">Serving All of Massachusetts</span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name*" 
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold"
                  />
                  <input 
                    type="text" 
                    name="businessName"
                    placeholder="Business Name" 
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number*" 
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold"
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address*" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold appearance-none cursor-pointer"
                  >
                    <option value="">Type of Service*</option>
                    <option value="Restaurant Cleaning">Restaurant Cleaning</option>
                    <option value="Residential Cleaning">Residential Cleaning</option>
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
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold"
                  />
                </div>
                <button 
                  id="home-estimate-form-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl mt-4 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'Processing...' : 'Get My Free Estimate Now'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 font-black text-center mt-4">Success! Our team will contact you shortly.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 font-black text-center mt-4">Failed to send request. Please try again or call us.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Urgency Section */}
      <section className="py-20 bg-brand-red text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight">Need It Done <span className="underline decoration-white decoration-8 underline-offset-8">Yesterday</span>?</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">We specialize in urgent, high-pressure cleaning projects. Don't let a dirty site delay your opening or inspection.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-[2rem] border border-white/20 shadow-2xl">
              <p className="text-white font-black text-4xl mb-1">FAST</p>
              <p className="text-sm uppercase tracking-widest font-bold opacity-80">24h Turnaround</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-[2rem] border border-white/20 shadow-2xl">
              <p className="text-white font-black text-4xl mb-1">SAME-WEEK</p>
              <p className="text-sm uppercase tracking-widest font-bold opacity-80">Guaranteed Slots</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent opacity-50"></div>
      </section>
    </div>
  );
};
