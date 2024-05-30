import { Box, Typography } from "@mui/material";
import React from "react";

export const Logged = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h5" component="div" fontWeight={700} color="primary">
        You are succesfully logged in
      </Typography>
    </Box>
  );
};

export default Logged;
