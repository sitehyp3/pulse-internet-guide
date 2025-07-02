
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-4">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              At Link Next, we collect information that you provide directly to us, such as when you:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Create an account or sign up for our services</li>
              <li>• Contact our customer support team</li>
              <li>• Subscribe to our newsletter or marketing communications</li>
              <li>• Participate in surveys or promotional activities</li>
              <li>• Use our website or mobile applications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Provide, maintain, and improve our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send technical notices, updates, and support messages</li>
              <li>• Respond to your comments, questions, and customer service requests</li>
              <li>• Monitor and analyze trends, usage, and activities</li>
              <li>• Detect, investigate, and prevent fraudulent transactions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• With service providers who assist us in operating our business</li>
              <li>• When required by law or to protect our rights</li>
              <li>• In connection with a merger, acquisition, or sale of assets</li>
              <li>• With your consent or at your direction</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Encryption of sensitive data in transit and at rest</li>
              <li>• Regular security assessments and updates</li>
              <li>• Access controls and authentication requirements</li>
              <li>• Employee training on data protection practices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• The right to access and update your information</li>
              <li>• The right to request deletion of your data</li>
              <li>• The right to opt-out of marketing communications</li>
              <li>• The right to data portability</li>
              <li>• The right to lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-tech-light p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@linknext.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> 1-800-LINK-NEXT</p>
              <p className="text-gray-600"><strong>Address:</strong> 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
