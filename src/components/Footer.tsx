import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-2">
          <h3 className="font-bold mb-4">{t("footer.contactInfo")}</h3>
          <p>{t("footer.address1")}</p>
          <p>{t("footer.address2")}</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-300 hover:underline" to="/">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:underline" to="/about">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:underline" to="/axes">
                {t("footer.axes")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">{t("footer.contacts")}</h3>
          <div className="space-y-2">
            <p className="font-semibold">{t("footer.ceo")}</p>
            <p className="text-gray-300 pb-2">{t("footer.phoneCeo")}</p>
            <p className="font-semibold">{t("footer.presidentOffice")}</p>
            <p>{t("footer.phoneOffice")}</p>
            <p>{t("footer.email")}</p>
            <p>{t("footer.website")}</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">{t("footer.followUs")}</h3>
          <div className="space-y-2">
            <p>
              <Link className="text-gray-300 flex hover:underline" to="">
                {t("footer.linkedin")}
              </Link>
            </p>
            <p>
              <Link className="text-gray-300 flex hover:underline" to="">
                {t("footer.facebook")}
              </Link>
            </p>
            <p>
              <Link className="text-gray-300 flex hover:underline" to="">
                {t("footer.tiktok")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
