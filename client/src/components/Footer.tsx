import { QrCode, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'wouter';
import { GlobePattern } from './BackgroundPatterns';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="py-16 relative overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
      <GlobePattern />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cta-blue rounded-lg flex items-center justify-center">
                <QrCode className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-white">LocalQR</span>
            </div>
            <p className="text-gray-400">{content.footer.tagline}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">{content.footer.sections.product}</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.howItWorks}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('faq');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.faq}
              </button>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.contact}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">{content.footer.sections.contact}</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${content.footer.email}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.email}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">{content.footer.sections.legal}</h3>
            <div className="space-y-2">
              <Link
                href="/terms"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.terms}
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.privacy}
              </Link>
              <Link
                href="/cookies"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.cookies}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center space-y-2">
          <p className="text-gray-400">{content.footer.copyright}</p>
          <p className="text-gray-500 text-sm">Made with love on earth <span className="text-green-500">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
