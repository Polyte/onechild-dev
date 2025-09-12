import React from 'react';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Left decorative sidebar strip - Updated gradient: yellow > pink > red > blue */}
      <div className="fixed left-0 top-0 w-16 h-full z-10 hidden lg:block">   
    <div className="w-full h-full bg-gradient-to-b from-[#FFD600] via-[#ffffff] via-[#df8ee4] via-[#05b6ee]   to-[#09b2eb]"></div>

      </div>
      
      <div className="lg:ml-16">
        <Header />
        <main>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
