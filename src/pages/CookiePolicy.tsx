import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy & Cookie Policy</h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            At ChitChat, we are committed to protecting your privacy and ensuring transparency in how we handle your data. This Privacy & Cookie Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or signing up for our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken.
            </li>
            <li>
              <strong>Cookies:</strong> Small text files stored on your device to enhance functionality and analyze usage.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Provide and improve our services.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Analyze website usage to enhance user experience.</li>
            <li>Send updates, promotional materials, and other communications (with your consent).</li>
          </ul>
        </section>

        {/* Cookie Usage */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cookie Usage</h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are used to improve functionality, analyze usage, and enhance user experience. You can manage your cookie preferences through your browser settings. Note that disabling cookies may impact the functionality of our website.
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or share your personal information with third parties, except as necessary to provide our services or comply with legal obligations.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections to inaccurate or incomplete data.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt out of receiving promotional communications.</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy & Cookie Policy, please contact us at:
          </p>
          <ul className="list-none text-gray-700 leading-relaxed space-y-2">
            <li>
              <strong>Email:</strong> <a href="mailto:privacy@chitchat.com" className="text-theme-main hover:underline">privacy@chitchat.com</a>
            </li>
            <li>
              <strong>Address:</strong> 123 Business Lane, Suite 456, Tech City, TX 78901
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
          </ul>
        </section>

        {/* Updates to Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy & Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
