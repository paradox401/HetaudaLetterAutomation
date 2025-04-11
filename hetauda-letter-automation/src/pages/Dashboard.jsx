import React from "react";
import "./Dashboard.css";
import { assets } from "../assets/assets";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 flex justify-center items-center gap-4 mb-2">
            <img src={assets.logo} alt="Logo" id="logo" className="h-12" />
            शिक्षा शाखा पत्र व्यवस्थापन
          </h1>
          <p className="text-gray-600 text-lg">हेटौंडा उपमहानगरपालिका</p>
        </header>

        {/* Cards aligned vertically */}
        <div className="flex flex-col items-center gap-12">
          <Card
            title="✍️ पत्र तयार गर्नुहोस्"
            subtitle="नयाँ पत्र बनाउने फारम"
            link="HetaudaLetterAutomation/create"
            color="bg-blue-600"
          />
          <Card
            title="🕘 पत्र इतिहास"
            subtitle="अघिल्लो पत्रहरू हेर्नुहोस्"
            link="/history"
            color="bg-green-600"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, subtitle, link }) {
  return (
    <a
      href={link}
      className="link w-[80vw] md:w-[60vw] max-w-2xl rounded-3xl overflow-hidden group transition-transform duration-300 hover:scale-105"
    >
      {/* Gradient border effect using padding */}
      <div className="p-1 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        {/* Inner card with background and padding */}
        <div className="h-56 rounded-3xl bg-white p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-extrabold mb-2 flex items-center gap-2 text-gray-800">
              <span className="text-blue-500 animate-pulse">✨</span> {title}
            </h2>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
          <div className="text-right text-sm italic text-gray-400 group-hover:text-gray-600 transition-colors">
            थिच्नुहोस् →
          </div>
        </div>
      </div>
    </a>
  );
}







