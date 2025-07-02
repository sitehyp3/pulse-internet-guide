
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
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
          <h1 className="text-4xl font-bold">Refund Policy</h1>
          <p className="text-gray-300 mt-4">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">1. 30-Day Money-Back Guarantee</h2>
            <p className="text-gray-600 mb-4">
              Link Next offers a 30-day money-back guarantee for new residential customers. If you're not completely satisfied with our service, you may cancel within the first 30 days and receive a full refund of:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Monthly service fees paid in advance</li>
              <li>• Installation fees (if applicable)</li>
              <li>• Activation fees</li>
              <li>• Equipment rental fees for the trial period</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">2. Refund Eligibility</h2>
            <p className="text-gray-600 mb-4">
              To be eligible for a refund under our money-back guarantee:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• You must be a new residential customer (not applicable to returning customers)</li>
              <li>• Cancellation request must be made within 30 days of service activation</li>
              <li>• All Link Next equipment must be returned in good condition</li>
              <li>• Account must be in good standing with no outstanding balances</li>
              <li>• Service must not have been terminated due to policy violations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">3. Non-Refundable Items</h2>
            <p className="text-gray-600 mb-4">
              The following items and services are non-refundable:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Third-party services and add-ons</li>
              <li>• Premium channel subscriptions</li>
              <li>• Pay-per-view purchases</li>
              <li>• Equipment that is damaged, lost, or not returned</li>
              <li>• Services used beyond the 30-day trial period</li>
              <li>• Early termination fees for contract services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">4. Refund Process</h2>
            <p className="text-gray-600 mb-4">
              To request a refund:
            </p>
            <ol className="text-gray-600 space-y-2 ml-6">
              <li>1. Contact our customer service team at 1-800-LINK-NEXT</li>
              <li>2. Provide your account information and reason for cancellation</li>
              <li>3. Schedule equipment return (if applicable)</li>
              <li>4. Return all equipment within 14 days of cancellation</li>
              <li>5. Refund will be processed within 5-7 business days after equipment return</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">5. Partial Refunds</h2>
            <p className="text-gray-600 mb-4">
              In certain circumstances, partial refunds may be issued:
            </p>
            <ul className="text-gray-600 space-y-2 ml-6">
              <li>• Service outages lasting more than 24 hours (prorated credit)</li>
              <li>• Billing errors or overcharges</li>
              <li>• Service downgrades (difference in price)</li>
              <li>• Equipment malfunctions during warranty period</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">6. Business Customers</h2>
            <p className="text-gray-600 mb-4">
              Business customers have different refund terms based on their service agreement. Please refer to your business service contract or contact our business support team for specific refund policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-tech-gray mb-4">7. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For refund requests or questions about our refund policy:
            </p>
            <div className="bg-tech-light p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Customer Service:</strong> 1-800-LINK-NEXT</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> refunds@linknext.com</p>
              <p className="text-gray-600 mb-2"><strong>Hours:</strong> Monday-Sunday, 7 AM - 11 PM</p>
              <p className="text-gray-600"><strong>Online:</strong> Available 24/7 through your customer portal</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
