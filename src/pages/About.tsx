import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="">
      {/* Introduction - texte/image croisé */}
      <div className="py-20 px-8 bg-green-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="md:text-4xl font-bold">Que fait REPONGD-Afrique ?</h2>
            <p className="text-gray-700 leading-8">
              Depuis sa création, REPONGD-Afrique s'engage à soutenir les ONG africaines dans leur structuration, professionnalisation et impact durable.
            </p>
            <p className="text-gray-700 leading-8">
              Notre mission est de renforcer les capacités locales, promouvoir l’innovation sociale et établir des partenariats durables à travers le continent.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1636820244534-285108e20a6e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section Contexte */}
      <div className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-8">
          <p>
            Le boom des ONG en Afrique dans les années 80 a été lié à des crises majeures telles que les famines, les sécheresses et les conflits armés.
          </p>
          <p>
            Face à la montée des enjeux politiques, économiques et sociaux, il est devenu crucial pour les ONG de renforcer leurs capacités internes et externes.
          </p>
        </div>
      </div>

      {/* Section Justification */}
      <div className="py-20 px-8 bg-green-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Justification"
            className="w-full md:w-1/2 rounded shadow-lg"
          />
          <div className="md:w-1/2 space-y-6 text-gray-700 leading-7">
            <p>
              Il est essentiel de proposer aux ONG africaines des outils adaptés pour renforcer leur performance et assurer leur pérennité.
            </p>
          </div>
        </div>
      </div>

      {/* Section Vision et Mission */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-7">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">Vision</h3>
            <p>
              Faire des ONG africaines des acteurs puissants, stratégiques et collaboratifs dans le développement durable.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">Mission</h3>
            <p>
              Accompagner les ONG dans la professionnalisation, l'innovation sociale et la collaboration avec les acteurs publics et privés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
