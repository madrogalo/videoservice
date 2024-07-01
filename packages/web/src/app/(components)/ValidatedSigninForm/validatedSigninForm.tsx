"use client";
import React, { FormEvent, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { ValidatedTextField } from "../ValidatedTextField/validatedTextField";
import { useRouter } from "next/navigation";
import { PASSWORD_PATTERN } from "@/constants";
import { callToAPI } from "@/helpers/callToAPI";
import { formDataToString } from "@/helpers/formDataToString";

export const ValidatedSigninForm = () => {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const value = Object.fromEntries(formData.entries());

    callToAPI({
      method: "POST",
      url: "http://localhost:8080/register",
      params: {
        name: formDataToString(value.firstName),
        surname: formDataToString(value.lastName),
        email: formDataToString(value.email),
        password: formDataToString(value.password),
      },
    })
      .then(function (response) {
        router.push("/signed-in");
      })
      .catch(function (error) {
        alert("Can't sign in " + String.fromCodePoint(0x1f61e));
      });
  };

  const handleChangeKeepLoggedIn = (
    e: React.SyntheticEvent,
    checked: boolean
  ) => {
    setKeepLoggedIn(checked);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: "100%",
      }}
    >
      <ValidatedTextField
        name={"firstName"}
        label={"First Name"}
        autoComplete={"First Name"}
        type="name"
        helperText={"Please, enter first name"}
      />
      <ValidatedTextField
        name={"lastName"}
        label={"Last Name"}
        autoComplete={"Last Name"}
        type="name"
        helperText={"Please, enter last name"}
      />
      <ValidatedTextField
        name={"email"}
        label={"Email Address"}
        autoComplete={"email"}
        type="email"
        helperText={"Please, enter valid email"}
      />
      <ValidatedTextField
        name={"password"}
        label={"Password"}
        autoComplete={"password"}
        type="password"
        helperText={"Please, enter password"}
        inputProps={{
          pattern: PASSWORD_PATTERN,
        }}
      />
      <Grid container sx={{ mt: 4 }}>
        <FormControlLabel
          control={
            <Checkbox
              required
              value="remember"
              color="secondary"
              onChange={handleChangeKeepLoggedIn}
            />
          }
          label="I agree to the terms and privacy policy"
        />
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb: 2, height: 60 }}
        size="large"
        color="secondary"
      >
        Sign In
      </Button>
    </Box>
  );
};
