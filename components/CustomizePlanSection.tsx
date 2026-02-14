import React from 'react';

export const CustomizePlanSection: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img 
                src="https://i.imgur.com/yQnPjzG.jpeg" 
                alt="Summer Cleaning Special" 
                className="w-full h-auto object-contain rounded-sm"
            />
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2 pt-2">
            <h2 className="text-2xl md:text-3xl lg:text-[34px] text-slate-700 font-bold mb-6 md:mb-8 leading-tight">
              Customize a Cleaning Plan That Works For You
            </h2>
            
            <div className="space-y-6 text-slate-500 text-base md:text-[17px] leading-[1.7]">
                <p>
                    At Precision Point Cleaning, we provide personalized cleaning services. After a thorough evaluation of your cleaning requirements, we'll create a custom plan that uses the best methods, products, and staff.
                </p>
                <p>
                    Whether you require daily, weekly, monthly, or semiannual cleaning, we can accommodate any schedule and budget. Through close and regular communication, we'll make sure all aspects of the job are addressed in a timely and efficient manner. Services can be completed within 24 hours, and quotes are provided the same day.
                </p>
                <p>
                    We oversee and manage our employees throughout the duration of your job to guarantee your peace of mind and satisfaction.
                </p>
                <p>
                    Once a proposal has been accepted, we'll schedule your service and detail the specific tasks day-by-day. You'll get a copy of the schedule, we provide one for the cleaners to keep in the janitor's closet, and we keep one on file. This makes sure your expectations and ours are the same.
                </p>
                <p>
                    Leave the dirty work to us and <a href="#" className="text-slate-700 underline hover:text-brand-red decoration-1 underline-offset-4 transition-colors">contact</a> us today.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};