import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <>
      <NavBar />

      <section className="bg-[#e8d6f4] min-h-screen py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#260a40] mb-4"
          >
            Our Business Model
          </motion.h1>

          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            There are three phases to any project:
          </p>

          <ul className="text-left text-gray-800 font-medium max-w-xl mx-auto mb-8 list-disc list-inside">
            <li>Persona development</li>
            <li>Persona integration and deployment</li>
            <li>Persona maintenance</li>
          </ul>

          <p className="text-gray-600 mb-6">
            Typical pricing and timelines look as follows: <br />
            <span className="italic">(All costs are in USD)</span>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#b788e5] text-white">
                <tr>
                  <th className="py-3 px-5">Item</th>
                  <th className="py-3 px-5">Unit</th>
                  <th className="py-3 px-5">Price (USD)</th>
                  <th className="py-3 px-5">Frequency</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="py-3 px-5 font-semibold">Persona Development</td>
                  <td className="py-3 px-5">Per persona</td>
                  <td className="py-3 px-5">$20,000.00</td>
                  <td className="py-3 px-5">Once off</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-5 font-semibold">Persona integration and deployment</td>
                  <td className="py-3 px-5">Per persona</td>
                  <td className="py-3 px-5">$5,000.00</td>
                  <td className="py-3 px-5">Per month for 3 months</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-5 font-semibold">Persona maintenance</td>
                  <td className="py-3 px-5">Per persona</td>
                  <td className="py-3 px-5">$500.00</td>
                  <td className="py-3 px-5">Per month for 21 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-gray-800">
            <p className="mb-3 font-semibold">
              The TCO looks as follows for a single persona:
            </p>
            <p className="mb-2">
              <strong>Once off:</strong> $20,000 + $15,000 + $10,500 = <span className="font-bold text-[#260a40]">$45,000</span>
            </p>
            <p>
              <strong>In ZAR terms (R19/$):</strong> R380,000 + R285,000 + R199,500 = <span className="font-bold text-[#260a40]">R864,500</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
