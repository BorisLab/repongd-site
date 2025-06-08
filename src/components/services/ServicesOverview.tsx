import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const services = [
  { title: "Création et Structuration", desc: "Accompagnement à la création et à l’organisation interne des ONGs." },
  { title: "Professionnalisation et Certification", desc: "Renforcement des capacités et labélisation." },
  { title: "Mobilisation de Ressources", desc: "Plan de développement de ressources et diversification des financements." },
  { title: "Coopération et Partenariats", desc: "Renforcer les partenariats entre ONGs et acteurs stratégiques." },
  { title: "Communication et Visibilité", desc: "Mise en place de stratégies de communication adaptées." },
  { title: "Durabilité", desc: "Accompagnement à la durabilité organisationnelle et financière." }
];

const ServicesOverview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('services')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
