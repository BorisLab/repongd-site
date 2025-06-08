import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6 dark:text-white"
      >
        {t('vision')}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-gray-700 dark:text-gray-300"
      >
        {t('vision_text')}
      </motion.p>
      <motion.button 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        {t('learn_more')}
      </motion.button>
    </section>
  );
};

export default Hero;
