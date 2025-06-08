import { useTranslation } from "react-i18next";

const Donate = () => {
  const { t } = useTranslation();

  const handleDonate = () => {
    window.open("https://www.paypal.com/donate", "_blank"); // Remplace par ton lien PayPal réel
  };

  return (
    <section>
      {/* Hero Banner */}
      <div
        className="relative w-full h-[60vh]"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1681589453523-0926da5ad6b5?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* Texte avec Overlay */}
          <div className="backdrop-blur-xl backdrop-opacity-80 px-8 py-6 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("donate.heroTitle")}
            </h2>
          </div>
        </div>
      </div>

      {/* Section Don */}
      <div className="py-20 px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold">{t("donate.sectionTitle")}</h3>
          <p className="text-gray-700 leading-7 max-w-2xl mx-auto">
            {t("donate.description")}
          </p>
          <button
            onClick={handleDonate}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-indigo-900 hover:bg-indigo-800 py-2 px-5 font-medium text-white"
          >
            <span>{t("donate.button")}</span>
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

export default Donate;
