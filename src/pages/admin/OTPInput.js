import React, { useRef } from "react";
import { TextField, Grid, Box } from "@mui/material";

const OTPInput = ({ length, onChange }) => {
  const [values, setValues] = React.useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (index) => (event) => {
    const newValue = event.target.value;
    if (newValue.length > 1) return;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
    onChange(newValues.join(""));
    if (newValue && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index) => (event) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  return (
    <Box display="flex" justifyContent="center" gap={1}>
      {values.map((value, index) => (
        <TextField
          key={index}
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
              width: "50px",
              height: "70px",
              padding: "8px",
              backgroundColor: "#00B0C9",
              color: "white",
              borderRadius: "10px",
              fontSize: "32px",
              fontWeight: "bolder",
            },
          }}
          value={value}
          onChange={handleChange(index)}
          onKeyDown={handleKeyDown(index)}
          inputRef={(el) => (inputsRef.current[index] = el)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OTPInput;
