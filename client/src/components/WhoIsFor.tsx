import { motion } from 'framer-motion';
import { 
  Plane, 
  Star, 
  Home, 
  Building, 
  Utensils, 
  Coffee, 
  MapPin, 
  Video, 
  Route, 
  Briefcase 
} from 'lucide-react';
import { UseCase } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

const useCases: UseCase[] = [
  { id: '1', title: 'Travelers', description: 'Share discovered gems with fellow explorers', icon: 'plane', color: 'bg-cta-blue' },
  { id: '2', title: 'Influencers', description: 'Monetize local knowledge and build community', icon: 'star', color: 'bg-pink-500' },
  { id: '3', title: 'Airbnb Hosts', description: 'Enhance guest experience with local insights', icon: 'home', color: 'bg-emerald-500' },
  { id: '4', title: 'Hotels', description: 'Provide curated local recommendations', icon: 'building', color: 'bg-purple-500' },
  { id: '5', title: 'Restaurants', description: 'Cross-promote with other local businesses', icon: 'utensils', color: 'bg-orange-500' },
  { id: '6', title: 'Cafes', description: 'Share neighborhood favorites with customers', icon: 'coffee', color: 'bg-yellow-500' },
  { id: '7', title: 'Local Guides', description: 'Scale expertise beyond individual tours', icon: 'map-pin', color: 'bg-indigo-500' },
  { id: '8', title: 'Creators', description: 'Add value beyond content with actionable tips', icon: 'video', color: 'bg-red-500' },
  { id: '9', title: 'Tour Operators', description: 'Extend experience beyond scheduled tours', icon: 'route', color: 'bg-teal-500' },
  { id: '10', title: 'Any Business', description: 'Build community and customer loyalty', icon: 'briefcase', color: 'bg-gray-600' },
];

const iconMap = {
  plane: Plane,
  star: Star,
  home: Home,
  building: Building,
  utensils: Utensils,
  coffee: Coffee,
  'map-pin': MapPin,
  video: Video,
  route: Route,
  briefcase: Briefcase,
};

export default function WhoIsFor() {
  const { content } = useLanguage();

  return (
    <section id="who-is-for" className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: 'hsl(var(--soft-off-white))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
            {content.sections.whoIsFor.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {content.sections.whoIsFor.subtext}
          </p>
        </motion.div>

        {/* Grid of use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = iconMap[useCase.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  hover: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 ${useCase.color} rounded-full mx-auto flex items-center justify-center`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-charcoal">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
