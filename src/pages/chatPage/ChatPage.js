import React, { useContext, useState, useRef } from "react";
import {
  CiCircleChevLeft,
  CiCircleChevRight,
  CiMicrophoneOn,
} from "react-icons/ci";
import { CgAttachment } from "react-icons/cg";
import banner from "./chat-banner.png";
import "./chatPage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";
import FormDataContext from "../../FormDataContext";
import { ReactMediaRecorder } from "react-media-recorder";
import VoiceRecorder from "../../components/VoiceRecorder";
import axios from "axios";
import { useEffect } from "react";

const ChatPage = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const inputRef = useRef();
  const { formData, updateFormData, setUniqueNumber } =
    useContext(FormDataContext);
  const { isRTL } = useContext(FormDataContext);

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
    updateFormData({ message: event.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleDisplayFileDetails = () => {
    if (inputRef?.current?.files) {
      const file = inputRef.current.files[0];
      setUploadedFileName(file?.name);
      console.log("FILE", file);
      updateFormData({ file });
    }
  };

  const updateFormDataToAyman = async () => {
    const formDataToSend = new FormData();

    // Append text data
    formDataToSend.append("data_type", "addNewCase");
    formDataToSend.append("message", formData.message);
    formDataToSend.append("classification", formData.classification);
    formDataToSend.append("company", formData.company);

    // Append file if it exists
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }

    // Append voice record if it exists
    if (formData.record) {
      formDataToSend.append("record", formData.record);
    }

    try {
      const res = await axios.post(
        "https://dmgian.corp-dmg.com/_speakup_api/index.php",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(res.data);
      setUniqueNumber(res?.data.case_number);
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleSubmit() {
    console.log(formData);
    updateFormDataToAyman();
  }

  const handleRecordingComplete = (url, blob) => {
    setAudioUrl(url);
    updateFormData({ record: blob });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 Tajawal">
          <Form id="submitForm" encType="multipart/form-data">
            <Form.Group controlId="textarea">
              <Form.Label className="h2 boldFont fs-1 mb-3 fw-bold Tajawal secondary-color">
                {t("chatPage")}
              </Form.Label>
              <Form.Control
                as="textarea"
                className="textare p-3"
                rows={7}
                style={{ resize: "none" }}
                placeholder={t("writeYourMessage")}
                onChange={handleTextareaChange}
                value={message}
                defaultValue={formData.message || ""}
              />
            </Form.Group>
            <div className="mt-3 d-flex justify-content-between align-items-center px-3 mb-2">
              <span>{t("attachTypes")}</span>
              <span>
                <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
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
          <div>
            <p className={`${!isRTL ? "text-start" : "text-end "} p-3 pb-0`}>
              <span className="secondary-color">{t("noteSpan")}</span>{" "}
              {t("chatPageNote")}
            </p>
            <div className={`${!isRTL ? "text-start" : "text-end "} px-2`}>
              <Link to="/new-rep">
                {!isRTL ? (
                  <CiCircleChevLeft cursor="true" size={35} className="ri" />
                ) : (
                  <CiCircleChevRight cursor="true" size={35} className="ri" />
                )}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-5 p-5 p-md-0 text-center">
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

export default ChatPage;
