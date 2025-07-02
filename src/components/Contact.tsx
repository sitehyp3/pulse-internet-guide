
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting Link Next. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '1-800-LINK-NEXT',
      subinfo: 'Available 24/7',
      action: 'tel:1-800-LINK-NEXT',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'support@linknext.com',
      subinfo: 'Response within 2 hours',
      action: 'mailto:support@linknext.com',
      color: 'text-tech-orange'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      info: 'Chat with our experts',
      subinfo: 'Instant assistance',
      action: '#',
      color: 'text-tech-purple'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Tech Street, Digital City',
      subinfo: 'Mon-Fri 9AM-6PM',
      action: '#',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-tech-gray to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Touch Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to upgrade your connectivity? Our team of experts is here to help you 
            find the perfect solution for your home or business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-8">Multiple Ways to Reach Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    onClick={() => {
                      if (method.action.startsWith('tel:') || method.action.startsWith('mailto:')) {
                        window.location.href = method.action;
                      }
                    }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${method.color} bg-current/20`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {method.info}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-400">{method.subinfo}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-white/10 border-white/20 text-white animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-tech-orange" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <p className="text-sm text-gray-300">
                    <span className="text-tech-orange">24/7 Technical Support</span> always available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white/20 border border-white/30 text-white rounded-md px-3 py-2"
                    >
                      <option value="" className="text-gray-800">Select a service</option>
                      <option value="internet" className="text-gray-800">High-Speed Internet</option>
                      <option value="cable" className="text-gray-800">Cable TV</option>
                      <option value="bundle" className="text-gray-800">Internet + TV Bundle</option>
                      <option value="business" className="text-gray-800">Business Services</option>
                      <option value="support" className="text-gray-800">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
                      placeholder="Tell us about your needs or ask any questions..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-tech-gradient hover:opacity-90 text-white py-3 font-semibold transition-opacity duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-red-500/20 border-red-500/30 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-red-200">
                🚨 Service Emergency?
              </h3>
              <p className="mb-4 text-gray-200">
                If you're experiencing a service outage or emergency, please call our 
                24/7 emergency hotline immediately.
              </p>
              <a 
                href="tel:1-800-EMERGENCY"
                className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>1-800-EMERGENCY</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
