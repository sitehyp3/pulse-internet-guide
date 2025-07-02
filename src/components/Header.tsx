
import { useState } from 'react';
import { Menu, X, Wifi, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent">
              Link Next
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('deals')}
              className="text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              Deals
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center space-x-2 bg-tech-gradient hover:opacity-90 transition-opacity duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Get Started</span>
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-tech-gray hover:text-tech-orange transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-tech-gray hover:text-tech-orange transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-tech-gray hover:text-tech-orange transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-tech-gray hover:text-tech-orange transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('deals')}
                className="text-left text-tech-gray hover:text-tech-orange transition-colors duration-300"
              >
                Deals
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-tech-gray hover:text-tech-orange transition-colors duration-300"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-tech-gray hover:text-tech-orange transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
