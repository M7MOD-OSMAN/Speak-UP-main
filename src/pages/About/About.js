import { useTranslation } from "react-i18next";
import banner from "./aboutBanner.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-7 order-1 order-md-0 Tajawal">
          <h3 className="secondary-color fw-bolder h2">
            {t("aboutPageTitle1")}
          </h3>
          <p className="primary-color">{t("aboutPageSubTitle1")}</p>
          <p className="primary-color mb-5">{t("aboutPageSubTitle2")}</p>
          <h3 className="secondary-color fw-bolder h2">
            {t("aboutPageTitle2")}
          </h3>
          <p className="primary-color">{t("p0")}</p>
          <p className="primary-color">{t("p1")}</p>
          <p className="primary-color">{t("p2")}</p>
          <p className="primary-color">{t("p3")}</p>
          <p className="primary-color mb-5 ">{t("p4")}</p>
          <h3 className="secondary-color fw-bolder h2">
            {t("aboutPageTitle3")}
          </h3>
          <p className="primary-color mb-5">{t("aboutPageSubTitle3")}</p>
        </div>
        <div className="d-flex align-items-center  col-12 col-md-5 mb-5 p-5 p-md-0  text-center">
          <img
            src={banner}
            className="img-fluid"
            alt="various visual methods indicating ways of giving feedback"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
