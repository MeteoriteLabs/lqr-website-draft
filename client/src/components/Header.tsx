import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link, useLocation } from 'wouter';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLanguage, languages, content, isDropdownOpen, changeLanguage, toggleDropdown, setIsDropdownOpen } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsDropdownOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 transition-opacity hover:opacity-75"
          >
            <div className="w-8 h-8 bg-cta-blue rounded-lg flex items-center justify-center">
              <QrCode className="text-white" size={16} />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              LocalQR
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`transition-colors hover:opacity-75 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {content.header.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('who-is-for')}
              className={`transition-colors hover:opacity-75 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {content.header.nav.whoIsFor}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`transition-colors hover:opacity-75 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {content.header.nav.faq}
            </button>
            <Link
              href="/contact"
              className={`transition-colors hover:opacity-75 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {content.header.nav.contact}
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown();
                }}
                className={`flex items-center space-x-1 transition-colors hover:opacity-75 ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                <Globe size={16} />
                <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown size={12} />
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[120px]"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language)}
                      className="block w-full text-left px-4 py-2 text-charcoal hover:bg-gray-100 transition-colors"
                    >
                      {language.flag} {language.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className={`px-4 py-2 border rounded-lg transition-all hover:scale-105 ${
                isScrolled 
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-charcoal'
              }`}>
                {content.header.auth.login}
              </button>
              <button className="px-4 py-2 bg-cta-blue text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105">
                {content.header.auth.signUp}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg mt-4 rounded-lg overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-charcoal hover:text-cta-blue transition-colors"
              >
                {content.header.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection('who-is-for')}
                className="block w-full text-left text-charcoal hover:text-cta-blue transition-colors"
              >
                {content.header.nav.whoIsFor}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-charcoal hover:text-cta-blue transition-colors"
              >
                {content.header.nav.faq}
              </button>
              <Link
                href="/contact"
                className="block text-charcoal hover:text-cta-blue transition-colors"
              >
                {content.header.nav.contact}
              </Link>
              <hr className="border-gray-200" />
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 border border-charcoal text-charcoal rounded-lg hover:bg-charcoal hover:text-white transition-all">
                  {content.header.auth.login}
                </button>
                <button className="flex-1 px-4 py-2 bg-cta-blue text-white rounded-lg hover:bg-blue-700 transition-all">
                  {content.header.auth.signUp}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
