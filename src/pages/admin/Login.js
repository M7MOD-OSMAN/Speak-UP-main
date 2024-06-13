import { Link, NavLink } from "react-router-dom";
import banner from "./assets/login.png";
// import icon from "./editIcon.png";
import { BsPlusCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./admin.css";
import logo from "../../components/assets/logo.png";

const Login = () => {
  return (
    <>
      <section className="container Tajawal p-5">
        <div>
          <NavLink to="/">
            <img src={logo} className="img-fluid" alt="Speak up logo" />
          </NavLink>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center order-1 order-md-0 ">
            <div className="text-center mb-3">
              {/* <img
              src={icon}
              width={120}
              height={120}
              className="img-fluid"
              alt="Edit Icon"
            /> */}
            </div>
            <h3 className="primary-color display-3 fw-bolder ">Log in</h3>
            <div className=" d-flex justify-content-center align-items-center flex-column  text-center">
              <input
                type="email"
                className="form-control w-50 rounded-pill name "
                id="name"
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                className="form-control w-50 rounded-pill password "
                id="password"
                placeholder="Password"
              />
              <br />
              <button className="fs-3 border-0 login-btn p-2 px-4 pb-1 rounded-3 text-white ">
                Sign in
              </button>
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
      </section>
    </>
  );
};

export default Login;
