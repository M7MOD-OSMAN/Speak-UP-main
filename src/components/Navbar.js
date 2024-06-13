import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { customerContext } from "../context";
import logo from "./assets/logo.png";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { changeLanguage, isRTL } = useContext(customerContext);
  const { t } = useTranslation();
  return (
    <nav className="d-flex justify-content-between align-items-center p-3 p-md-5 ">
      <div>
        <NavLink to="/">
          <img src={logo} width={160} height={65} alt="Speak UP logo" />
        </NavLink>
      </div>
      <div>
        <ul className="list-unstyled d-flex gap-3 align-items-center">
          <li style={{ color: "var(--main-color)" }}>
            {localStorage.getItem("i18nextLng") === "ar" ? (
              <button onClick={() => changeLanguage("en")} className="btn ">
                English
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("ar")}
                className="btn Tajawal"
              >
                عربى
              </button>
            )}
          </li>
          <li>
            <NavLink
              to="about"
              className="text-decoration-none "
              style={{ color: "var(--main-color)" }}
            >
              {t("aboutUs")}
            </NavLink>
          </li>
        </ul>
        {/* <Outlet /> */}
      </div>
    </nav>
  );
};

export default Navbar;
