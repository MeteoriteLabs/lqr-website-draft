import { useState, useEffect } from 'react';
import { Language, LanguageContent } from '@/types';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const content: Record<string, LanguageContent> = {
  en: {
    header: {
      nav: {
        howItWorks: 'How It Works',
        whoIsFor: 'Who is it for?',
        faq: 'FAQ',
        contact: 'Contact',
      },
      auth: {
        login: 'Login',
        signUp: 'Sign Up',
      },
    },
    hero: {
      headline: 'All your recommendations in one simple QR and link.',
      subtext: 'Turn your knowledge of a place into a shareable guide — engage your followers, customers, travelers, and friends alike.',
      inputLabel: 'Claim your LocalQR URL:',
      inputPlaceholder: 'yourname',
      ctaButton: 'Claim Your LocalQR',
    },
    sections: {
      createCustomize: {
        headline: 'Create and customize your LocalQR in minutes',
        subtext: 'Add your favorite places, organize by city or theme, and generate your QR instantly.',
      },
      shareAnywhere: {
        headline: 'Share it on socials, storefronts, or welcome kits',
        subtext: 'Your QR works wherever your story lives — bios, menus, signage, or travel books.',
      },
      analytics: {
        headline: 'Track clicks, referrals, and top-performing spots',
        subtext: 'Understand what\'s resonating, and keep your list updated in real time.',
      },
      referEarn: {
        headline: 'Share, refer, and earn',
        subtext: 'Earn rewards when your QR is used or shared — make your knowledge work for you.',
        comingSoon: 'Feature launching soon - join the waitlist to be notified!',
      },
      whoIsFor: {
        headline: 'Who is LocalQR for?',
        subtext: 'LocalQR fits the needs of explorers, entrepreneurs, and everyday locals — all in one scannable link.',
      },
      testimonials: {
        headline: 'Loved by travelers, creators, and hosts',
        subtext: 'See how people around the world use LocalQR to share what matters most.',
      },
      faq: {
        headline: 'Got questions?',
        subtext: 'We\'ve answered the most common things people ask before getting started.',
      },
      finalCTA: {
        headline: 'Start sharing your world today',
        subtext: 'Claim your free LocalQR and turn your local insights into shareable guides.',
        ctaButton: 'Claim Your LocalQR – Free Forever',
        disclaimer: 'No credit card required • Set up in 2 minutes',
      },
    },
    footer: {
      tagline: 'Your favorite places. One simple link.',
      email: 'hello@localqr.earth',
      sections: {
        product: 'Product',
        contact: 'Contact',
        legal: 'Legal',
      },
      links: {
        howItWorks: 'How it works',
        faq: 'FAQ',
        contact: 'Contact',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
      },
      copyright: '© 2024 LocalQR. All rights reserved.',
    },
  },
  es: {
    header: {
      nav: {
        howItWorks: 'Cómo Funciona',
        whoIsFor: '¿Para quién es?',
        faq: 'FAQ',
        contact: 'Contacto',
      },
      auth: {
        login: 'Iniciar Sesión',
        signUp: 'Registrarse',
      },
    },
    hero: {
      headline: 'Todas tus recomendaciones en un simple QR y enlace.',
      subtext: 'Convierte tu conocimiento de un lugar en una guía compartible — involucra a tus seguidores, clientes, viajeros y amigos.',
      inputLabel: 'Reclama tu URL de LocalQR:',
      inputPlaceholder: 'tunombre',
      ctaButton: 'Reclamar Tu LocalQR',
    },
    sections: {
      createCustomize: {
        headline: 'Crea y personaliza tu LocalQR en minutos',
        subtext: 'Agrega tus lugares favoritos, organízalos por ciudad o tema, y genera tu QR al instante.',
      },
      shareAnywhere: {
        headline: 'Compártelo en redes sociales, tiendas o kits de bienvenida',
        subtext: 'Tu QR funciona donde sea que viva tu historia — biografías, menús, señalización o libros de viaje.',
      },
      analytics: {
        headline: 'Rastrea clics, referencias y lugares de mejor rendimiento',
        subtext: 'Comprende qué está resonando y mantén tu lista actualizada en tiempo real.',
      },
      referEarn: {
        headline: 'Comparte, refiere y gana',
        subtext: 'Gana recompensas cuando tu QR es usado o compartido — haz que tu conocimiento trabaje para ti.',
        comingSoon: 'Característica próximamente - ¡únete a la lista de espera para ser notificado!',
      },
      whoIsFor: {
        headline: '¿Para quién es LocalQR?',
        subtext: 'LocalQR se adapta a las necesidades de exploradores, emprendedores y locales cotidianos — todo en un enlace escaneable.',
      },
      testimonials: {
        headline: 'Amado por viajeros, creadores y anfitriones',
        subtext: 'Ve cómo personas alrededor del mundo usan LocalQR para compartir lo que más importa.',
      },
      faq: {
        headline: '¿Tienes preguntas?',
        subtext: 'Hemos respondido las cosas más comunes que la gente pregunta antes de empezar.',
      },
      finalCTA: {
        headline: 'Comienza a compartir tu mundo hoy',
        subtext: 'Reclama tu LocalQR gratuito y convierte tus conocimientos locales en guías compartibles.',
        ctaButton: 'Reclamar Tu LocalQR – Gratis Para Siempre',
        disclaimer: 'No se requiere tarjeta de crédito • Configuración en 2 minutos',
      },
    },
    footer: {
      tagline: 'Tus lugares favoritos. Un enlace simple.',
      email: 'hello@localqr.earth',
      sections: {
        product: 'Producto',
        contact: 'Contacto',
        legal: 'Legal',
      },
      links: {
        howItWorks: 'Cómo funciona',
        faq: 'FAQ',
        contact: 'Contacto',
        terms: 'Términos y Condiciones',
        privacy: 'Política de Privacidad',
      },
      copyright: '© 2024 LocalQR. Todos los derechos reservados.',
    },
  },
  fr: {
    header: {
      nav: {
        howItWorks: 'Comment Ça Marche',
        whoIsFor: 'Pour qui est-ce?',
        faq: 'FAQ',
        contact: 'Contact',
      },
      auth: {
        login: 'Connexion',
        signUp: 'S\'inscrire',
      },
    },
    hero: {
      headline: 'Toutes vos recommandations dans un simple QR et lien.',
      subtext: 'Transformez votre connaissance d\'un lieu en guide partageable — engagez vos followers, clients, voyageurs et amis.',
      inputLabel: 'Réclamez votre URL LocalQR:',
      inputPlaceholder: 'votrenom',
      ctaButton: 'Réclamer Votre LocalQR',
    },
    sections: {
      createCustomize: {
        headline: 'Créez et personnalisez votre LocalQR en minutes',
        subtext: 'Ajoutez vos lieux favoris, organisez-les par ville ou thème, et générez votre QR instantanément.',
      },
      shareAnywhere: {
        headline: 'Partagez-le sur les réseaux sociaux, vitrines ou kits d\'accueil',
        subtext: 'Votre QR fonctionne partout où vit votre histoire — bios, menus, signalisation ou livres de voyage.',
      },
      analytics: {
        headline: 'Suivez les clics, références et spots les plus performants',
        subtext: 'Comprenez ce qui résonne et gardez votre liste mise à jour en temps réel.',
      },
      referEarn: {
        headline: 'Partagez, référez et gagnez',
        subtext: 'Gagnez des récompenses quand votre QR est utilisé ou partagé — faites travailler votre connaissance pour vous.',
        comingSoon: 'Fonctionnalité bientôt disponible - rejoignez la liste d\'attente pour être notifié!',
      },
      whoIsFor: {
        headline: 'Pour qui est LocalQR?',
        subtext: 'LocalQR répond aux besoins des explorateurs, entrepreneurs et locaux du quotidien — tout dans un lien scannable.',
      },
      testimonials: {
        headline: 'Aimé par les voyageurs, créateurs et hôtes',
        subtext: 'Voyez comment les gens du monde entier utilisent LocalQR pour partager ce qui compte le plus.',
      },
      faq: {
        headline: 'Des questions?',
        subtext: 'Nous avons répondu aux choses les plus communes que les gens demandent avant de commencer.',
      },
      finalCTA: {
        headline: 'Commencez à partager votre monde aujourd\'hui',
        subtext: 'Réclamez votre LocalQR gratuit et transformez vos insights locaux en guides partageables.',
        ctaButton: 'Réclamer Votre LocalQR – Gratuit Pour Toujours',
        disclaimer: 'Pas de carte de crédit requise • Configuration en 2 minutes',
      },
    },
    footer: {
      tagline: 'Vos lieux favoris. Un lien simple.',
      email: 'hello@localqr.earth',
      sections: {
        product: 'Produit',
        contact: 'Contact',
        legal: 'Légal',
      },
      links: {
        howItWorks: 'Comment ça marche',
        faq: 'FAQ',
        contact: 'Contact',
        terms: 'Termes et Conditions',
        privacy: 'Politique de Confidentialité',
      },
      copyright: '© 2024 LocalQR. Tous droits réservés.',
    },
  },
};

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('localqr-language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('localqr-language', language.code);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return {
    currentLanguage,
    languages,
    content: content[currentLanguage.code],
    isDropdownOpen,
    changeLanguage,
    toggleDropdown,
    setIsDropdownOpen,
  };
}
