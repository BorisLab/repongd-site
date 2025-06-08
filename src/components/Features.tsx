const axes = [
  {
    title: "Création et Structuration",
    description: "Accompagner les ONG dans leur création et leur organisation interne."
  },
  {
    title: "Professionnalisation et Certification",
    description: "Renforcer les capacités et obtenir des labels de qualité."
  },
  {
    title: "Mobilisation de Ressources",
    description: "Développer des stratégies de diversification de financement."
  },
  {
    title: "Coopération et Partenariats",
    description: "Créer des synergies entre ONG et partenaires stratégiques."
  },
  {
    title: "Communication et Visibilité",
    description: "Augmenter l'impact médiatique et la visibilité institutionnelle."
  },
  {
    title: "Durabilité",
    description: "Assurer une croissance durable et résiliente."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Nos Missions Stratégiques</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {axes.map((axe, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{axe.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{axe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
