import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/UNESCO_logo.svg",
    "https://cooperation-concept.net/wp-content/uploads/2017/03/la-banque-mondiale-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Seal_of_the_United_States_Department_of_State.svg/600px-Seal_of_the_United_States_Department_of_State.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Emblem_of_the_united_nations.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Armoiries_du_Togo.svg/250px-Armoiries_du_Togo.svg.png",
  ];

  const axesItems = t("home.axesItems", { returnObjects: true }) as Array<{ title: string }>;

  const axesImages = [
    "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1471914036897-d8255336ca8a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0"
  ];

  return (
    <section className="overflow-hidden">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[80vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1636820244534-285108e20a6e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* Texte avec Overlay */}
          <div className="backdrop-blur-xl backdrop-opacity-80 px-8 py-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("home.title")}
            </h1>
            <p className="text-lg md:text-xl text-white">
              {t("home.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Section Présentation rapide */}
      <div className="py-16 px-8 bg-white" data-aos="slide-left" data-aos-duration="1200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Presentation"
            className="w-full md:w-1/2 rounded shadow-lg"
          />
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">{t("home.about.title")}</h2>
            <p className="text-gray-700 leading-7">{t("home.about.paragraph1")}</p>
            <p className="text-gray-700 leading-7">{t("home.about.paragraph2")}</p>
          </div>
        </div>
      </div>

      {/* Section Nos Axes Stratégiques */}
      <div className="py-20 px-8 bg-gray-100" data-aos="zoom-in" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">{t("home.axesIntro")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {axesItems.map((axis, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={axesImages[index]}
                alt={axis.title}
                className="w-full h-48 object-cover"
              />
              <div className="bg-blue-500 px-6 py-2">
                <h3 className="text-xl text-white font-semibold">{axis.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Partenaires */}
      <div className="py-14 px-8 bg-white overflow-hidden animate-fadeInUp">
        <div className="max-w-7xl mx-auto text-center mb-18">
          <h2 className="text-2xl font-bold mb-6">{t("home.partnersTitle")}</h2>
        </div>

        {/* Carousel défilant */}
        <div className="relative w-full overflow-hidden mb-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partenaire ${index + 1}`}
                className="h-20 mx-12 inline-block object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`clone-${index}`}
                src={logo}
                alt={`Clone partenaire ${index + 1}`}
                className="h-20 mx-12 inline-block object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section Appel au Don */}
      <div className="py-20 px-8 bg-green-200 animate-slideInRight">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">{t("home.donate.title")}</h2>
          <p className="text-gray-700">{t("home.donate.description")}</p>
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-indigo-900 hover:bg-indigo-800 py-2 px-5 font-medium text-white">
            <span>{t("home.donate.button")}</span>
            <div className="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
