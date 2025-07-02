
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-tech-gray text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-tech-orange hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-gray-300 mt-4">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Link Next services, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services. These terms apply to all 
              visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">2. Service Description</h2>
            <p className="text-gray-600 mb-4">
              Link Next provides internet, cable television, and related telecommunications services. Our services include:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• High-speed internet access via fiber-optic and cable networks</li>
              <li>• Cable television programming and on-demand content</li>
              <li>• Equipment rental and technical support</li>
              <li>• Mobile and wireless services</li>
              <li>• Smart home and security solutions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">3. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              Service availability varies by location. Not all services are available in all areas. 
              We reserve the right to refuse service or terminate existing service for any reason, 
              including but not limited to:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Violation of these terms and conditions</li>
              <li>• Non-payment of services</li>
              <li>• Technical limitations or capacity constraints</li>
              <li>• Illegal or inappropriate use of services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-600 mb-4">
              You agree to use our services in a lawful manner and not to:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Use services for illegal activities or to transmit illegal content</li>
              <li>• Interfere with or disrupt network services or servers</li>
              <li>• Attempt to gain unauthorized access to other accounts or systems</li>
              <li>• Send spam, viruses, or other malicious content</li>
              <li>• Violate intellectual property rights of others</li>
              <li>• Resell or redistribute services without authorization</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms and conditions:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Monthly charges are due in advance on the date specified in your bill</li>
              <li>• Late payments may result in service suspension and late fees</li>
              <li>• Returned payments incur additional charges</li>
              <li>• Installation and equipment fees may apply</li>
              <li>• Price changes require 30 days written notice</li>
              <li>• Promotional pricing may have specific terms and conditions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">6. Equipment and Installation</h2>
            <p className="text-gray-600 mb-4">
              Equipment and installation policies:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Equipment remains property of Link Next unless purchased</li>
              <li>• Customer is responsible for equipment care and security</li>
              <li>• Lost or damaged equipment incurs replacement charges</li>
              <li>• Professional installation may be required for certain services</li>
              <li>• Equipment must be returned upon service termination</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">7. Service Level Agreement</h2>
            <p className="text-gray-600 mb-4">
              While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. 
              Service may be affected by:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Scheduled maintenance and upgrades</li>
              <li>• Weather conditions and natural disasters</li>
              <li>• Third-party network issues</li>
              <li>• Equipment failures or technical problems</li>
              <li>• Force majeure events beyond our control</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Link Next's liability is limited to the monthly service charge. We are not liable for:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Indirect, incidental, or consequential damages</li>
              <li>• Loss of data, profits, or business opportunities</li>
              <li>• Service interruptions or delays</li>
              <li>• Third-party content or services</li>
              <li>• Customer equipment damage (except when caused by our negligence)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate service with appropriate notice:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Customers may cancel with 30 days notice</li>
              <li>• Early termination fees may apply for contract services</li>
              <li>• We may terminate immediately for terms violations</li>
              <li>• All equipment must be returned within 14 days</li>
              <li>• Final bills are due upon termination</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">10. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms and Conditions:
            </p>
            <div className="bg-tech-light p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Customer Service:</strong> 1-800-LINK-NEXT</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@linknext.com</p>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Tech Street, Digital City, DC 12345</p>
              <p className="text-gray-600"><strong>Business Hours:</strong> Monday-Friday, 8 AM - 8 PM</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
