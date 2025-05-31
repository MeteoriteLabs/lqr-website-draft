import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export default function Privacy() {
  const { content } = useLanguage();

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <Button
            onClick={handleGoHome}
            variant="ghost"
            className="flex items-center space-x-2 text-charcoal hover:text-cta-blue"
          >
            <ArrowLeft size={20} />
            <span>Return to Home</span>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, add recommendations, or contact us for support.
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Account information (username, email, profile details)</li>
                <li>• Recommendation content and location data</li>
                <li>• Usage analytics and interaction data</li>
                <li>• Communication records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• To create and manage your LocalQR account</li>
                <li>• To generate and display your recommendation QR codes</li>
                <li>• To provide analytics on QR code performance</li>
                <li>• To send important service updates and notifications</li>
                <li>• To improve our platform and develop new features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• With service providers who assist in our operations</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a business transfer or acquisition</li>
                <li>• With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">5. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Access and update your personal information</li>
                <li>• Delete your account and associated data</li>
                <li>• Opt-out of certain communications</li>
                <li>• Request a copy of your data</li>
                <li>• File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at: privacy@localqr.earth
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}