import { Form } from "react-bootstrap";
import banner from "./ReportStatus.png";
import { useTranslation } from "react-i18next";
import {
  BsCircleFill,
  BsClock,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import { useContext, useRef, useState } from "react";
import FormDataContext from "../../FormDataContext";
import VoiceRecorder from "../../components/VoiceRecorder";
import { CgAttachment } from "react-icons/cg";
import { Link } from "react-router-dom";

const ReportStatus = () => {
  const [message, setMessage] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const inputRef = useRef();

  const { formData, updateFormData, userReportDetails } =
    useContext(FormDataContext);
  const { t } = useTranslation();

  const handleUpload = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  const reportDetails = JSON.parse(localStorage.getItem("userReportDetails"));
  console.log(reportDetails);

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
    updateFormData({ message: event.target.value });
  };
  const handleDisplayFileDetails = () => {
    if (inputRef?.current?.files) {
      const file = inputRef.current.files[0];
      setUploadedFileName(file?.name);
      console.log("FILE", file);
      updateFormData({ file });
    }
  };
  const textareaStyle = {
    resize: "none",
    backgroundColor: "#D9D9D9",
  };
  function handleSubmit() {
    console.log(formData);
    const formData2 = new FormData();
    formData2.append("message", message);
    formData2.append("audioUrl", audioUrl);
    if (uploadedFileName) {
      formData2.append("uploadedFileName", uploadedFileName);
    }
    console.log(formData2.getAll("message"));
  }

  const handleRecordingComplete = (url) => {
    setAudioUrl(url);
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center  order-1 order-md-0 ">
          <h2 className="fs-1 fw-bold secondary-color">{t("repStatus")}</h2>
          <div className="warning-div rounded-2 m-2 m-md-5 mt-md-2 p-2 mb-md-2 position-relative ">
            <div className=" d-flex align-items-center justify-content-between  ms-3 ms-md-5 gap-3 mb-2">
              <div>
                <span>
                  <BsClock size={35} />
                </span>
                <span className="primary-color ms-3">
                  {userReportDetails?.creattion_time}
                </span>
              </div>
              <div className="">
                <a href="#" className="text-decoration-none secondary-color">
                  {t("details")}
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center  ms-3 ms-md-5 gap-3 mb-2">
              <span>
                <BsCircleFill size={35} />
              </span>
              {reportDetails?.status === "new" && (
                <span className="fs-3">{t("noReply")}</span>
              )}
              {reportDetails?.status === "in-progress" && (
                <span className="fs-3">{t("checkingRep")}</span>
              )}
              {reportDetails?.status === "closed" && (
                <span className="fs-3">{t("finished&Replied")}</span>
              )}
            </div>
            <div className="d-flex align-items-center  ms-3 ms-md-5 gap-3 mb-2">
              <span>
                <BsFillExclamationCircleFill size={35} fill="#00B0C9" />
              </span>
              <span className="primary-color">{t("checkingRep")}</span>
            </div>
          </div>
          {reportDetails?.reply_message && (
            <Form className="m-2 m-md-5 mt-md-2 p-2 px-0">
              <Form.Group controlId="textarea">
                <Form.Control
                  as="textarea"
                  className="textare p-3 secondary-color"
                  rows={1}
                  style={textareaStyle}
                  placeholder={t("addComment")}
                  onChange={handleTextareaChange}
                  value={message}
                  defaultValue={formData.message || ""}
                />
              </Form.Group>
              <div className="mt-3 d-flex justify-content-around  align-items-center px-1 mb-2">
                <span style={{ fontSize: "11px" }}>{t("attachTypes")}</span>
                <span>
                  <VoiceRecorder
                    onRecordingComplete={handleRecordingComplete}
                  />
                </span>
                <span>
                  <input
                    type="file"
                    ref={inputRef}
                    className="d-none"
                    onChange={handleDisplayFileDetails}
                  />
                  <button className="btn" onClick={handleUpload}>
                    <span>{uploadedFileName}</span>
                    <span>
                      <CgAttachment
                        cursor="pointer"
                        size={30}
                        className="chat-icon"
                      />
                    </span>
                  </button>
                </span>
                <span>
                  <Link to="/rep-num" className="text-decoration-none">
                    <span
                      onClick={handleSubmit}
                      className="button border-0 text-white submit-btn rounded-1 fs-5 py-2 px-4"
                    >
                      {t("submit")}
                    </span>
                  </Link>
                </span>
              </div>
            </Form>
          )}
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

export default ReportStatus;
