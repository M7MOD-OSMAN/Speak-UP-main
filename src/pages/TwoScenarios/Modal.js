import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyModal = ({ show, handleClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        backdrop="static"
      >
        <form className="Tajawal">
          <div className="p-3">
            <div className="p-3 px-4">
              <h6 className="primary-color mb-3 fw-bold ">{t("modalTitle")}</h6>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="one"
                />
                <label className="form-check-label" htmlFor="one">
                  {t("modalCheckOne")}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="two"
                />
                <label className="form-check-label" htmlFor="two">
                  {t("modalCheckTwo")}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="three"
                />
                <label className="form-check-label" htmlFor="three">
                  {t("modalCheckThree")}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="four"
                />
                <label className="form-check-label" htmlFor="four">
                  {t("modalCheckFour")}
                  <span>
                    <a
                      style={{ fontSize: "12px" }}
                      href="https://www.google.com"
                      target="_blank"
                    >
                      {t("modalCheckFourLink")}
                    </a>
                  </span>
                </label>
              </div>
              <br />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="five"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="five">
                  {t("modalCheckFive")}
                  <br />
                  <span>
                    <a
                      style={{ fontSize: "12px" }}
                      href="https://www.google.com"
                      target="_blank"
                    >
                      {t("modalCheckFiveLink")}
                    </a>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <Link to="/">
              <Button
                className="fw-bold border-0 "
                style={{ backgroundColor: "var(--main-color2)" }}
                onClick={handleClose}
              >
                {t("backToHomepage")}
              </Button>
            </Link>
            <Link to={isChecked ? `${location.pathname}` : ""}>
              <Button
                className="fw-bold border-0"
                style={{ backgroundColor: "var(--main-color2)" }}
                onClick={handleClose}
                disabled={!isChecked}
              >
                {t("makeNewReport")}
              </Button>
            </Link>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyModal;
