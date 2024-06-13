import { Link } from "react-router-dom";
import Overlay from "./Overlay";
import { useTranslation } from "react-i18next";
import banner from "./home-banner.png";
import "./Home.css";
import { useContext, useState } from "react";
import { customerContext } from "../../context";

const Home = () => {
  const { t } = useTranslation();
  const [showOverlay, setShowOverlay] = useState(true);

  function handleCloseOverlay() {
    setShowOverlay(false);
  }
  const { changeLanguage, isRTL } = useContext(customerContext);
  // console.log(isRTL);
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 Tajawal">
          <h2 className="fs-1 fw-bold secondary-color"> {t("selectLang")}</h2>
          <p className="primary-color fs-2">{t("selectPreferredLang")}</p>

          <div>
            <Link to="scenario" className="text-white text-decoration-none ">
              <button
                onClick={() => changeLanguage("ar")}
                className="button Tajawal border-0 fs-4 text-white px-5 rounded py-1"
              >
                عربى
              </button>
            </Link>
            <br />
            <br />
            <Link to="scenario" className="text-white text-decoration-none ">
              <button
                onClick={() => changeLanguage("en")}
                className="button border-0 fs-4 text-white px-5 rounded py-1"
              >
                English
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-5 p-5 p-md-0  text-center">
          <img
            src={banner}
            className="img-fluid"
            alt="various phrases indicating the concept of the application"
          />
        </div>
      </div>
      {showOverlay && (
        <Overlay onClose={handleCloseOverlay} autoHideDuration={5000} />
      )}
    </section>
  );
};

export default Home;
