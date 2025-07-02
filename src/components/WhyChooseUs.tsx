
import { Shield, Clock, Award, Users, Zap, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: '99.9% Uptime Guarantee',
      description: 'Rock-solid reliability with industry-leading uptime. Your connection stays strong when you need it most.',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Speeds',
      description: 'Experience true high-speed internet with our fiber-optic network. Stream, game, and work without limits.',
      color: 'text-tech-orange'
    },
    {
      icon: Clock,
      title: '24/7 Expert Support',
      description: 'Our certified technicians are available round-the-clock. Get help instantly, whenever you need it.',
      color: 'text-tech-purple'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized industry leader with multiple awards for customer satisfaction and service excellence.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: '500K+ Happy Customers',
      description: 'Join our growing family of satisfied customers who trust Link Next for their connectivity needs.',
      color: 'text-blue-500'
    },
    {
      icon: HeartHandshake,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprises. What you see is what you pay - we believe in honest billing.',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            Why Choose
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Link Next?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another internet provider. We're your technology partner, 
            committed to delivering exceptional service and unmatched reliability.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ${reason.color} bg-current/10`}>
                <reason.icon className={`w-8 h-8 ${reason.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-tech-gray mb-4 group-hover:text-tech-orange transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-tech-gradient rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Cities Covered</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime Record</div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-tech-gray italic mb-8 max-w-4xl mx-auto">
            "Link Next transformed our home office experience. The speeds are incredible, 
            the service is flawless, and their support team actually cares about solving problems."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
              alt="Customer testimonial"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-tech-gray">Michael Chen</div>
              <div className="text-gray-600 text-sm">Small Business Owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
