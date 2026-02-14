import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { AboutUsPage } from './components/AboutUsPage';
import { CleaningServicesPage } from './components/CleaningServicesPage';
import { SpecialServicesPage } from './components/SpecialServicesPage';
import { ScheduleCleaningPage } from './components/ScheduleCleaningPage';
import { CustomersPage } from './components/CustomersPage';
import { EmploymentPage } from './components/EmploymentPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ContactsPage } from './components/ContactsPage';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden text-slate-600 font-sans">
      <TopBar />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <AboutUsPage />}
        {currentPage === 'cleaning-services' && <CleaningServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'special-emergency-cleaning' && <SpecialServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'schedule-cleaning' && <ScheduleCleaningPage />}
        {currentPage === 'customers' && <CustomersPage onNavigate={handleNavigate} />}
        {currentPage === 'employment' && <EmploymentPage />}
        {currentPage === 'reviews' && <ReviewsPage />}
        {currentPage === 'contacts' && <ContactsPage />}
        
        {/* Fallback for other pages to Home for now or a placeholder */}
        {!['home', 'about', 'cleaning-services', 'special-emergency-cleaning', 'schedule-cleaning', 'customers', 'employment', 'reviews', 'contacts'].includes(currentPage) && (
            <div className="py-20 text-center container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-slate-700">Coming Soon</h2>
                <p className="text-slate-500 mb-8">The <span className="font-bold text-brand-red uppercase">{currentPage.replace('-', ' ')}</span> page is currently under construction.</p>
                <button 
                    onClick={() => handleNavigate('home')}
                    className="bg-brand-red text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors uppercase tracking-wide text-sm"
                >
                    Return Home
                </button>
            </div>
        )}
      </main>

      <Footer />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-red text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50 animate-fade-in"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}