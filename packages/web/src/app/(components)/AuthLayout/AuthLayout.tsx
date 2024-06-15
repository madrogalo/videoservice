import { CssBaseline, Grid } from "@mui/material";
import React from "react";
import img from "@assets/image.png";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={7}
        sx={{
          backgroundImage: `url(${img.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />
      {children}
    </Grid>
  );
};

export default AuthLayout;
