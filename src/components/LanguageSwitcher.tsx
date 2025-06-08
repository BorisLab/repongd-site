import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={i18n.language}
      className="border border-gray-300 rounded p-1 text-sm"
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
