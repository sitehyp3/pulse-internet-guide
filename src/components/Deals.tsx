
import { Check, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Deals = () => {
  const deals = [
    {
      name: 'Starter Package',
      price: '$39.99',
      originalPrice: '$59.99',
      period: '/month',
      description: 'Perfect for light internet usage and basic entertainment',
      badge: 'Popular',
      badgeColor: 'bg-tech-orange',
      features: [
        '100 Mbps Internet Speed',
        '100+ TV Channels',
        'Free Installation',
        'Basic Wi-Fi Router',
        '24/7 Customer Support',
        'No Contract Required'
      ]
    },
    {
      name: 'Family Pro',
      price: '$69.99',
      originalPrice: '$99.99',
      period: '/month',
      description: 'Ideal for families with multiple devices and streaming needs',
      badge: 'Best Value',
      badgeColor: 'bg-tech-purple',
      features: [
        '500 Mbps Internet Speed',
        '300+ TV Channels + Premium',
        'Free Professional Installation',
        'Advanced Wi-Fi 6 Router',
        'Premium DVR Service',
        'Mobile App Access',
        'Priority Customer Support'
      ]
    },
    {
      name: 'Ultimate Gig',
      price: '$99.99',
      originalPrice: '$149.99',
      period: '/month',
      description: 'Maximum performance for power users and smart homes',
      badge: 'Premium',
      badgeColor: 'bg-gradient-to-r from-tech-orange to-tech-purple',
      features: [
        '1 Gig Internet Speed',
        '500+ TV Channels + All Premium',
        'Free Professional Installation',
        'Enterprise-Grade Router',
        'Whole-Home DVR System',
        'Smart Home Integration',
        'VIP Customer Support',
        'Cybersecurity Suite Included'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="deals" className="py-20 bg-gradient-to-br from-tech-light to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            Exclusive
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Special Offers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Limited-time deals designed to give you premium connectivity at unbeatable prices. 
            Choose the perfect plan for your lifestyle.
          </p>
          <Badge className="bg-red-500 text-white text-sm px-4 py-2">
            🔥 Limited Time - Save up to 40%
          </Badge>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deals.map((deal, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:-translate-y-2 animate-fade-in ${
                index === 1 ? 'border-tech-purple shadow-xl scale-105' : 'border-gray-200 hover:border-tech-orange'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {deal.badge && (
                <div className="absolute top-4 right-4">
                  <Badge className={`${deal.badgeColor} text-white text-xs px-3 py-1`}>
                    <Star className="w-3 h-3 mr-1" />
                    {deal.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-tech-gray mb-2">
                  {deal.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {deal.description}
                </CardDescription>
                
                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                      {deal.price}
                    </span>
                    <span className="text-gray-600">{deal.period}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-400 line-through text-sm">
                      {deal.originalPrice}
                    </span>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      Save {Math.round((1 - parseFloat(deal.price.slice(1)) / parseFloat(deal.originalPrice.slice(1))) * 100)}%
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {deal.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    index === 1 
                      ? 'bg-tech-gradient hover:opacity-90 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white border-2 border-tech-orange text-tech-orange hover:bg-tech-orange hover:text-white'
                  }`}
                >
                  {index === 1 ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Get Started Now
                    </>
                  ) : (
                    'Choose This Plan'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Offer */}
        <div className="mt-16 text-center">
          <div className="bg-tech-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🎉 New Customer Special
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get your first month FREE when you sign up for any annual plan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-tech-gray hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Claim Your Free Month
              </Button>
              <p className="text-sm opacity-75">
                *Valid for new customers only. Terms apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
