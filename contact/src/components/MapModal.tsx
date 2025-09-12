import React from 'react';
import { X, Phone, Clock, Star, MapPin, ExternalLink } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
}

const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose, address }) => {
  if (!isOpen) return null;

  // Holanathi business information
  const businessInfo = {
    name: "Holanathi",
    type: "Association / Organization",
    address: "Unit 61 & Unit 62, Sildale Park Cnr Asetileen &, Conveyor Rd, Silvertondale, Pretoria, 0184",
    phone: "010 020 8599",
    website: "http://holanathi.com/",
    rating: 4.3,
    reviewCount: 6,
    status: "Closed ⋅ Opens 8 am",
    hours: {
      monday: "8 am - 5 pm",
      tuesday: "8 am - 5 pm",
      wednesday: "8 am - 5 pm",
      thursday: "8 am - 5 pm",
      friday: "8 am - 5 pm",
      saturday: "Closed",
      sunday: "Closed"
    },
    directionsUrl: "https://maps.google.com/maps?uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&hl=en&gl=za&um=1&ie=UTF-8&fb=1&sa=X&geocode=KbUJE4AeDZUeMWLuawz8hNYs&daddr=Unit+61+%26+Unit+62,+Sildale+Park+Cnr+Asetileen+%26,+Conveyor+Rd,+Silvertondale,+Pretoria,+0184"
  };

  // Encode the address for Google Maps embed
  const encodedAddress = encodeURIComponent(businessInfo.address);
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?q=${encodedAddress}`;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col animate-scale-in overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-raleway font-medium text-black">{businessInfo.name}</h3>
            <p className="text-sm font-raleway font-light text-gray-600 mt-1">
              {businessInfo.type}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="text-sm font-raleway font-medium text-gray-700">{businessInfo.rating}</span>
                <span className="text-sm font-raleway font-light text-gray-500">({businessInfo.reviewCount} reviews)</span>
              </div>
              <span className="text-sm font-raleway font-light text-gray-500">•</span>
              <span className="text-sm font-raleway font-light text-gray-600">{businessInfo.status}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-full">
            {/* Map Container */}
             <div className="lg:col-span-2">
               <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.503761442954!2d28.300047688854967!3d-25.720849299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d1e801309b5%3A0x2cd684fc0c6bee62!2sHolanathi!5e0!3m2!1sen!2sza!4v1757301702577!5m2!1sen!2sza"
                   width="100%" 
                   height="100%" 
                   style={{border: 0}} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Holanathi Location"
                 />
               </div>
             </div>

            {/* Business Information Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-raleway font-medium text-black mb-4">Contact Information</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-raleway font-medium text-gray-700">Address</p>
                      <p className="text-sm font-raleway font-light text-gray-600">{businessInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-cyan flex-shrink-0" />
                    <div>
                      <p className="text-sm font-raleway font-medium text-gray-700">Phone</p>
                      <a href={`tel:${businessInfo.phone}`} className="text-sm font-raleway font-light text-brand-cyan hover:underline">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <ExternalLink size={18} className="text-brand-cyan flex-shrink-0" />
                    <div>
                      <p className="text-sm font-raleway font-medium text-gray-700">Website</p>
                      <a href={businessInfo.website} target="_blank" rel="noopener noreferrer" className="text-sm font-raleway font-light text-brand-cyan hover:underline">
                        holanathi.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-lg font-raleway font-medium text-black mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-brand-cyan" />
                  Business Hours
                </h4>
                
                <div className="space-y-2">
                  {Object.entries(businessInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-sm font-raleway font-medium text-gray-700 capitalize">{day}</span>
                      <span className="text-sm font-raleway font-light text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with additional info */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm font-raleway font-light text-gray-600">
                Get directions to our main office in Pretoria
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={businessInfo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-brand-cyan text-white font-raleway font-medium rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Get Directions
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-brand-pink text-white font-raleway font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Open in Google Maps
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 font-raleway font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;