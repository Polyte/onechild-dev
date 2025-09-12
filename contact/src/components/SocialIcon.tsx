import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialIconProps {
  type: 'facebook' | 'instagram' | 'linkedin' | 'youtube';
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, className = '' }) => {
  const iconProps = {
    size: 20,
    className: 'text-black transition-all duration-300 group-hover:text-white group-hover:scale-110'
  };

  const getIcon = () => {
    switch (type) {
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'youtube':
        return <Youtube {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`
        group relative w-8 h-8 rounded-full 
        bg-transparent border-2 border-black
        flex items-center justify-center 
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:border-transparent hover:shadow-lg hover:scale-110
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-br before:from-brand-cyan before:via-brand-yellow before:to-brand-pink
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
        overflow-hidden
        ${className}
      `}
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan via-brand-yellow to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      
      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center">
        {getIcon()}
      </div>
      
      {/* Animated ring effect */}
      <div className="absolute inset-0 rounded-full border-2 border-brand-cyan opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-out"></div>
    </div>
  );
};

export default SocialIcon;
