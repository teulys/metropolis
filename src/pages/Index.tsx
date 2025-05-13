
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Bell, CreditCard, FileText, BarChart, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  {t('hero.subtitle')}
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-metropolis-primary hover:bg-gray-100"
                >
                  {t('hero.cta')}
                </Button>
                
                {/* App Store Links */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.teulys.metropolis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <div className="h-14 flex items-center">
                      <img 
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                        alt="Get it on Google Play" 
                        className="h-auto w-[135px]"
                      />
                    </div>
                  </a>
                  <a 
                    href="https://apps.apple.com/us/app/metropolis-dr/id6744328213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <div className="h-14 flex items-center">
                      <img 
                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                        alt="Download on the App Store" 
                        className="h-auto w-[120px]"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
                  <img
                    src="/lovable-uploads/3df31d3a-9b3c-43ff-8423-d17a7e8fa30b.png"
                    alt="Metropolis App"
                    className="w-64 md:w-80 relative animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('features.admin.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-primary/10 p-3 rounded-full mb-4">
                      <Building2 className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.admin.item1')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-primary/10 p-3 rounded-full mb-4">
                      <CreditCard className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.admin.item2')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-primary/10 p-3 rounded-full mb-4">
                      <Bell className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.admin.item3')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-primary/10 p-3 rounded-full mb-4">
                      <BarChart className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.admin.item4')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-primary/10 p-3 rounded-full mb-4">
                      <Users className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.admin.item5')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-primary/10 p-3 rounded-full mb-4">
                      <FileText className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.admin.item6')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-20 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('features.resident.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-secondary/30 p-3 rounded-full mb-4">
                      <Bell className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.resident.item1')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-secondary/30 p-3 rounded-full mb-4">
                      <CreditCard className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.resident.item2')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-secondary/30 p-3 rounded-full mb-4">
                      <BarChart className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.resident.item3')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-metropolis-secondary/30 p-3 rounded-full mb-4">
                      <FileText className="h-8 w-8 text-metropolis-primary" />
                    </div>
                    <p className="font-medium">{t('features.resident.item4')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-700">
                {t('about.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('team.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card className="border-none shadow-xl hover:shadow-2xl transition overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-primary text-white">
                    <h3 className="text-xl font-bold">{t('team.teulys.name')}</h3>
                    <p className="text-white/80">{t('team.teulys.role')}</p>
                  </div>
                  <div className="p-6">
                    <a 
                      href="mailto:teulys@gmail.com" 
                      className="flex items-center text-gray-600 hover:text-metropolis-primary"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      teulys@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl hover:shadow-2xl transition overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-primary text-white">
                    <h3 className="text-xl font-bold">{t('team.christian.name')}</h3>
                    <p className="text-white/80">{t('team.christian.role')}</p>
                  </div>
                  <div className="p-6">
                    <a 
                      href="mailto:santana.rivera@gmail.com" 
                      className="flex items-center text-gray-600 hover:text-metropolis-primary"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      santana.rivera@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* App Store Links Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">{t('download.title')}</h2>
              <p className="mt-4 text-lg text-gray-600">{t('download.subtitle')}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
              <a 
                href="https://play.google.com/store/apps/details?id=com.teulys.metropolis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="h-16 flex items-center">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-auto w-[160px]"
                  />
                </div>
              </a>
              <a 
                href="https://apps.apple.com/us/app/metropolis-dr/id6744328213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <div className="h-16 flex items-center">
                  <img 
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-auto w-[144px]"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
