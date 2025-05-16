import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-theme-main/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="max-w-md w-full bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6 font-header tracking-tight">
          Create Your Account
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-theme-main focus:border-theme-main"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="font-satoshi w-full bg-theme-main hover:bg-theme-dark text-white px-5 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-theme-main hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default GetStarted;
