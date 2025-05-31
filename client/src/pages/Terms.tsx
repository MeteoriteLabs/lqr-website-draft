import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect } from 'react';

export default function Terms() {
  const { content } = useLanguage();

  // Scroll to top immediately when component loads
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
          <h1 className="text-4xl font-bold text-charcoal mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using LocalQR, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LocalQR is a platform that allows users to create and share QR codes linked to their curated recommendations for places, restaurants, and experiences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">3. User Responsibilities</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• You are responsible for maintaining the confidentiality of your account</li>
                <li>• You agree to provide accurate and complete information</li>
                <li>• You will not use the service for any unlawful purposes</li>
                <li>• You will respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">4. Content Guidelines</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All recommendations and content must be accurate, helpful, and respectful. We reserve the right to remove content that violates our community standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LocalQR shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">6. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">7. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms & Conditions, please contact us at: legal@localqr.earth
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