import footerImg from "./assets/footerImg.png";
const Footer = () => {
  return (
    <div className="container-fluid pb-0">
      <div className="row overflow-hidden ">
        <div className="col-12 p-0 m-0">
          <img src={footerImg} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
