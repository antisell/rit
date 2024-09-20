import React from 'react';
import { FileText, Users, Heart, Pill, Phone, ShoppingBag, Shield, Car } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, isHighlighted = false, isComingSoon = false }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all ${
    isHighlighted 
      ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 relative overflow-hidden transform hover:-translate-y-1' 
      : ''
  }`}>
    {isHighlighted && (
      <>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-yellow-200 opacity-50"></div>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-32 h-64 bg-yellow-100 opacity-30"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                transformOrigin: 'bottom',
                clipPath: 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)',
              }}
            ></div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute transform rotate-45 bg-blue-600 text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
            PREQUALIFIED
          </div>
        </div>
      </>
    )}
    <div className="relative z-10">
      <Icon className={`w-16 h-16 mb-4 ${isHighlighted ? 'text-blue-800' : 'text-blue-600'}`} />
      <h3 className={`text-2xl font-bold mb-2 ${isHighlighted ? 'text-blue-900' : ''}`}>{title}</h3>
      <p className={`text-lg ${isHighlighted ? 'text-blue-800' : 'text-gray-600'}`}>{description}</p>
      {isComingSoon && (
        <div className="mt-4 inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Coming Soon - 10/1/2024
        </div>
      )}
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">First Responder Wellness Program</h1>
              <p className="text-2xl">Rewarding, Retaining, and Recruiting for the Future</p>
            </div>
            <div className="mt-6 md:mt-0 text-center flex flex-col items-center">
              <a href="https://www.healthserviceshub.com/account/promo" className="inline-block bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all mb-2 w-full">
                Sign Up For Free
              </a>
              <p className="text-sm mb-6">Use code RIT on the following page</p>
              <a href="https://ritfirstresponder.org/login" className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all w-full">
                Login
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8 flex justify-center items-center">
            <img src="/RIT_Logo.png" alt="RIT First Responder Logo" className="rounded-lg shadow-xl w-full max-w-xs" />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-semibold mb-6 text-blue-800">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              RIT First Responder Wellness Program is a non-profit organization launching a pilot with the intent to recruit, retain, and reward volunteer first responders. The volunteer first responder ranks have been declining at a rapid rate over the years and are now at catastrophic levels in the state and across the country.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our organization and associated programs intend to make a positive impact in all communities by increasing the number of volunteer first responders. We are raising funds to help recruit, retain, and reward volunteer first responders.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              All qualifying First Responders* will receive the following benefits at no cost to the individual or fire department.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              *Qualifying First Responders is defined as any team member that is important to day-to-day operations at your Station is eligible for the covered benefits program. This can include team members that are NOT front-line responders.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-center text-blue-800">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <BenefitCard
                icon={Shield}
                title="Life Insurance"
                description="$50,000 of life insurance benefit for first responders age 64 and under. Automatic enrollment upon registration."
                isHighlighted={true}
                isComingSoon={true}
              />
            </div>
            <BenefitCard
              icon={Car}
              title="Motor Club"
              description="24/7 roadside assistance including tows, battery service, emergency fluid delivery, and more. Includes reimbursement for repairs up to $500."
              isComingSoon={true}
            />
            <BenefitCard
              icon={FileText}
              title="Financial Fire Drill"
              description="Financial wellness course with 18 self-paced modules to walk you through filling out financial Fire Drill."
            />
            <BenefitCard
              icon={Users}
              title="First Responder Assistance Program"
              description="Counseling services providing resources and support to prepare for, respond to, and recover from work-related stress and trauma."
            />
            <BenefitCard
              icon={Heart}
              title="Lifestyle/Wellness Education Platform"
              description="Daily updated resources including health articles, recipes, mindfulness tips, exercise guides, and health risk assessments."
            />
            <BenefitCard
              icon={Pill}
              title="Pharmacy Discount"
              description="Access to discounts up to 80% on most prescription drugs at pharmacies nationwide."
            />
            <BenefitCard
              icon={Phone}
              title="Telemedicine"
              description="Unlimited urgent virtual appointments for volunteers and their families (up to age 26 when living in the same household)."
            />
            <div className="md:col-span-2 flex justify-center">
              <div className="md:w-1/2">
                <BenefitCard
                  icon={ShoppingBag}
                  title="Member Discount Marketplace"
                  description="Discounts on travel, tickets, electronics, home and family products, food, local deals, and much more."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-100 p-8 rounded-xl">
          <div className="flex flex-col lg:flex-row justify-between items-stretch">
            <div className="lg:w-2/3 lg:pr-8">
              <h2 className="text-4xl font-semibold mb-4 text-blue-800">Get Involved</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Any Pennsylvania volunteer fire department can easily be included in the benefits program by contacting us today. Reward those that give back to your communities and let them reap the benefits from the RIT First Responder Program at no cost to you.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-4 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">Contact Us</h3>
                    <p className="mb-2"><strong>Program Contact:</strong> Brooks Stahlnecker</p>
                    <p className="mb-2"><strong>Email:</strong> RITbenefits@gmail.com</p>
                    <p><strong>Phone:</strong> 570-279-6099</p>
                  </div>
                  <div className="flex flex-col items-center md:items-end">
                    <a href="https://www.healthserviceshub.com/account/promo" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-center">
                      Sign Up For Free
                    </a>
                    <p className="text-sm mt-2 text-gray-600 text-center">Use Code RIT on the following page</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0">
              <img src="/usi.png" alt="USI Affinity" className="w-32 lg:w-40" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 RIT First Responder Benefits Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
