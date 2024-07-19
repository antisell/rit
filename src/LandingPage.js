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
      {/* Header and other sections remain unchanged */}

      <section className="bg-blue-100 p-8 rounded-xl">
        <h2 className="text-4xl font-semibold mb-4 text-blue-800">Get Involved</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Any Pennsylvania volunteer fire department can easily be included in the benefits program by contacting us today. Reward those that give back to your communities and let them reap the benefits from the RIT First Responder Program at no cost to you.
        </p>
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0 lg:mr-6 w-full lg:w-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Contact Us</h3>
            <p className="mb-2"><strong>Program Contact:</strong> Brooks Stahlnecker</p>
            <p className="mb-2"><strong>Email:</strong> RITbenefits@gmail.com</p>
            <p><strong>Phone:</strong> 570-279-6099</p>
          </div>
          <div className="flex flex-col justify-center mb-6 lg:mb-0 lg:mx-6">
            <a href="https://www.healthserviceshub.com/account/promo" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-center">
              Sign Up For Free
            </a>
            <p className="text-sm mt-2 text-gray-600 text-center">Use Code RIT on the following page</p>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <img src="/usi.png" alt="USI Affinity" className="w-32 lg:w-40" />
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 RIT First Responder Benefits Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
