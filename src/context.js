import { useEffect, useState, createContext } from "react";
import { useTranslation } from "react-i18next";

const customerContext = createContext();

const CustomerProvider = ({ children }) => {
  // const [langType, setLangType] = useState(
  //   localStorage.getItem("i18nextLng") || "en"
  // );
  // const [isRTL, setIsRTL] = useState(false);

  // const { i18n } = useTranslation();

  // const toggleDirection = () => {
  //   setIsRTL((prevDir) => !prevDir);
  //   // setIsRTL(isRTL);
  // };
  // useEffect(() => {
  //   document.getElementsByTagName("Body")[0].style.direction = isRTL
  //     ? "rtl"
  //     : "ltr";
  // }, [isRTL]);
  // const changeLanguage = (lng) => {
  //   toggleDirection();
  //   i18n.changeLanguage(lng);
  // };
  // console.log(langType);
  // useEffect(() => {
  //   if (langType === "en") {
  //     document.getElementsByTagName("Body")[0].style.direction = "ltr";
  //   } else {
  //     document.getElementsByTagName("Body")[0].style.direction = "rtl";
  //     changeLanguage("ar");
  //   }
  // }, [langType]);

  // const changeLanguage = (lng) => {
  //   // localStorage.setItem("lng", lng);
  //   // toggleDirection();
  //   // console.log(lng);
  //   setLangType(lng);
  //   i18n.changeLanguage(lng);
  //   // document.location.reload();
  // };

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <customerContext.Provider
        value={{
          changeLanguage,
        }}
      >
        {children}
      </customerContext.Provider>
    </div>
  );
};

export { customerContext, CustomerProvider };
