import React, { useState, useEffect } from 'react';
import { HamburgerIcon, CloseIcon } from './Icons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Services', href: '#services' },
  { name: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} bg-gradient-to-b from-white/40 to-transparent`}>
        <div className="container mx-auto px-4">
          <nav
            className={`
              flex items-center justify-between
              bg-white/30 backdrop-blur-xl rounded-full shadow-lg px-6 h-16
              border border-white/20 transition-all duration-300
              hover:bg-white/40 hover:backdrop-blur-lg
            `}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="The Bookkeeping Practice NG Logo" 
                className="h-8 w-auto"
                width={32}
                height={32}
              />
              <span className="font-bold text-[#0A2640] whitespace-nowrap text-sm sm:text-base">
                The Bookkeeping Practice NG
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-8 text-[#0A2640] font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#2B63C2] transition-colors text-sm whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu" 
              className="lg:hidden p-2 text-[#0A2640]"
            >
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <HamburgerIcon className="h-6 w-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-24 left-4 right-4 z-40 bg-white/70 backdrop-blur-2xl rounded-xl shadow-2xl lg:hidden transition-all duration-300 ease-in-out transform border border-white/30 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col p-6 text-[#0A2640] font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-gray-100 last:border-0">
              <a
                href={link.href}
                className="block py-4 hover:text-[#2B63C2] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;