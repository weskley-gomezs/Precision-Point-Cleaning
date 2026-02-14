import React from 'react';
import { Quote, Star } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
    const reviews = [
        {
            name: "Paula J",
            date: "12/17/2018",
            text: "I can't even tell you how happy I am with the job the crew form Precision Point did for me. My attic was filthy with 27 years of dust and dirt from a roofer pounding on a slate roof and even bat debris. It even smells good up there now. The crew was exceptional. I will be using them again in my cellar. I am thrilled with their work."
        },
        {
            name: "D Pierce dpi Denise Pierce I",
            date: "12/2/2018",
            text: "Precision Point Crew, you all were amazing and the homeowners were absolutely astounded by the transformation from a attacking a dust disaster post construction in such a short time! They are so Happy👍👍👍You made me looks like a hero as their Project Manager/Designer and I also can't thank you enough for coming to the rescue on such short notice! Eddy was wonderful in organizing his team and the attention to detail was superb. Thank you Diago for following up! Thank YOU ALL! Thanks 4 giving my clients a clean and happy home again right before the holiday!!!"
        },
        {
            name: "Jean S",
            date: "7/31/2018",
            text: "I find them to be professional and do the job very well. I would definitly use them again."
        }
    ];

    return (
        <div className="bg-white animate-fade-in">
            <div className="container mx-auto px-4 py-16">
                 {/* Header */}
                 <h1 className="text-3xl md:text-4xl text-slate-700 font-bold text-center mb-4">
                    Our Dear Clients Say
                </h1>
                <h2 className="text-xl text-slate-700 font-bold text-center mb-16">
                    Read what our happy customers are saying...
                </h2>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-0 max-w-7xl mx-auto">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col items-center px-6 relative ${
                                index !== reviews.length - 1 
                                ? 'lg:border-r lg:border-dashed lg:border-gray-300' 
                                : ''
                            }`}
                        >
                             <div className="flex items-start justify-center gap-3 mb-6 w-full relative">
                                <div className="absolute left-0 top-0 lg:static lg:block hidden">
                                     <Quote size={40} className="text-gray-200 fill-gray-200 transform scale-x-[-1] mt-[-5px]" />
                                </div>
                                <div className="lg:hidden absolute left-4 top-[-10px]">
                                     <Quote size={40} className="text-gray-200 fill-gray-200 transform scale-x-[-1]" />
                                </div>
                                
                                <h3 className="font-bold text-slate-700 text-[17px] text-center max-w-[220px] leading-tight z-10 pt-1">
                                    {review.name} - {review.date}
                                </h3>
                             </div>

                             <p className="text-slate-500 text-[15px] leading-relaxed text-center mb-8 flex-grow">
                                {review.text}
                             </p>

                             <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={18} className="text-amber-400 fill-amber-400" />
                                ))}
                             </div>
                        </div>
                    ))}
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