import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    role: 'Travel Blogger',
    location: 'San Francisco',
    quote: 'LocalQR transformed how I share my travel knowledge. My followers love getting instant access to my curated recommendations!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Airbnb Host',
    location: 'Barcelona',
    quote: 'My guests absolutely love the personalized QR code in their welcome kit. It\'s become my signature touch!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b976?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120',
    rating: 5,
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    role: 'Restaurant Owner',
    location: 'Mexico City',
    quote: 'We share our LocalQR with customers to recommend other local spots. It\'s created amazing community connections.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120',
    rating: 5,
  },
  {
    id: '4',
    name: 'Emma Thompson',
    role: 'Tour Guide',
    location: 'London',
    quote: 'LocalQR helps me extend my expertise beyond tour hours. Clients can access my recommendations anytime!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120',
    rating: 5,
  },
];

export default function Testimonials() {
  const { content } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 280 + 24; // Card width + gap
        const totalWidth = cardWidth * testimonials.length;
        
        // If we've scrolled past the original set, reset to beginning
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft = 0;
        }
        
        // Continue scrolling
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-charcoal py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {content.sections.testimonials.headline}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {content.sections.testimonials.subtext}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  hover: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 sm:p-6 w-[280px] flex-shrink-0 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cta-blue"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="text-charcoal" size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cta-blue"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="text-charcoal" size={20} />
          </button>
        </div>
      </div>


    </section>
  );
}
