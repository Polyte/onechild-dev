import React from 'react';
import OneChildLogo from './OneChildLogo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <OneChildLogo variant="header" />
      </div>
    </header>
  );
};

export default Header;
