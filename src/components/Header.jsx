import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME', key: 'home' },
    { path: '/about', label: 'ABOUT US', key: 'about' },
    { path: '/services', label: 'SERVICES', key: 'services' },
    { path: '/faq', label: 'FAQ', key: 'faq' },
    { path: '/contact', label: 'CONTACT', key: 'contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative bg-brown bg-opacity-75 py-8">
      <div className="flex flex-col items-center">
        {/* Increased logo size for better visibility */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/97ab182b1821b6041552ea1a2fc5b38e8e23788b?width=246" 
          alt="Casaluce Events Logo" 
          className="h-24 w-24 mb-4"
        />
        <h1 className="text-white text-3xl md:text-4xl font-normal font-seasons text-center">
          Casaluce Events
        </h1>
        <p className="text-white text-xs md:text-sm uppercase tracking-widest text-center mt-2 mb-6 font-inter">
          Crafting Events You'll Love
        </p>
        
        {/* Navigation */}
        <nav className="w-full">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="text-center text-white text-sm uppercase tracking-widest font-gotham">
              {navItems.map((item, index) => (
                <React.Fragment key={item.key}>
                  <Link
                    to={item.path}
                    className={`mx-2 transition-colors ${
                      activePage === item.key
                        ? 'text-sage'
                        : 'hover:text-sage'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {index < navItems.length - 1 && <span className="mx-2 text-white">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden text-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-sm uppercase tracking-widest font-gotham focus:outline-none hover:text-sage transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>MENU</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isMobileMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 bg-brown bg-opacity-90 rounded-lg p-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`text-center py-3 px-4 rounded transition-colors font-gotham text-sm uppercase tracking-widest ${
                      activePage === item.key
                        ? 'text-black bg-white bg-opacity-10'
                        : 'text-white hover:text-sage hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
