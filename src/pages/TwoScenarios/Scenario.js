import { Link } from "react-router-dom";
import banner from "./banner.png";
import icon from "./editIcon.png";
import { BsPlusCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import MyModal from "./Modal";

const Scenario = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const { t } = useTranslation();

  return (
    <>
      <section className="container Tajawal">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 ">
            <div className="text-center mb-3">
              <img
                src={icon}
                width={120}
                height={120}
                className="img-fluid"
                alt="Edit Icon"
              />
            </div>
            <p className="primary-color fs-2">
              {t("startTrustedConversation")}
            </p>

            <div>
              <Link to="/new-rep">
                <button className="button border-0 fs-4 text-white px- rounded py-2 ">
                  <BsPlusCircle size={35} /> {t("newReport")}
                </button>
              </Link>
              <br />
              <br />
              <Link to="/track-rep">
                <button className="button border-0 fs-5 text-nowrap  text-white px-5 ps-4 rounded py-2 Tajawal">
                  <span>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.40966 21.9061C8.41425 20.0851 10.3306 18.9554 12.4104 18.9584C14.8709 18.9948 17.0305 20.6056 17.7668 22.9536C18.5031 25.3016 17.6501 27.8572 15.651 29.2921C13.6519 30.727 10.9577 30.7176 8.96869 29.2688L6.85411 31.4709C6.64529 31.6809 6.36277 31.8013 6.06661 31.8063C5.78314 31.8092 5.51019 31.699 5.30827 31.5C4.88178 31.073 4.88178 30.3812 5.30827 29.9542L7.42286 27.7084H7.58327C6.47159 25.9507 6.40506 23.7271 7.40966 21.9061ZM8.89577 24.6604C8.89577 26.6015 10.4693 28.175 12.4104 28.175V28.1313C14.3344 28.1314 15.901 26.5844 15.9249 24.6604C15.9249 22.7194 14.3514 21.1459 12.4104 21.1459C10.4693 21.1459 8.89577 22.7194 8.89577 24.6604Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.4686 3.47086L29.6769 13.6792C29.9201 13.8816 30.0637 14.1795 30.0706 14.4959V24.7042C30.0706 26.5414 29.3408 28.3033 28.0417 29.6024C26.7427 30.9015 24.9807 31.6313 23.1436 31.6313H18.9581C18.3541 31.6313 17.8644 31.1416 17.8644 30.5375C17.8644 29.9335 18.3541 29.4438 18.9581 29.4438H23.0706C25.6882 29.4438 27.8102 27.3218 27.8102 24.7042V15.5896H21.6123C19.4007 15.5816 17.6099 13.7908 17.6019 11.5792V5.38127H14.3206C11.7064 5.38928 9.58906 7.50658 9.58106 10.1209V17.4125C9.58106 18.0166 9.09137 18.5063 8.48731 18.5063C7.88324 18.5063 7.39356 18.0166 7.39356 17.4125V10.1209C7.3819 8.27611 8.10657 6.50292 9.40692 5.19436C10.7073 3.88581 12.4759 3.14999 14.3206 3.15002H18.6956C18.9856 3.15028 19.2636 3.26568 19.4686 3.47086ZM19.7894 6.88336V11.5792C19.7894 12.586 20.6055 13.4021 21.6123 13.4021H26.2498L19.7894 6.88336Z"
                        fill="white"
                      />
                    </svg>
                  </span>{" "}
                  {t("trackYourReport")}
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

        <MyModal show={showModal} handleClose={handleCloseModal} />
      </section>
    </>
  );
};

export default Scenario;
