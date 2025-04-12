
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-metropolis-primary">
              {t('privacy.title')}
            </h1>
            
            <p className="mb-6 text-gray-700">
              {t('privacy.intro')}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section1.title')}
              </h2>
              <p className="mb-2 text-gray-700">{t('privacy.section1.content')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('privacy.section1.item1')}</li>
                <li>{t('privacy.section1.item2')}</li>
                <li>{t('privacy.section1.item3')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section2.title')}
              </h2>
              <p className="mb-2 text-gray-700">{t('privacy.section2.content')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('privacy.section2.item1')}</li>
                <li>{t('privacy.section2.item2')}</li>
                <li>{t('privacy.section2.item3')}</li>
                <li>{t('privacy.section2.item4')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section3.title')}
              </h2>
              <p className="mb-2 text-gray-700">{t('privacy.section3.content')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('privacy.section3.item1')}</li>
                <li>{t('privacy.section3.item2')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section4.title')}
              </h2>
              <p className="mb-2 text-gray-700">{t('privacy.section4.content')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('privacy.section4.item1')}</li>
                <li>{t('privacy.section4.item2')}</li>
                <li>{t('privacy.section4.item3')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section5.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.section5.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section6.title')}
              </h2>
              <p className="text-gray-700">
                {t('privacy.section6.content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {t('privacy.section7.title')}
              </h2>
              <p className="mb-2 text-gray-700">
                {t('privacy.section7.content')}
              </p>
              <div className="mt-2">
                <a 
                  href={`mailto:${t('privacy.email')}`} 
                  className="flex items-center text-metropolis-primary hover:underline"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {t('privacy.email')}
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
