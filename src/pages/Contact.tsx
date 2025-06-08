import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-24">
      {/* Section Formulaire */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Form */}
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold mb-6">{t('contact.title')}</h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {t('contact.form.nameLabel')}
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {t('contact.form.emailLabel')}
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {t('contact.form.messageLabel')}
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-medium py-3 px-8 rounded hover:bg-blue-700 transition"
              >
                {t('contact.form.submitButton')}
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex-1 hidden md:flex aspect-3/2 items-center justify-center">
            <img
              src="https://images.pexels.com/photos/4160127/pexels-photo-4160127.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Contact Illustration"
              className="rounded-lg shadow-lg h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
