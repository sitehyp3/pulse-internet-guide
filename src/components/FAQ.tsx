
import { ChevronDown } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What internet speeds do you offer?",
      answer: "We offer a range of speeds from 100 Mbps for basic browsing to 1 Gig for power users. Our fiber-optic network ensures consistent speeds whether you're streaming 4K videos, gaming online, or working from home. All plans include unlimited data with no throttling or caps."
    },
    {
      question: "How quickly can you install service at my location?",
      answer: "Most installations can be completed within 3-5 business days of signing up. Our professional technicians will schedule a convenient time for you, and installation typically takes 2-3 hours. We'll handle everything from running cables to setting up your equipment and ensuring optimal Wi-Fi coverage."
    },
    {
      question: "Are there any contracts or cancellation fees?",
      answer: "We offer both contract and month-to-month options. Our contract plans come with better pricing and additional perks, while our no-contract plans offer maximum flexibility. There are no cancellation fees for month-to-month plans, and contract plans have clearly outlined terms with no hidden surprises."
    },
    {
      question: "What equipment is included with my service?",
      answer: "All plans include a high-performance Wi-Fi router at no extra cost. Premium plans include Wi-Fi 6 routers and advanced equipment. We also provide all necessary cables and connection hardware. If you need additional equipment like range extenders or premium routers, we offer those at competitive prices."
    },
    {
      question: "Do you offer technical support and what are the hours?",
      answer: "Yes! We provide 24/7 technical support through multiple channels - phone, chat, email, and our mobile app. Our support team consists of certified technicians who can help with everything from basic troubleshooting to advanced network optimization. We also offer remote assistance and on-site service calls when needed."
    },
    {
      question: "Can I bundle internet with TV and other services?",
      answer: "Absolutely! We offer flexible bundles that can include high-speed internet, premium cable TV with hundreds of channels, mobile services, and smart home solutions. Bundling services typically saves you money and gives you the convenience of one bill. Our customer service team can help you create a custom bundle that fits your needs and budget."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-tech-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-6">
            Frequently Asked
            <span className="block bg-tech-gradient bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            our customers ask about our services and policies.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-md border-0 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-8 h-8 bg-tech-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-lg font-semibold text-tech-gray pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="pl-12 pr-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-tech-gray mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help! Get in touch with us and 
              we'll provide personalized answers to all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-tech-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Contact Support
              </button>
              <a 
                href="tel:1-800-LINK-NEXT"
                className="border-2 border-tech-orange text-tech-orange px-8 py-3 rounded-lg font-semibold hover:bg-tech-orange hover:text-white transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
