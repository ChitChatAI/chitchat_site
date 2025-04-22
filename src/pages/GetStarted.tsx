import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6">
      <div className="max-w-md w-full bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
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
            className="w-full bg-theme-main hover:bg-theme-dark text-white py-2 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-theme-main hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
