import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCopy } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";

import banner from "./repo-num-banner.png";
import "./ReportNumber.css";
import FormDataContext from "../../FormDataContext";

const ReportNumber = () => {
  const { t } = useTranslation();
  const [ticketId, setTicketId] = useState("");
  const [copied, setCopied] = useState(false);
  const { uniqueNumber } = useContext(FormDataContext);

  useEffect(() => {
    generateTicketId();
  }, []);

  const generateTicketId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 5; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setTicketId(id);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uniqueNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0">
          <p className="fs-3 fw-bold secondary-color mb-0 ">
            {t("thanksForSharing")}
          </p>
          <p className="primary-color fs-4">{t("responseIn10Days")}</p>
          <p className="primary-color fs-2 mb-1">{t("repNum")}</p>
          <div className="d-flex justify-content-center align-items-center gap-3 text-white fs-5 fw-bold">
            {uniqueNumber?.split("").map((digit, index) => (
              <span key={index} role="button" className="digit p-3 rounded-2">
                {digit}
              </span>
            ))}
          </div>
          <div className="warning-div d-flex justify-content-center align-items-center gap-2 m-2 m-md-5 mt-md-4 mb-md-4 rounded-2 p-1 p-md-3">
            <PiWarningFill size={72} fill="#c90000" />
            <span className="primary-color fs-5">{t("saveRepNum")}</span>
          </div>
          <div>
            <center>
              <span
                style={{ cursor: "pointer" }}
                onClick={copyToClipboard}
                className="fs-6 text-decoration-none fw-bold primary-color"
              >
                {copied ? t("ticketCopied") : t("copyRepNum")}{" "}
                <FaCopy size={25} />
              </span>
            </center>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-5 p-5 p-md-0  text-center">
          <img src={banner} className="img-fluid" alt={t("bannerAltText")} />
        </div>
      </div>
    </section>
  );
};

export default ReportNumber;
