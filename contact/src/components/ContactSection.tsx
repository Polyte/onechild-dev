import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import SocialIcon from './SocialIcon';
import MapModal from './MapModal';

const ContactSection: React.FC = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const officeAddress = "Unit 61 & Unit 62, Sildale Park, Cnr Asetileen &, Conveyor Rd, Silvertondale, Pretoria 0184";

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMapModalOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 lg:pl-8">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-roboto-serif font-thin text-5xl md:text-6xl lg:text-7xl text-black mb-8 leading-tight">
            Hello
          </h1>
          <p className="font-raleway font-light text-xl md:text-2xl lg:text-3xl text-black leading-relaxed max-w-5xl">
            Whether you have questions about the campaign, want to contribute, or feel like sharing your own story, let us know.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="mb-20">
          <h2 className="font-roboto-serif font-thin text-3xl md:text-4xl text-black mb-12">
            Contact Details
          </h2>
          
          <div className="gap-12">
            {/* Main Office */}
            <div>
              <h3 className="font-raleway font-bold text-xl text-black mb-4">Main Office</h3>
              <address className="font-raleway font-light text-lg text-black not-italic leading-relaxed">
                Unit 61 & Unit 62,<br />
                Sildale Park,<br />
                Cnr Asetileen &, Conveyor Rd,<br />
                Silvertondale,<br />
                Pretoria 0184
              </address>
              
              <div className="flex items-center mt-10 mb-20">
                <MapPin size={20} className="text-black mr-2" />
                <button 
                  onClick={handleMapClick}
                  className="font-raleway font-light text-base text-black hover:text-brand-cyan transition-colors cursor-pointer underline hover:no-underline"
                >
                  View on Google Maps
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h3 className="font-raleway font-bold text-xl text-black ">Telephone</h3>
                <p className="font-raleway font-light text-lg text-black">
                  +27 (0)12 345 6789
                </p>
              </div>
              
              <div className="mb-16">
                <h3 className="font-raleway font-bold text-xl text-black">Email(s)</h3>
                <p className="font-raleway font-light text-lg text-black">
                  hello@onechild.org<br />
                  info@holanathi.co.za
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-raleway font-bold text-xl text-black ">Social media</h3>
              <p className="font-raleway font-light text-lg text-black mb-6">
                You can also follow us on these platforms
              </p>
              
              <div className="social-icons-container flex space-x-4">
                <SocialIcon type="facebook" />
                 <SocialIcon type="linkedin" />
                <SocialIcon type="instagram" />
               
                <SocialIcon type="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        address={officeAddress}
      />
    </>
  );
}

export default ContactSection;
