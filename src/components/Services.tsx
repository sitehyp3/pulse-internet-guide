
import { Wifi, Tv, Smartphone, Home, Shield, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Blazing-fast fiber-optic internet with speeds up to 1 Gig. Perfect for streaming, gaming, and working from home.',
      features: ['Up to 1 Gig speeds', 'Fiber-optic reliability', 'No data caps', 'Free installation']
    },
    {
      icon: Tv,
      title: 'Premium Cable TV',
      description: 'Hundreds of channels including premium networks, sports packages, and on-demand content.',
      features: ['500+ channels', 'Premium networks', 'Sports packages', 'DVR included']
    },
    {
      icon: Smartphone,
      title: 'Mobile Services',
      description: 'Keep your mobile devices connected with our unlimited data plans and nationwide coverage.',
      features: ['Unlimited data', 'Nationwide 5G', 'International roaming', 'Multi-device plans']
    },
    {
      icon: Home,
      title: 'Smart Home Solutions',
      description: 'Transform your home with our integrated smart home packages and IoT device support.',
      features: ['Smart device setup', 'Home automation', 'Security integration', 'Voice control']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital life with our comprehensive security solutions and threat protection.',
      features: ['Real-time protection', 'Identity monitoring', 'Secure browsing', 'Family controls']
    },
    {
      icon: Headphones,
      title: '24/7 Tech Support',
      description: 'Our expert technicians are available around the clock to keep you connected and running smoothly.',
      features: ['24/7 availability', 'Expert technicians', 'Remote assistance', 'On-site service']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            Our Premium
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From lightning-fast internet to premium entertainment, we provide comprehensive 
            connectivity solutions tailored to your lifestyle and business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-gradient rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-tech-gray group-hover:text-tech-orange transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tech-orange rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-tech-orange/10 to-tech-purple/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-tech-gray mb-4">
              Ready to upgrade your connectivity?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the switch to Link Next. 
              Experience the difference premium service makes.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-tech-gradient text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
