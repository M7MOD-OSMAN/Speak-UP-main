// import React, { useContext, useState, useEffect } from "react";
// import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
// import banner from "./new-rep-banner.png";
// import "./NewReport.css";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import FormDataContext from "../../FormDataContext";

// const NewReport = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [definition, setDefinition] = useState(null);

//   const { formData, updateFormData } = useContext(FormDataContext);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     setDefinition(t(`${event.target.value}Def`));
//   };

//   // const handleOptionChange = (event) => {
//   //   setSelectedOption(event.target.value);
//   //   setDefinition(t(`${event.target.value}Def`));
//   // };

//   console.log(definition);
//   const { t, i18n } = useTranslation();

// const customStyle = {
//   backgroundColor: "#f5f5f5 !important",
//   color: "#fff",
//   borderRadius: "8px",
//   border: 0,
//   height: "50px",
//   minWidth: "130px",
//   maxWidth: "180px",
//   backgroundColor: "#00b0c9",
//   fontSize: "1rem",
// };
//   const options = Array.from(
//     { length: 11 },
//     (_, index) => `speakUPLabel${index + 1}`
//   );
//   return (
//     <section className="container">
//       <div className="row">
//         <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 ">
//           <div className="text-center mb-3">
//             <h2 className="fs-1 fw-bold secondary-color Tajawal">
//               {t("newReport")}
//             </h2>
//           </div>

//           <div className="d-flex justify-content-center gap-2 gap-md-4 Tajawal">
//             <Link
//               className="d-flex justify-content-center align-items-center"
//               to="/scenario"
//             >
//               {i18n.language === "ar" ? (
//                 <CiCircleChevRight size={35} className="ri" />
//               ) : (
//                 <CiCircleChevLeft size={35} className="ri" />
//               )}
//             </Link>
//             <div className="custom-select ">
//               <select style={customStyle}>
//                 <option value="" disabled selected hidden>
//                   {t("company")}
//                 </option>
//                 <option value="MV">MV</option>
//                 <option value="DME">DME</option>
//                 <option value="DMA">DMA</option>
//               </select>
//             </div>
//             <div className="custom-select">
//               <select
//                 style={customStyle}
//                 onChange={handleOptionChange}
//                 value={selectedOption}
//               >
//                 <option value="" disabled selected hidden>
//                   {t("classification")}
//                 </option>
//                 {options.map((option, index) => (
//                   <option key={index} value={option}>
//                     {t(option)}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <Link
//               className="d-flex justify-content-center align-items-center"
//               to="/chat-page"
//             >
//               {i18n.language === "ar" ? (
//                 <CiCircleChevLeft size={35} className="ri" />
//               ) : (
//                 <CiCircleChevRight size={35} className="ri" />
//               )}
//             </Link>
//           </div>
//           {definition && <p className="mt-3">{definition}</p>}
//         </div>
//         <div className="col-12 col-md-6 mb-5 p-5 p-md-0  text-center">
//           <img
//             src={banner}
//             className="img-fluid"
//             alt="various phrases indicating the concept of the application"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewReport;

// src/components/NewReport.js
import banner from "./new-rep-banner.png";
import "./NewReport.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormDataContext from "../../FormDataContext";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const NewReport = () => {
  const { t, i18n } = useTranslation();
  const { updateFormData } = useContext(FormDataContext);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("");
  const [definition, setDefinition] = useState(null);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    updateFormData({ company: event.target.value });
  };

  const handleClassificationChange = (event) => {
    setSelectedClassification(event.target.value);
    updateFormData({ classification: t(`${event.target.value}`) });
    setDefinition(t(`${event.target.value}Def`));
    console.log("Value", t(`${event.target.value}`));
  };

  const customStyle = {
    backgroundColor: "#f5f5f5 !important",
    color: "#fff",
    borderRadius: "8px",
    border: 0,
    height: "50px",
    minWidth: "130px",
    maxWidth: "180px",
    backgroundColor: "#00b0c9",
    fontSize: "1rem",
  };
  const options = Array.from(
    { length: 11 },
    (_, index) => `speakUPLabel${index + 1}`
  );

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 ">
          <div className="text-center mb-3">
            <h2 className="fs-1 fw-bold secondary-color Tajawal">
              {t("newReport")}
            </h2>
          </div>

          <div className="d-flex justify-content-center gap-2 gap-md-4 Tajawal">
            <Link
              className="d-flex justify-content-center align-items-center"
              to="/scenario"
            >
              {i18n.language === "ar" ? (
                <CiCircleChevRight size={35} className="ri" />
              ) : (
                <CiCircleChevLeft size={35} className="ri" />
              )}
            </Link>
            <div className="custom-select ">
              <select
                style={customStyle}
                onChange={handleCompanyChange}
                value={selectedCompany}
              >
                <option value="" disabled selected hidden>
                  {t("company")}
                </option>
                <option value="MV">MV</option>
                <option value="DME">DME</option>
                <option value="DMA">DMA</option>
              </select>
            </div>
            <div className="custom-select">
              <select
                style={customStyle}
                onChange={handleClassificationChange}
                value={selectedClassification}
              >
                <option value="" disabled selected hidden>
                  {t("classification")}
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {t(option)}
                  </option>
                ))}
              </select>
            </div>
            <Link
              className="d-flex justify-content-center align-items-center"
              to="/chat-page"
            >
              {i18n.language === "ar" ? (
                <CiCircleChevLeft size={35} className="ri" />
              ) : (
                <CiCircleChevRight size={35} className="ri" />
              )}
            </Link>
          </div>
          {definition && <p className="mt-3">{definition}</p>}
        </div>
        <div className="col-12 col-md-6 mb-5 p-5 p-md-0  text-center">
          <img
            src={banner}
            className="img-fluid"
            alt="various phrases indicating the concept of the application"
          />
        </div>
      </div>
    </section>
  );
};

export default NewReport;
