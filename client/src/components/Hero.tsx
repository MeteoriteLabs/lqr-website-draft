import { useState } from 'react';
import { motion } from 'framer-motion';
import { CompassOverlay } from './SVGOverlays';
import { useLanguage } from '@/hooks/useLanguage';

export default function Hero() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { content } = useLanguage();

  const handleClaimQR = async () => {
    if (!username.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // In a real app, this would redirect to the signup/claim flow
    console.log('Claiming QR for:', username);
  };

  return (
    <section id="claim-qr" className="bg-evergreen relative overflow-hidden min-h-screen flex items-center">
      <CompassOverlay />
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {content.hero.headline}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              {content.hero.subtext}
            </p>
            
            {/* QR Claim Input */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <label className="block text-sm font-medium mb-3">
                  {content.hero.inputLabel}
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-3 bg-white/20 border border-r-0 border-white/30 rounded-l-lg text-sm">
                    localqr.earth/
                  </span>
                  <input 
                    type="text" 
                    placeholder={content.hero.inputPlaceholder}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-r-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cta-blue focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleClaimQR()}
                  />
                </div>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClaimQR}
                disabled={!username.trim() || isLoading}
                className="w-full lg:w-auto bg-cta-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating your LocalQR...' : content.hero.ctaButton}
              </motion.button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotate: 0 }}
              initial={{ rotate: 3 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto"
            >
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="w-48 h-48 bg-black mx-auto mb-4 rounded-lg flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded grid grid-cols-8 gap-1 p-2">
                    {/* QR Code Pattern */}
                    {Array(64).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-sm ${
                          Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-charcoal font-medium">Scan to view recommendations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
