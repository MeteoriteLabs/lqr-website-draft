import { useState } from 'react';
import { motion } from 'framer-motion';
import { WorldOverlay } from './SVGOverlays';
import { GridMapPattern } from './BackgroundPatterns';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  const [isLoading, setIsLoading] = useState(false);
  const { content } = useLanguage();

  const handleClaim = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--blue-final))' }}>
      <GridMapPattern />
      <WorldOverlay />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
            {content.sections.finalCTA.headline}
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            {content.sections.finalCTA.subtext}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            {/* QR Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-24 h-24 bg-white rounded grid grid-cols-6 gap-1 p-2">
                  {Array(36).fill(0).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-sm ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-charcoal font-medium">localqr.earth/you</p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleClaim}
                  disabled={isLoading}
                  size="lg"
                  className="bg-white text-cta-blue hover:bg-gray-100 font-bold text-lg shadow-xl"
                >
                  {isLoading ? 'Creating your LocalQR...' : content.sections.finalCTA.ctaButton}
                </Button>
              </motion.div>
              <p className="text-blue-100 text-sm mt-3">
                {content.sections.finalCTA.disclaimer}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
