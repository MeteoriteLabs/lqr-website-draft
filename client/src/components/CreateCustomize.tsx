import { motion } from 'framer-motion';
import { Plus, MapPin, Utensils, GripVertical } from 'lucide-react';
import { GridOverlay } from './SVGOverlays';
import { useLanguage } from '@/hooks/useLanguage';

export default function CreateCustomize() {
  const { content } = useLanguage();

  return (
    <section id="how-it-works" className="bg-off-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-charcoal leading-tight">
              {content.sections.createCustomize.headline}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {content.sections.createCustomize.subtext}
            </p>
            
            {/* Bullet Points */}
            <div className="space-y-4 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-charcoal">Add your favorite spots</h4>
                  <p className="text-gray-600">Create a list with your must-visits</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-charcoal">Organize them by city or theme</h4>
                  <p className="text-gray-600">Create categories that make sense to your audience</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <h4 className="font-semibold text-charcoal">Generate your QR instantly</h4>
                  <p className="text-gray-600">Your personalized QR is ready in seconds</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* UI Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GridOverlay />
            
            {/* Dashboard mockup */}
            <div className="bg-white rounded-xl shadow-2xl p-6 relative z-10">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="font-semibold text-charcoal">My Recommendations</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cta-blue text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2"
                  >
                    <Plus size={16} />
                    <span>Add Place</span>
                  </motion.button>
                </div>
                
                {/* List items */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-cta-blue rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-charcoal">Blue Bottle Coffee</h4>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
                    </div>
                    <GripVertical className="text-gray-400" size={16} />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Utensils className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-charcoal">Tartine Bakery</h4>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
                    </div>
                    <GripVertical className="text-gray-400" size={16} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
