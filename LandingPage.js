import React from 'react';
import { Shield, Heart, Phone, FileText, Truck, Users } from 'lucide-react';

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
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4">RIT First Responder Benefits Program</h1>
            <p className="text-2xl">Recruiting, Retaining, and Rewarding Volunteer First Responders</p>
          </div>
          <div className="w-1/2">
            <img src="/api/placeholder/600/400" alt="First Responders in Action" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 flex items-center">
          <div className="w-1/2 pr-8">
            <img src="/emblem.jpg" alt="RIT Logo" className="rounded-lg shadow-xl w-1/2" />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-4xl font-semibold mb-6 text-blue-800">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We are a non-profit organization launching a pilot program to address the critical decline in volunteer first responder ranks. Our goal is to make a positive impact in all communities by increasing the number of volunteer first responders through recruitment, retention, and reward initiatives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The initial phase of our program is set to launch July 1, 2024, offering a comprehensive affinity benefits package for all qualifying first responders at no cost to individuals or fire departments.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-center text-blue-800">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={Shield}
              title="Life Insurance"
              description="$50,000 of Guaranteed Issue life insurance coverage to protect your family."
            />
            <BenefitCard
              icon={Heart}
              title="Wellness Program"
              description="Access to health resources, articles, recipes, and wellness tips."
            />
            <BenefitCard
              icon={Phone}
              title="Telemedicine"
              description="Unlimited urgent virtual appointments for volunteers and their families."
            />
            <BenefitCard
              icon={FileText}
              title="Financial Education"
              description="18 self-paced modules to improve your financial wellness."
            />
            <BenefitCard
              icon={Truck}
              title="Roadside Assistance"
              description="24/7 emergency roadside assistance in the US and Canada."
            />
            <BenefitCard
              icon={Users}
              title="Counseling Services"
              description="Support for work-related stress and trauma recovery."
            />
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-100 to-blue-200 p-12 rounded-xl shadow-lg">
          <div className="flex items-center">
            <div className="w-2/3 pr-8">
              <h2 className="text-4xl font-semibold mb-6 text-blue-800">Get Involved</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Any Pennsylvania volunteer fire department can easily be included in the benefits program. Reward those who give back to your communities with the RIT First Responder Program at no cost to you.
              </p>
              <div className="bg-white p-6 rounded-md inline-block shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Contact Us</h3>
                <p className="mb-2"><strong>Program Contact:</strong> Brooks Stahlnecker</p>
                <p className="mb-2"><strong>Email:</strong> RITbenefits@gmail.com</p>
                <p><strong>Phone:</strong> 570-279-6099</p>
              </div>
            </div>
            <div className="w-1/3">
              <img src="/usi.png" alt="USI Logo" className="rounded-lg shadow-xl w-1/4" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 RIT First Responder Benefits Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
