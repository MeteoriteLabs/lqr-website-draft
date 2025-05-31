import { QrCode, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="bg-charcoal-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
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
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.contact}
              </a>
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
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.terms}
              </a>
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {content.footer.links.privacy}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
