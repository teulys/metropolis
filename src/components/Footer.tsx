
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3df31d3a-9b3c-43ff-8423-d17a7e8fa30b.png" 
                alt="Metropolis Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-metropolis-primary">Metropolis</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              {t('about.description')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-metropolis-primary">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-600 hover:text-metropolis-primary">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link to="/#team" className="text-gray-600 hover:text-metropolis-primary">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-metropolis-primary">
                  {t('nav.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('team.contact')}</h3>
            <div className="space-y-2">
              <a 
                href="mailto:teulys@gmail.com" 
                className="flex items-center text-gray-600 hover:text-metropolis-primary"
              >
                <Mail className="h-4 w-4 mr-2" />
                teulys@gmail.com
              </a>
              <a 
                href="mailto:santana.rivera@gmail.com" 
                className="flex items-center text-gray-600 hover:text-metropolis-primary"
              >
                <Mail className="h-4 w-4 mr-2" />
                santana.rivera@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {currentYear} Metropolis. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
