
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Next-Level
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Internet & Cable
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience blazing-fast internet speeds and premium cable services 
            designed for the digital age. Your connection to the future starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('deals')}
              size="lg"
              className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-4 text-lg group transition-all duration-300"
            >
              Explore Deals
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-tech-gray px-8 py-4 text-lg transition-all duration-300"
            >
              Get Started Today
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 animate-slide-in">
              <div className="w-16 h-16 bg-tech-orange/20 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-tech-orange" />
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Up to 1 Gig speeds</p>
            </div>

            <div className="flex flex-col items-center space-y-3 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-tech-purple/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-tech-purple" />
              </div>
              <h3 className="text-lg font-semibold">99.9% Uptime</h3>
              <p className="text-gray-300 text-sm">Reliable connection</p>
            </div>

            <div className="flex flex-col items-center space-y-3 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">Award Winning</h3>
              <p className="text-gray-300 text-sm">Customer service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
