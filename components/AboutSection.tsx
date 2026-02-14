import React, { useState } from 'react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('some-words');

  return (
    <div className="bg-white py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 transition-all duration-300 ease-in-out">
                
                {/* Left Column containing Title, Tabs and Text Content. 
                    Expands width for 'with-us' tab to accommodate the grid layout. 
                */}
                <div className={`${activeTab === 'with-us' ? 'lg:w-8/12' : 'lg:w-5/12'} z-10 transition-all duration-500`}>
                    <h2 className="text-3xl md:text-4xl text-slate-700 font-bold mb-6">About Our Company</h2>
                    
                    {/* Tabs - Scrollable on mobile */}
                    <div className="flex overflow-x-auto pb-2 space-x-4 mb-8 text-xl font-medium border-b border-gray-100 no-scrollbar whitespace-nowrap">
                        <button 
                            onClick={() => setActiveTab('some-words')}
                            className={`transition-colors focus:outline-none ${activeTab === 'some-words' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'}`}
                        >
                            Some Words
                        </button>
                        <span className="text-gray-300">|</span>
                        <button 
                            onClick={() => setActiveTab('how-it-works')}
                            className={`transition-colors focus:outline-none ${activeTab === 'how-it-works' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'}`}
                        >
                            How it Works
                        </button>
                         <span className="text-gray-300">|</span>
                        <button 
                            onClick={() => setActiveTab('with-us')}
                            className={`transition-colors focus:outline-none ${activeTab === 'with-us' ? 'text-brand-red' : 'text-slate-600 hover:text-brand-red'}`}
                        >
                            With Us
                        </button>
                    </div>

                    {/* Content Area for Text */}
                    <div className="min-h-[200px]">
                        {/* Content: Some Words */}
                        {activeTab === 'some-words' && (
                            <div className="animate-fade-in text-slate-500 leading-relaxed text-base space-y-4 text-justify">
                                <p>
                                    Locally owned, Precision Point Cleaning has years of experience to tackle any commercial cleaning need you have. Every employee is trained specifically for the job they'll perform.
                                </p>
                                <p>
                                    We recognize the importance of Flood and Fire emergencies and the issues that come from them. We have opened our Flood Clean-up & Emergency Services Division. Our team of technicians have certifications in Flood, Fire Restoration, Mold Remediation, Crime Scene Clean-up, Disaster Clean-up and Lead Paint Removal.
                                </p>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">We Provide</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[15px] text-slate-500">
                                        <div className="flex items-center"><span className="text-brand-red mr-2">✓</span> One-off, weekly or fortnightly visits</div>
                                        <div className="flex items-center"><span className="text-brand-red mr-2">✓</span> Keep the same cleaner for every visit</div>
                                        <div className="flex items-center"><span className="text-brand-red mr-2">✓</span> Vetted & background-checked cleaners</div>
                                        <div className="flex items-center"><span className="text-brand-red mr-2">✓</span> All cleaning materials and equipment</div>
                                        <div className="flex items-center"><span className="text-brand-red mr-2">✓</span> Online booking and payment</div>
                                        <div className="flex items-center"><span className="text-brand-red mr-2">✓</span> 100% satisfaction guarantee</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Content: How it Works (Left Text) */}
                        {activeTab === 'how-it-works' && (
                            <div className="animate-fade-in text-slate-500 leading-relaxed text-base space-y-6">
                                <h3 className="text-xl font-bold text-slate-700 mb-2">How Cleaning Company Works</h3>
                                <p>
                                    When the weekend finally arrives, you’d much rather put your feet up while a cleaning service does the work, rather than spend your precious downtime on your hands and knees scrubbing.
                                </p>
                                <p>
                                    Taking the stress out of any aspect of cleaning is what we specialise in. We will come to your premises and offer a free quote, so you know exactly what you’ll be spending.
                                </p>
                            </div>
                        )}

                        {/* Content: With Us (2x2 Grid) */}
                        {activeTab === 'with-us' && (
                            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-2">
                                {/* Item 1 */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-baseline">
                                        <span className="text-brand-red font-bold text-xl mr-2">1.</span>
                                        We treat your company like ours
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed pl-6">
                                        At The Cleaning Company, we are fully bonded and insured, meaning you can rest assured when we come into your business.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-baseline">
                                        <span className="text-brand-red font-bold text-xl mr-2">2.</span>
                                        Satisfaction Guaranteed
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed pl-6">
                                        Our cleaning crew are professionally trained, and if you're ever unhappy with any area we've cleaned, we'll and reclean it next day.
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-baseline">
                                        <span className="text-brand-red font-bold text-xl mr-2">3.</span>
                                        Immediate Online Quotes
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed pl-6">
                                        Upcoming party? Expecting guests? We'll give an immediate price quote so you can enjoy your time rather than worry about the mess.
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-baseline">
                                        <span className="text-brand-red font-bold text-xl mr-2">4.</span>
                                        We Are Experts
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed pl-6">
                                        We are dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column Content */}
                <div className={`${activeTab === 'with-us' ? 'lg:w-4/12' : 'lg:w-7/12'} relative transition-all duration-500 mt-8 lg:mt-0`}>
                     {activeTab === 'how-it-works' ? (
                         <div className="flex flex-col md:flex-row h-full animate-fade-in gap-8">
                            {/* Steps Column - Aligned to top to match left text */}
                            <div className="md:w-1/2 flex flex-col justify-start space-y-6 pt-1">
                                {/* Step 1 */}
                                <div>
                                    <h4 className="text-[16px] font-bold text-slate-800 mb-1">
                                        Book online in <span className="text-brand-red">60 seconds</span>
                                    </h4>
                                    <p className="text-slate-500 text-[14px] leading-relaxed">
                                        Book & pay online. We'll match you with a trusted, experienced house cleaner
                                    </p>
                                </div>

                                {/* Step 2 */}
                                 <div>
                                    <h4 className="text-[16px] font-bold text-slate-800 mb-1">
                                        Get a <span className="text-brand-red">5 star cleaner</span>
                                    </h4>
                                    <p className="text-slate-500 text-[14px] leading-relaxed">
                                        Every cleaner is friendly and reliable. They've been background-checked & rated 5-stars
                                    </p>
                                </div>

                                {/* Step 3 */}
                                 <div>
                                    <h4 className="text-[16px] font-bold text-slate-800 mb-1">
                                        Manage everything <span className="text-brand-red">online</span>
                                    </h4>
                                    <p className="text-slate-500 text-[14px] leading-relaxed">
                                        Add visits, skip visits, leave notes, and book extra services laundry and oven cleaning
                                    </p>
                                </div>
                            </div>
                            
                            {/* Image Column for How it Works */}
                            <div className="md:w-1/2 flex items-end justify-center">
                                <img 
                                    src="https://i.imgur.com/i1nkIT8.png"
                                    alt="Cleaning Lady with Bucket"
                                    className="max-h-[350px] md:max-h-[450px] w-auto object-contain translate-y-4" 
                                />
                            </div>
                         </div>
                     ) : (
                        /* Default Image for other tabs (Includes 'With Us') */
                        <div className="w-full h-full flex justify-center lg:justify-end items-center animate-fade-in relative">
                            <img 
                                src="https://i.imgur.com/i1nkIT8.png"
                                alt="Professional Cleaner"
                                className={`max-w-full h-auto object-contain relative z-10 ${activeTab === 'with-us' ? 'max-h-[350px] lg:max-h-[450px]' : 'max-h-[400px] lg:max-h-[500px]'}`}
                            />
                        </div>
                     )}
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
            .no-scrollbar::-webkit-scrollbar {
                display: none;
            }
            .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `}</style>
    </div>
  );
};