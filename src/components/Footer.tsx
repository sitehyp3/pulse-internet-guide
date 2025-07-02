
import { Wifi, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Deals & Offers', href: '#deals' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'High-Speed Internet', href: '#services' },
    { name: 'Cable TV', href: '#services' },
    { name: 'Mobile Services', href: '#services' },
    { name: 'Smart Home', href: '#services' },
    { name: 'Business Solutions', href: '#services' },
    { name: 'Technical Support', href: '#services' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tech-gray text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-tech-gradient rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                Link Next
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in premium connectivity solutions. We're committed to 
              keeping you connected to what matters most with reliable, high-speed internet 
              and exceptional service.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-tech-orange" />
                <span>1-800-LINK-NEXT</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-tech-orange" />
                <span>support@linknext.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-tech-orange" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-tech-orange transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-300 hover:text-tech-orange transition-colors duration-300"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Stay Connected</h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-300">
                Follow us for the latest updates, deals, and tech tips.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tech-orange transition-colors duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-gray-300 font-medium">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-tech-orange"
                />
                <button className="bg-tech-gradient px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-300 hover:text-tech-orange transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/refund-policy" 
                className="text-gray-300 hover:text-tech-orange transition-colors duration-300"
              >
                Refund Policy
              </Link>
              <Link 
                to="/terms-conditions" 
                className="text-gray-300 hover:text-tech-orange transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
            
            <div className="text-sm text-gray-300">
              © {currentYear} Link Next. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-tech-gradient">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-white font-medium">
            🚀 Limited Time: Get your first month FREE on any annual plan! 
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-2 underline hover:no-underline"
            >
              Sign up today →
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
