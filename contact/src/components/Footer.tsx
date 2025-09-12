import React from 'react';
import OneChildLogo from '../assets/brandmark.png';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  const navLinks = ['Contact', 'News', 'Events', 'Newsletter', 'Terms of use', 'Policies', '|'];
  
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background - cyan to pink */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B8F1] to-[#FF2A58]"></div>
      
      {/* Decorative geometric shapes */}
     
      <div className="absolute bottom-20 left-24 w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-[#FFD600] opacity-90"></div>
      <div className="absolute bottom-32 right-16 w-0 h-0 border-l-10 border-r-10 border-b-16 border-l-transparent border-r-transparent border-b-[#FF2A58] opacity-80"></div>
       
       
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Centered Logo */}
        <div className="flex justify-start ">
          <img src={OneChildLogo} alt="OneChild Logo" className="h-auto brandmark" />
        </div>

        {/* Social Icons - Centered */}
        <div className="flex justify-end mb-8 socials">
          <div className="flex space-x-4">
            <SocialIcon type="facebook" />
            <SocialIcon type="linkedin" />
            <SocialIcon type="instagram" />
            <SocialIcon type="youtube" />
          </div>
        </div>

        {/* Navigation Links - Centered below social icons */}

        <hr className="border-black mb-4 border-lg" />
        <div className="flex flex-wrap gap-x-12 gap-y-8 justify-start mb-16">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="font-raleway font-light text-base text-black hover:text-gray-600 transition-colors"
            >
              {link}
            </a>
          ))}

           <div className="text-right brand">
          <p className="font-raleway  text-black">
            © 2025 Holanathi (Pty) Ltd.
          </p>
        </div>


        </div>

        {/* Newsletter Section */}
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Newsletter Text */}
            <div className="flex-1 text-center lg:text-left">
              <p className="font-raleway font-light text-base text-black">
                Get the latest news and more by subscribing to our newsletter.
              </p>
            </div>

            {/* Newsletter Form and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="border-b-2 border-black pb-1 min-w-[250px]">
                <input
                  type="email"
                  className="w-full bg-transparent border-none outline-none font-raleway font-light text-base text-black placeholder-black placeholder-opacity-70 focus:placeholder-opacity-100 transition-all"
                  placeholder="Your email"
                />
              </div>
              <button className="font-raleway  text-black hover:text-gray-600 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
       
      </div>
    </footer>
  );
};

export default Footer;
