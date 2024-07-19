import React from 'react';
import { Shield, Heart, Phone, FileText, Truck, Users, Pill, ShoppingBag } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">RIT First Responder Benefits Program</h1>
              <p className="text-2xl">Recruiting, Retaining, and Rewarding Volunteer First Responders</p>
            </div>
            <div className="mt-6 md:mt-0 text-center">
              <a href="https://www.healthserviceshub.com/account/promo" className="inline-block bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all">
                Sign Up For Free
              </a>
              <p className="text-sm mt-2">Use code RIT on the following page</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8 flex justify-center items-center">
            <img src="/emblem.jpg" alt="First Responder Firefighter Emblem" className="rounded-lg shadow-xl w-full max-w-xs" />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-semibold mb-6 text-blue-800">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              RIT First Responder Benefits Program is a non-profit organization launching a pilot with the intent to recruit, retain, and reward volunteer first responders. The volunteer first responder ranks have been declining at a rapid rate over the years and are now at catastrophic levels in the state and across the country.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={Shield}
              title="Life Insurance"
              description="$50,000 of Guaranteed Issue life insurance coverage to help financially protect your family. Includes will preparation services."
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
              icon={Truck}
              title="Roadside Assistance and Mechanical Repair"
              description="24/7 emergency roadside assistance in the US and Canada. Up to $250 per mechanical repair, $500 total annually."
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
            <BenefitCard
              icon={ShoppingBag}
              title="Member Discount Marketplace"
              description="Discounts on travel, tickets, electronics, home and family products, food, local deals, and much more."
            />
          </div>
        </section>

        <section className="bg-blue-100 p-8 rounded-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="lg:w-2/3 lg:pr-8">
              <h2 className="text-4xl font-semibold mb-4 text-blue-800">Get Involved</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Any Pennsylvania volunteer fire department can easily be included in the benefits program by contacting us today. Reward those that give back to your communities and let them reap the benefits from the RIT First Responder Program at no cost to you.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-4 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-4">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800">Contact Us</h3>
                    <p className="mb-2"><strong>Program Contact:</strong> Brooks Stahlnecker</p>
                    <p className="mb-2"><strong>Email:</strong> RITbenefits@gmail.com</p>
                    <p><strong>Phone:</strong> 570-279-6099</p>
                  </div>
                  <div className="flex flex-col items-center md:items-center w-full md:w-auto">
                    <a href="https://www.healthserviceshub.com/account/promo" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-center">
                      Sign Up For Free
                    </a>
                    <p className="text-sm mt-2 text-gray-600 md:text-center">Use Code RIT on the following page</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center items-center mt-6 lg:mt-0">
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
