"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const Logged = () => {
  const router = useRouter();

  const handleNavigateToMainPage = () => {
    router.replace("/");
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h5" component="div" fontWeight={700} color="primary">
        You are succesfully signed in
      </Typography>
      <Button onClick={handleNavigateToMainPage}>Main page</Button>
    </Box>
  );
};

export default Logged;
