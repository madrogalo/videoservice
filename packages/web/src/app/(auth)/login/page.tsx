"use server";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import img from "@assets/image.png";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  TextField,
} from "@mui/material";
import googleImage from "@assets/Google.png";
import facebookImage from "@assets/Facebook.png";
import instagramImage from "@assets/Instagram.png";
import twitterImage from "@assets/Twitter.png";
import { SocialIconButton } from "@/app/(components)/SocialIconButton/socialIconButton";

const SocialIcons = [
  { image: googleImage, alt: "Google icon" },
  { image: facebookImage, alt: "Facebook icon" },
  { image: instagramImage, alt: "Instagram icon" },
  { image: twitterImage, alt: "Twitter icon" },
];

export const Login = () => {
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
          <TextField
            sx={{ mt: 2.5 }}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            color="primary"
          />
          <TextField
            sx={{ mt: 2.5 }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color="primary"
          />
          <Grid container sx={{ mt: 4 }}>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
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
            Sign In
          </Button>
          <Link href="#" variant="body2" sx={{ mt: 3 }} color="secondary">
            {"Don't have an account? Sign Up"}
          </Link>
          <Typography
            sx={{ margin: "auto", mt: { xs: 4, md: 6 }, opacity: "50%" }}
            align="center"
            color="primary.light"
          >
            Or continue with
          </Typography>
          <Grid
            container
            sx={{ mt: { xs: 2, md: 4 } }}
            justifyContent={"center"}
          >
            {SocialIcons.map((icon) => (
              <Grid item>
                <SocialIconButton imageSrc={icon.image} imageAlt={icon.alt} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
