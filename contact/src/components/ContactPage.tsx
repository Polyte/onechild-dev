import React from 'react';
import { MapPin } from 'lucide-react';
import OneChildLogo from './OneChildLogo';
import SocialIcon from './SocialIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-4 py-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-end">
          <OneChildLogo variant="header" />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Left decorative bar */}
          <div className="fixed left-0 top-0 w-16 h-full bg-onechild-cream hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-onechild-blue via-onechild-yellow to-onechild-pink opacity-20"></div>
          </div>

          {/* Content Container */}
          <div className="lg:ml-20">
            {/* Hero Section */}
            <section className="mb-16">
              <h1 className="font-roboto-serif font-thin text-5xl md:text-6xl lg:text-7xl text-black mb-8 leading-tight">
                Hello
              </h1>
              <p className="font-raleway font-light text-xl md:text-2xl lg:text-3xl text-black leading-relaxed max-w-5xl">
                Whether you have questions about the campaign, want to contribute, or feel like sharing your own story, let us know.
              </p>
            </section>

            {/* Contact Details */}
            <section className="mb-20">
              <h2 className="font-roboto-serif font-thin text-3xl md:text-4xl text-black mb-8">
                Contact Details
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Main Office */}
                <div>
                  <h3 className="font-raleway font-light text-lg text-black mb-4">Main Office</h3>
                  <address className="font-raleway font-light text-lg text-black not-italic leading-relaxed">
                    Unit 61 & Unit 62,<br />
                    Sildale Park,<br />
                    Cnr Asetileen &, Conveyor Rd,<br />
                    Silvertondale,<br />
                    Pretoria 0184
                  </address>
                  
                  <div className="flex items-center mt-6">
                    <MapPin size={20} className="text-black mr-2" />
                    <a href="#" className="font-raleway font-light text-base text-black hover:text-onechild-blue transition-colors">
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <div className="mb-8">
                    <h3 className="font-raleway font-light text-lg text-black mb-4">Telephone</h3>
                    <p className="font-raleway font-light text-lg text-black">
                      Unit 61 & Unit 62
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-raleway font-light text-lg text-black mb-4">Email(s)</h3>
                    <p className="font-raleway font-light text-lg text-black">
                      Cnr Asetileen &, Conveyor Rd,<br />
                      Silvertondale, Pretoria 0184
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-raleway font-light text-lg text-black mb-4">Social media</h3>
                  <p className="font-raleway font-light text-lg text-black mb-6">
                    You can also follow us on these platforms
                  </p>
                  
                  <div className="flex space-x-3">
                    <SocialIcon platform="facebook" />
                    <SocialIcon platform="instagram" />
                    <SocialIcon platform="linkedin" />
                    <SocialIcon platform="youtube" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-footer-gradient relative">
        <div className="w-full px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Footer Content */}
            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              {/* Logo */}
              <div className="lg:col-span-3">
                <OneChildLogo variant="footer" className="mb-8" />
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-6">
                <nav className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
                  {['Contact', 'News', 'Events', 'Newsletter', 'Terms of use', 'Policies'].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="font-raleway font-light text-base text-black hover:text-white transition-colors text-center"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Copyright */}
              <div className="lg:col-span-3 flex justify-center lg:justify-end">
                <p className="font-raleway font-medium text-lg text-black">
                  © 2025 Holanathi (Pty) Ltd.
                </p>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-black pt-8">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                {/* Newsletter Text */}
                <div className="lg:col-span-6">
                  <p className="font-raleway font-light text-base text-black mb-4">
                    Get the latest news and more by subscribing to our newsletter.
                  </p>
                </div>

                {/* Newsletter Form */}
                <div className="lg:col-span-4">
                  <div className="flex flex-col">
                    <label className="font-raleway font-light text-base text-black mb-2">
                      Your email
                    </label>
                    <div className="border-b border-black pb-1">
                      <input
                        type="email"
                        className="w-full bg-transparent border-none outline-none font-raleway font-light text-base text-black placeholder-gray-600"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Subscribe Button */}
                <div className="lg:col-span-2 flex justify-end">
                  <button className="font-raleway font-medium text-lg text-black hover:text-white transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-8">
                <SocialIcon platform="facebook" />
                <SocialIcon platform="instagram" />
                <SocialIcon platform="linkedin" />
                <SocialIcon platform="youtube" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
