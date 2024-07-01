"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";

type ValidatedTextFieldType = {
  name: string;
  label: string;
  autoComplete: string;
  helperText: string;
  type: string;
  inputProps?: { pattern: string };
};

export const ValidatedTextField = (props: ValidatedTextFieldType) => {
  const [value, setValue] = useState("");
  const [valueError, setValueError] = useState(false);
  const handleValueChange = (e: any) => {
    setValue(e.target.value);
    setValueError(!e.target.validity.valid);
  };

  return (
    <TextField
      sx={{ mt: 2.5 }}
      size="small"
      required
      fullWidth
      id={props.name}
      label={props.label}
      name={props.name}
      autoComplete={props.autoComplete}
      type={props.type}
      autoFocus
      color="primary"
      value={value}
      onChange={handleValueChange}
      error={!!valueError}
      helperText={valueError ? props.helperText : ""}
      inputProps={props.inputProps}
    />
  );
};
