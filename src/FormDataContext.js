import React, { createContext, useState } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    company: "",
    classification: "",
    message: "",
    file: null,
    record: null,
  });

  const [uniqueNumber, setUniqueNumber] = useState(null);
  const [userReportDetails, setUserReportDetails] = useState({});

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <FormDataContext.Provider
      value={{
        formData,
        updateFormData,
        uniqueNumber,
        setUniqueNumber,
        userReportDetails,
        setUserReportDetails,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
