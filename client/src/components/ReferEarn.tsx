import { motion } from 'framer-motion';
import { Coins, Info, DollarSign, Sprout, Gift } from 'lucide-react';
import { BadgeOverlay } from './SVGOverlays';
import { PassportStampPattern } from './BackgroundPatterns';
import { useLanguage } from '@/hooks/useLanguage';

export default function ReferEarn() {
  const { content } = useLanguage();

  return (
    <section className="bg-maroon-red py-20 relative overflow-hidden">
      <BadgeOverlay />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 bg-yellow-400 rounded-full mx-auto flex items-center justify-center"
                >
                  <Coins className="text-yellow-800" size={32} />
                </motion.div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
                  <p className="text-gray-300">Get paid when people use your recommendations</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/20 rounded-lg p-4"
                >
                  <div className="text-3xl font-bold text-white">$127.50</div>
                  <div className="text-sm text-gray-300">Earned this month</div>
                </motion.div>
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
              {content.sections.referEarn.headline}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {content.sections.referEarn.subtext}
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
                <DollarSign className="text-yellow-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Turn recommendations into passive rewards</h4>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Sprout className="text-yellow-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Build your network and earn automatically</h4>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Gift className="text-yellow-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">{content.sections.referEarn.comingSoon}</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
