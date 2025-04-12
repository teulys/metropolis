
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3df31d3a-9b3c-43ff-8423-d17a7e8fa30b.png" 
              alt="Metropolis Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-metropolis-primary">Metropolis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-metropolis-primary transition">
              {t('nav.home')}
            </Link>
            <Link to="/#features" className="text-gray-700 hover:text-metropolis-primary transition">
              {t('nav.features')}
            </Link>
            <Link to="/#team" className="text-gray-700 hover:text-metropolis-primary transition">
              {t('nav.team')}
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-metropolis-primary transition">
              {t('nav.privacy')}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle language"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700"
            >
              <Globe className="h-5 w-5" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle language"
              onClick={toggleLanguage}
              className="mr-2"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-metropolis-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/#features" 
              className="block text-gray-700 hover:text-metropolis-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.features')}
            </Link>
            <Link 
              to="/#team" 
              className="block text-gray-700 hover:text-metropolis-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.team')}
            </Link>
            <Link 
              to="/privacy" 
              className="block text-gray-700 hover:text-metropolis-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.privacy')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
