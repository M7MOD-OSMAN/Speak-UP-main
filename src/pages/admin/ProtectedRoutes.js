import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { PiChartLineUpLight } from "react-icons/pi";
import { HiOutlineChartBar } from "react-icons/hi2";
import { GrLogout } from "react-icons/gr";
import logo from "../../components/assets/logo.png";
import { useEffect } from "react";
import axios from "axios";

const ProtectedRoutes = () => {
  useEffect(() => {
    //  data_type ==> getAbalysisByClass
    //  for companies reports ==> getAbalysisByComp
    const signIn = async () => {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("data_type", "signIn");
        const response = await axios.post(
          "https://dmgian.corp-dmg.com/_speakup_api/index.php",
          formDataToSend
        );

        console.log(response.data);
        //  TODO: the api is going to return if user exists in the database or not
        //  and return some token or so...
        //  we will then store this token in localStorage
        //  and use it to either render the admin view pages or redirect to the login page
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    signIn();
  }, []);

  const localStorageToken = localStorage.getItem("token");
  // Use authentication token
  return true ? (
    <div className="container p-2 mb-3 " dir="ltr">
      <div className="row">
        <div className="col-2">
          <br />
          <div>
            <NavLink to="/">
              <img src={logo} className="img-fluid" alt="Speak up logo" />
            </NavLink>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center flex-column align-items-start px-5 text-start mt-3">
            <Link className="mb-3 text-decoration-none" to="cases">
              <h5 className="primary-color d-flex flex-row justify-content-center align-content-center gap-1">
                <span className="d-flex justify-content-lg-center align-items-center">
                  <HiOutlineChartBar />
                </span>
                Cases
              </h5>
            </Link>
            <Link className="mb-3 text-decoration-none" to="dashboard">
              <h5 className="primary-color d-flex flex-row justify-content-center align-items-center gap-1">
                <span className="d-flex justify-content-lg-center align-items-center">
                  <MdSpaceDashboard />
                </span>
                <span>Dashboard</span>
              </h5>
            </Link>
            <Link className="mb-3 text-decoration-none" to="analysis">
              <h5 className="primary-color d-flex flex-row justify-content-center align-content-center gap-1">
                <span className="d-flex justify-content-lg-center align-items-center">
                  <PiChartLineUpLight />
                </span>
                Analysis
              </h5>
            </Link>
          </div>
          <br />
          <br />

          <hr />
          <div>
            <Link className="mb-3 text-decoration-none" to="/login">
              <h5 className="primary-color d-flex flex-row justify-content-center align-content-center gap-1">
                <span className="primary-color">
                  <GrLogout />
                </span>
                Log out
              </h5>
            </Link>
          </div>
        </div>
        <div className="col-10 " style={{ backgroundColor: "#F1F2F7" }}>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
