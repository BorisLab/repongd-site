import { useTranslation } from "react-i18next";

const Axes = () => {
  const { t } = useTranslation();

  // On récupère les axes traduits
  const axes = t("axes.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    img: string;
  }>;

  // Images associées (car elles ne changent pas avec la langue)
  const images = [
    "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1471914036897-d8255336ca8a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0"
  ];

  return (
    <section className="pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl md:text-6xl sm:text-2xl font-bold text-center mb-24">
          {t("axes.sectionTitle")}
        </h2>
        <div className="space-y-16">
          {axes.map((axis, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center group`}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105">
                <img
                  src={images[index]}
                  alt={axis.title}
                  className="w-full h-64 object-cover md:h-80"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 md:pl-12 md:pr-12 mt-6 md:mt-0">
                <h3 className="text-2xl font-semibold mb-4">{axis.title}</h3>
                <p className="text-gray-700 leading-7">{axis.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Axes;
