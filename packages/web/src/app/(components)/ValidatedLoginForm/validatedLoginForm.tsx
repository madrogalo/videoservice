"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
} from "@mui/material";
import { ValidatedTextField } from "../ValidatedTextField/validatedTextField";
import { useRouter } from "next/navigation";
import { PASSWORD_PATTERN } from "@/constants";
import { callToAPI } from "@/helpers/callToAPI";
import { formDataToString } from "@/helpers/formDataToString";

export const ValidatedLoginForm = () => {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const value = Object.fromEntries(formData.entries());

    callToAPI({
      method: "POST",
      url: "http://localhost:8080/login",
      params: {
        email: formDataToString(value.email),
        password: formDataToString(value.password),
      },
    })
      .then(function (response) {
        router.push("/protected");
      })
      .catch(function (error) {
        alert("Can't login " + String.fromCodePoint(0x1f61e));
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
        <Grid item xs>
          <FormControlLabel
            control={
              <Checkbox
                required
                value="remember"
                color="secondary"
                onChange={handleChangeKeepLoggedIn}
              />
            }
            label="Keep me logged in "
          />
        </Grid>
        <Grid item alignSelf={"center"}>
          <Link href="#" variant="body1" color="secondary">
            Forgot password?
          </Link>
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb: 2, height: 60 }}
        size="large"
        color="secondary"
      >
        Log In
      </Button>
    </Box>
  );
};
