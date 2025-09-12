import React from 'react';
import LogoImage from '../assets/logo@2x.png';


interface OneChildLogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

const OneChildLogo: React.FC<OneChildLogoProps> = ({ className = '', variant = 'header' }) => {
  if (variant === 'header') {
    return (
      <div className={`flex items-center justify-end space-x-2 ${className}`}>
      <img src={LogoImage} alt="OneChild Logo" className="h-12 w-auto" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Logo Image */}
      <div className="flex items-center justify-center mb-6">
        <img 
          src={LogoImage} 
          alt="OneChild Logo" 
          className="h-24 w-auto"
        />
      </div>
    </div>
  );
};

export default OneChildLogo;
