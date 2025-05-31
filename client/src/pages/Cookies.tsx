import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect } from 'react';

export default function Cookies() {
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
          <h1 className="text-4xl font-bold text-charcoal mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">2. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Authentication and session management</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Website functionality and navigation</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies help us understand how visitors interact with our website:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Usage statistics and page views</li>
                  <li>• QR code scan analytics</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Preference Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies remember your choices and preferences:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Language and region settings</li>
                  <li>• Display preferences</li>
                  <li>• User interface customizations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Google Analytics for website analytics</li>
                <li>• Social media integration cookies</li>
                <li>• Payment processing cookies</li>
                <li>• Content delivery network cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">4. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Browser Settings</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Most browsers allow you to:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• View and delete existing cookies</li>
                  <li>• Block cookies from specific sites</li>
                  <li>• Block third-party cookies</li>
                  <li>• Clear all cookies when closing the browser</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Cookie Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you first visit our website, you'll see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customize your preferences.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">5. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Disabling certain cookies may affect your experience:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• You may need to re-enter information more frequently</li>
                <li>• Some features may not work properly</li>
                <li>• Personalization features may be limited</li>
                <li>• Analytics data may be incomplete</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-charcoal mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our Cookie Policy, please contact us at: privacy@localqr.earth
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