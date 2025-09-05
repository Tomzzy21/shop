import React from 'react';
import { TwitterIcon, FacebookIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2640] text-gray-300 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
            Ready to achieve financial peace of mind?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Let's handle your bookkeeping so you can get back to growing your business. Schedule your free, no-obligation consultation today.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 text-lg font-bold text-[#0A2640] bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Main Footer Links & Socials */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-8">
          {/* Logo and Nav */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="The Bookkeeping Practice NG Logo" 
                className="h-8 w-auto"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold text-white">The Bookkeeping Practice NG</span>
            </a>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} The Bookkeeping Practice NG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;