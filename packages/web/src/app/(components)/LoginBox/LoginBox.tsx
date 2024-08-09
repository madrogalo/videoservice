import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { SocialIconButton } from "../SocialIconButton/socialIconButton";
import { ValidatedLoginForm } from "../ValidatedLoginForm/validatedLoginForm";

import googleImage from "@assets/Google.png";
import facebookImage from "@assets/Facebook.png";
import instagramImage from "@assets/Instagram.png";
import twitterImage from "@assets/Twitter.png";

const SocialIcons = [
  { image: googleImage, alt: "Google icon" },
  { image: facebookImage, alt: "Facebook icon" },
  { image: instagramImage, alt: "Instagram icon" },
  { image: twitterImage, alt: "Twitter icon" },
];

export const LoginBox = () => {
  return (
    <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          margin: { xs: 4, md: 6, lg: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography variant="h3" fontWeight={700} color="primary">
          Login
        </Typography>

        <Typography
          variant="body1"
          fontWeight={400}
          mt={2.5}
          color="primary.dark"
        >
          Login your account in a seconds
        </Typography>
        <ValidatedLoginForm />

        <Link href="/signin" variant="body2" sx={{ mt: 3 }} color="secondary">
          {"Don't have an account? Sign Up"}
        </Link>
        <Typography
          sx={{ margin: "auto", mt: { xs: 4, md: 6 }, opacity: "50%" }}
          align="center"
          color="primary.light"
        >
          Or continue with
        </Typography>
        <Grid container sx={{ mt: { xs: 2, md: 4 } }} justifyContent={"center"}>
          {SocialIcons.map((icon) => (
            <Grid item>
              <SocialIconButton imageSrc={icon.image} imageAlt={icon.alt} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default LoginBox;
