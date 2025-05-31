import { motion } from 'framer-motion';
import { Link, Printer, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function ShareAnywhere() {
  const { content } = useLanguage();

  return (
    <section className="bg-clay-brown py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Storefront with QR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-clay-brown rounded"></div>
                  <span className="font-semibold text-charcoal">Cafe Menu</span>
                </div>
                <div className="w-20 h-20 bg-black rounded mx-auto mb-2 grid grid-cols-4 gap-1 p-1">
                  {Array(16).fill(0).map((_, i) => (
                    <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`} />
                  ))}
                </div>
                <p className="text-xs text-gray-600 text-center">Scan for local recommendations</p>
              </div>
              <p className="text-white text-sm">Perfect for storefront displays</p>
            </motion.div>

            {/* Social media mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-semibold text-charcoal">@traveler_jane</span>
                </div>
                <p className="text-sm text-charcoal mb-2">My Tokyo food guide localqr.earth/jane</p>
                <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-1 p-1">
                  {Array(16).fill(0).map((_, i) => (
                    <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              {content.sections.shareAnywhere.headline}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {content.sections.shareAnywhere.subtext}
            </p>
            
            {/* Bullet Points */}
            <div className="space-y-4 mt-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Link className="text-blue-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Add to your Instagram bio</h4>
                  <p className="text-gray-300">Share with your followers instantly</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Printer className="text-blue-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Print it on menus</h4>
                  <p className="text-gray-300">Physical touchpoints made easy</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <BookOpen className="text-blue-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Include in welcome books</h4>
                  <p className="text-gray-300">Perfect for hosts and guides</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
