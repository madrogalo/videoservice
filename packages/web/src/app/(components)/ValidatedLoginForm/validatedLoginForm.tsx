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

export const ValidatedLoginForm = () => {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      router.push("/logged");
    } else {
      alert("Form isn't valid");
    }
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
