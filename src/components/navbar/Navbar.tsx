import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    return location.pathname === path
      ? "font-semibold text-black"
      : "font-medium text-gray-700 hover:text-black";
  };

  return (
    <nav className="fixed w-full flex items-center justify-between px-6 py-4 bg-white shadow z-50">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-300 flex items-center justify-center text-sm font-bold rounded-full">
          LOGO
        </div>
        <span className="text-xs font-bold">REPONGD-Afrique</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link className={`text-sm transition-colors duration-300 ${getLinkClasses('/')}`} to="/">{t('navbar.home')}</Link>
        <Link className={`text-sm transition-colors duration-300 ${getLinkClasses('/about')}`} to="/about">{t('navbar.about')}</Link>
        <Link className={`text-sm transition-colors duration-300 ${getLinkClasses('/axes')}`} to="/axes">{t('navbar.axes')}</Link>
        <Link className={`text-sm transition-colors duration-300 ${getLinkClasses('/donate')}`} to="/donate">{t('navbar.donate')}</Link>
        <Link className={`text-sm transition-colors duration-300 ${getLinkClasses('/contact')}`} to="/contact">{t('navbar.contact')}</Link>
        <LanguageSwitcher />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-6 md:hidden transition-all">
          <Link onClick={() => setIsOpen(false)} className={`text-sm transition-colors duration-300 ${getLinkClasses('/')}`} to="/">{t('navbar.home')}</Link>
          <Link onClick={() => setIsOpen(false)} className={`text-sm transition-colors duration-300 ${getLinkClasses('/about')}`} to="/about">{t('navbar.about')}</Link>
          <Link onClick={() => setIsOpen(false)} className={`text-sm transition-colors duration-300 ${getLinkClasses('/axes')}`} to="/axes">{t('navbar.axes')}</Link>
          <Link onClick={() => setIsOpen(false)} className={`text-sm transition-colors duration-300 ${getLinkClasses('/donate')}`} to="/donate">{t('navbar.donate')}</Link>
          <Link onClick={() => setIsOpen(false)} className={`text-sm transition-colors duration-300 ${getLinkClasses('/contact')}`} to="/contact">{t('navbar.contact')}</Link>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
