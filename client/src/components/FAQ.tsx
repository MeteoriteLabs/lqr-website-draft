import { motion } from 'framer-motion';
import { FAQItem } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is LocalQR?',
    answer: 'LocalQR is a platform that turns your local knowledge into a shareable QR code and short link. Add your favorite places, organize them by city or theme, and share them with travelers, friends, or customers through a simple scan.',
  },
  {
    id: '2',
    question: 'Is it free?',
    answer: 'Yes! LocalQR is free forever for basic use. You can create your QR code, add unlimited recommendations, and track basic analytics at no cost. Premium features for businesses and advanced analytics are available through our paid plans.',
  },
  {
    id: '3',
    question: 'Can I update my recommendations?',
    answer: 'Absolutely! Your recommendations are always editable. Add new places, remove outdated ones, or reorganize your list anytime. Changes appear instantly when someone scans your QR code - no need to reprint anything.',
  },
  {
    id: '4',
    question: 'How do I share my QR?',
    answer: 'You can share your LocalQR anywhere - add it to your social media bio, print it on business cards, include it in welcome kits, display it in storefronts, or add it to your website. You also get a short link (localqr.earth/yourname) for easy sharing.',
  },
  {
    id: '5',
    question: 'Can businesses use this?',
    answer: 'Yes! LocalQR is perfect for hotels, restaurants, cafes, Airbnb hosts, tour operators, and any business that wants to enhance customer experience with local recommendations. Business features include analytics, custom branding, and team collaboration tools.',
  },
];

export default function FAQ() {
  const { content } = useLanguage();

  return (
    <section id="faq" className="bg-light-grey py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
            {content.sections.faq.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.sections.faq.subtext}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="multiple" className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={item.id} 
                  className="bg-white rounded-xl shadow-sm border-none px-0"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-4 text-left font-semibold text-charcoal hover:bg-gray-50 rounded-xl hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
