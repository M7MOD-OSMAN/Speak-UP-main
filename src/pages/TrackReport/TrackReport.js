import { CiCircleChevLeft } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import banner from "./track-rep.png";
import { Container, Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import OTPInput from "../admin/OTPInput";
import "./TrackReport.css";
import { useContext, useState } from "react";
import axios from "axios";
import FormDataContext from "../../FormDataContext";

const TrackReport = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { userReportDetails, setUserReportDetails, updateFormData } =
    useContext(FormDataContext);

  const trackReport = async () => {
    const formDataToSend = new FormData();

    // Append text data
    formDataToSend.append("data_type", "trackMyCase");
    formDataToSend.append("ticket_code", otp);

    try {
      const res = await axios.post(
        "https://dmgian.corp-dmg.com/_speakup_api/index.php",
        formDataToSend
      );
      console.log(res.data);
      setUserReportDetails(res?.data);
      localStorage.setItem("userReportDetails", JSON.stringify(res?.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Entered OTP:", otp);
    trackReport();
    navigate("/track-status");
  };
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 ">
          <h2 className="fs-1 fw-bold secondary-color Tajawal">
            {t("trackYourReport")}
          </h2>
          <p className="primary-color h2 fs-2 Tajawal">{t("enterRepNum")}</p>
          <div className="text-start  px-2">
            <Link to="/scenario">
              <CiCircleChevLeft size={35} className="ri " />
            </Link>
          </div>

          {/* <div className="d-flex justify-content-center gap-3 text-white fs-5 fw-bold">
            <input
              type="number"
              width={"auto"}
              role="button"
              className="digit p-3 rounded-2 transparent"
            />
            <span role="button" className="digit p-3 rounded-2 transparent">
              2
            </span>
            <span role="button" className="digit p-3 rounded-2 transparent">
              3
            </span>
            <span role="button" className="digit p-3 rounded-2 transparent">
              5
            </span>
            <span role="button" className="digit p-3 rounded-2 transparent">
              4
            </span>
          </div> */}
          <Container maxWidth="sm">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              // minHeight="100vh"
            >
              <form onSubmit={handleSubmit}>
                <OTPInput length={5} onChange={setOtp} />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  style={{ marginTop: "12px" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Container>
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

export default TrackReport;
