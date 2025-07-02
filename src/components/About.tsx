
import { Users, Clock, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500K+', label: 'Happy Customers' },
    { icon: Clock, number: '15+', label: 'Years Experience' },
    { icon: MapPin, number: '50+', label: 'Cities Covered' },
    { icon: TrendingUp, number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <section id="about" className="py-20 bg-tech-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
              Connecting You to
              <span className="block bg-tech-gradient bg-clip-text text-transparent">
                What Matters Most
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Link Next, we've been pioneering the future of connectivity for over 15 years. 
              Our mission is simple: provide lightning-fast, reliable internet and premium cable 
              services that keep you connected to your world.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-orange rounded-full mt-3"></div>
                <p className="text-gray-600">
                  <strong className="text-tech-gray">Industry-leading speeds</strong> - 
                  From 100 Mbps to 1 Gig, we have the perfect plan for your needs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-purple rounded-full mt-3"></div>
                <p className="text-gray-600">
                  <strong className="text-tech-gray">24/7 Expert support</strong> - 
                  Our dedicated team is always here to help you stay connected
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-orange rounded-full mt-3"></div>
                <p className="text-gray-600">
                  <strong className="text-tech-gray">Future-proof technology</strong> - 
                  Fiber-optic infrastructure built for tomorrow's demands
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                alt="Modern technology workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-tech-gradient/20"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold bg-tech-gradient bg-clip-text text-transparent">1M+</div>
                <div className="text-sm text-gray-600">Connections Made</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-tech-gradient rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-tech-gray mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
