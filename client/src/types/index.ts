export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface LanguageContent {
  header: {
    nav: {
      howItWorks: string;
      claimQR: string;
      faq: string;
      contact: string;
    };
    auth: {
      login: string;
      signUp: string;
    };
  };
  hero: {
    headline: string;
    subtext: string;
    inputLabel: string;
    inputPlaceholder: string;
    ctaButton: string;
  };
  sections: {
    createCustomize: {
      headline: string;
      subtext: string;
    };
    shareAnywhere: {
      headline: string;
      subtext: string;
    };
    analytics: {
      headline: string;
      subtext: string;
    };
    referEarn: {
      headline: string;
      subtext: string;
      comingSoon: string;
    };
    whoIsFor: {
      headline: string;
      subtext: string;
    };
    testimonials: {
      headline: string;
      subtext: string;
    };
    faq: {
      headline: string;
      subtext: string;
    };
    finalCTA: {
      headline: string;
      subtext: string;
      ctaButton: string;
      disclaimer: string;
    };
  };
  footer: {
    tagline: string;
    email: string;
    sections: {
      product: string;
      contact: string;
      legal: string;
    };
    links: {
      howItWorks: string;
      faq: string;
      contact: string;
      terms: string;
      privacy: string;
    };
    copyright: string;
  };
}
