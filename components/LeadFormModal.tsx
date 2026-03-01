import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential Cleaning'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setIsSuccess(true);
      sessionStorage.setItem('lead_form_submitted', 'true');
      
      // Auto close after 5 seconds on success
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch {
      setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-blue-800" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              {!isSuccess ? (
                <>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-brand-red/10 rounded-2xl text-brand-red">
                      <Sparkles size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Get Your Free Quote</h2>
                      <p className="text-slate-500 text-sm font-medium">Let us know how we can help you today!</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Full Name</label>
                      <input 
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-red focus:bg-white outline-none transition-all font-medium"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel"
                          placeholder="(000) 000-0000"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-red focus:bg-white outline-none transition-all font-medium"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Email Address</label>
                        <input 
                          required
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-red focus:bg-white outline-none transition-all font-medium"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1 ml-1">Service Type</label>
                      <select 
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-red focus:bg-white outline-none transition-all font-medium appearance-none"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      >
                        <option>Residential Cleaning</option>
                        <option>Commercial Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Move In/Out Cleaning</option>
                        <option>Post-Construction</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-brand-red text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Request</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-500 rounded-full mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter mb-4">Success!</h2>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    Seu formulário foi enviado com sucesso e em alguns instantes nossa equipe entrará em contato com você.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-700 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
