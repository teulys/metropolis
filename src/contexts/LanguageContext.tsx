
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.team': 'Team',
    'nav.privacy': 'Privacy Policy',
    
    // Hero Section
    'hero.title': 'Ultimate Condominium Management Solution',
    'hero.subtitle': 'Simplify communication, payments, and administrative tasks all in one place',
    'hero.cta': 'Try it free for 30 days',
    
    // Admin Features
    'features.admin.title': 'For Administrators',
    'features.admin.item1': 'Manage multiple condominiums with ease',
    'features.admin.item2': 'Create and track recurring debts',
    'features.admin.item3': 'Send important announcements',
    'features.admin.item4': 'Monitor payment history and resident balances',
    'features.admin.item5': 'Choose from flexible subscription plans',
    'features.admin.item6': 'Enjoy a 30-day free trial to explore all premium features',
    
    // Resident Features
    'features.resident.title': 'For Residents',
    'features.resident.item1': 'Receive real-time notifications and announcements',
    'features.resident.item2': 'View and pay monthly fees',
    'features.resident.item3': 'Keep track of past payments and debts',
    'features.resident.item4': 'Access documents and community rules',
    
    // About
    'about.title': 'About Metropolis',
    'about.description': 'Metropolis was created to bring transparency and order to condominium life, whether you\'re managing one property or twenty. Try it free for 30 days and experience stress-free condo management today.',
    
    // Team
    'team.title': 'Meet Our Team',
    'team.teulys.name': 'Teulys Jimenez',
    'team.teulys.role': 'Co-founder',
    'team.christian.name': 'Christian Santana',
    'team.christian.role': 'Co-founder',
    'team.contact': 'Contact',
    
    // Download
    'download.title': 'Download Our App',
    'download.subtitle': 'Get the Metropolis app on your mobile device for the best experience',
    
    // Privacy
    'privacy.title': 'Privacy Policy',
    'privacy.intro': 'Metropolis Condominium App ("we", "our", or "us") provides a mobile application designed to help users manage and interact with their condominiums efficiently. This Privacy Policy describes how we collect, use, and protect your information when you use our app.',
    'privacy.section1.title': '1. Information We Collect',
    'privacy.section1.content': 'We may collect the following types of information:',
    'privacy.section1.item1': 'Personal Information (such as name, email address) for account creation.',
    'privacy.section1.item2': 'Usage Data (such as login time, features used) to improve the app experience.',
    'privacy.section1.item3': 'Device Information (such as device model, OS version) for performance and diagnostics.',
    'privacy.section2.title': '2. How We Use Your Information',
    'privacy.section2.content': 'We use the collected information to:',
    'privacy.section2.item1': 'Provide and maintain the services.',
    'privacy.section2.item2': 'Improve user experience.',
    'privacy.section2.item3': 'Communicate with users about updates or service-related information.',
    'privacy.section2.item4': 'Manage subscriptions for administrators.',
    'privacy.section3.title': '3. Data Sharing',
    'privacy.section3.content': 'We do not sell or share your personal information with third parties, except:',
    'privacy.section3.item1': 'To comply with legal obligations.',
    'privacy.section3.item2': 'With service providers that help us operate the app (e.g., payment processors).',
    'privacy.section4.title': '4. User Rights',
    'privacy.section4.content': 'Users can:',
    'privacy.section4.item1': 'Request access to their personal data.',
    'privacy.section4.item2': 'Request correction or deletion of their data.',
    'privacy.section4.item3': 'Withdraw consent at any time by deleting their account.',
    'privacy.section5.title': '5. Security',
    'privacy.section5.content': 'We use industry-standard security measures to protect your data.',
    'privacy.section6.title': '6. Free and Paid Users',
    'privacy.section6.content': 'The app is free to use for condominium residents. Administrators can subscribe to different paid plans based on the number of condominiums they manage. A 30-day free trial is available.',
    'privacy.section7.title': '7. Contact',
    'privacy.section7.content': 'If you have any questions about this policy, contact us at:',
    'privacy.email': 'teulys@gmail.com',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.team': 'Equipo',
    'nav.privacy': 'Política de Privacidad',
    
    // Hero Section
    'hero.title': 'La Solución Definitiva para Administración de Condominios',
    'hero.subtitle': 'Simplifica la comunicación, pagos y tareas administrativas en un solo lugar',
    'hero.cta': 'Pruébalo gratis por 30 días',
    
    // Admin Features
    'features.admin.title': 'Para Administradores',
    'features.admin.item1': 'Administra múltiples condominios con facilidad',
    'features.admin.item2': 'Crea y rastrea deudas recurrentes',
    'features.admin.item3': 'Envía anuncios importantes',
    'features.admin.item4': 'Monitorea el historial de pagos y saldos de residentes',
    'features.admin.item5': 'Elige entre planes de suscripción flexibles',
    'features.admin.item6': 'Disfruta de una prueba gratuita de 30 días para explorar todas las funciones premium',
    
    // Resident Features
    'features.resident.title': 'Para Residentes',
    'features.resident.item1': 'Recibe notificaciones y anuncios en tiempo real',
    'features.resident.item2': 'Visualiza y paga cuotas mensuales',
    'features.resident.item3': 'Mantén un registro de pagos anteriores y deudas',
    'features.resident.item4': 'Accede a documentos y reglas de la comunidad',
    
    // About
    'about.title': 'Acerca de Metropolis',
    'about.description': 'Metropolis fue creada para brindar transparencia y orden a la vida en condominio, ya sea que administres una propiedad o veinte. Pruébala gratis por 30 días y experimenta hoy una gestión de condominios sin estrés.',
    
    // Team
    'team.title': 'Conoce a Nuestro Equipo',
    'team.teulys.name': 'Teulys Jimenez',
    'team.teulys.role': 'Co-fundador',
    'team.christian.name': 'Christian Santana',
    'team.christian.role': 'Co-fundador',
    'team.contact': 'Contacto',
    
    // Download
    'download.title': 'Descarga Nuestra App',
    'download.subtitle': 'Obtén la aplicación Metropolis en tu dispositivo móvil para la mejor experiencia',
    
    // Privacy
    'privacy.title': 'Política de Privacidad',
    'privacy.intro': 'Metropolis Condominium App ("nosotros", "nuestro" o "nos") proporciona una aplicación móvil diseñada para ayudar a los usuarios a administrar e interactuar con sus condominios de manera eficiente. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestra aplicación.',
    'privacy.section1.title': '1. Información que Recopilamos',
    'privacy.section1.content': 'Podemos recopilar los siguientes tipos de información:',
    'privacy.section1.item1': 'Información personal (como nombre, dirección de correo electrónico) para la creación de cuentas.',
    'privacy.section1.item2': 'Datos de uso (como tiempo de inicio de sesión, funciones utilizadas) para mejorar la experiencia de la aplicación.',
    'privacy.section1.item3': 'Información del dispositivo (como modelo del dispositivo, versión del sistema operativo) para rendimiento y diagnóstico.',
    'privacy.section2.title': '2. Cómo Utilizamos su Información',
    'privacy.section2.content': 'Utilizamos la información recopilada para:',
    'privacy.section2.item1': 'Proporcionar y mantener los servicios.',
    'privacy.section2.item2': 'Mejorar la experiencia del usuario.',
    'privacy.section2.item3': 'Comunicarnos con los usuarios sobre actualizaciones o información relacionada con el servicio.',
    'privacy.section2.item4': 'Gestionar suscripciones para administradores.',
    'privacy.section3.title': '3. Compartición de Datos',
    'privacy.section3.content': 'No vendemos ni compartimos su información personal con terceros, excepto:',
    'privacy.section3.item1': 'Para cumplir con obligaciones legales.',
    'privacy.section3.item2': 'Con proveedores de servicios que nos ayudan a operar la aplicación (por ejemplo, procesadores de pagos).',
    'privacy.section4.title': '4. Derechos del Usuario',
    'privacy.section4.content': 'Los usuarios pueden:',
    'privacy.section4.item1': 'Solicitar acceso a sus datos personales.',
    'privacy.section4.item2': 'Solicitar la corrección o eliminación de sus datos.',
    'privacy.section4.item3': 'Retirar el consentimiento en cualquier momento eliminando su cuenta.',
    'privacy.section5.title': '5. Seguridad',
    'privacy.section5.content': 'Utilizamos medidas de seguridad estándar de la industria para proteger sus datos.',
    'privacy.section6.title': '6. Usuarios Gratuitos y de Pago',
    'privacy.section6.content': 'La aplicación es gratuita para los residentes de condominios. Los administradores pueden suscribirse a diferentes planes de pago según el número de condominios que administren. Hay disponible una prueba gratuita de 30 días.',
    'privacy.section7.title': '7. Contacto',
    'privacy.section7.content': 'Si tiene alguna pregunta sobre esta política, contáctenos en:',
    'privacy.email': 'teulys@gmail.com',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
