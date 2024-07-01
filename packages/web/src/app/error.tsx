"use client";

import React from "react";
import { ERRORS } from "./errors";
import { Box, Typography } from "@mui/material";

export default function Error({ error }: { error: Error }) {
  if (error.message === ERRORS.NOT_FOUND) return <h2>Article not found</h2>;
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h5" component="div" fontWeight={700} color="primary">
        Something went wrong
      </Typography>
    </Box>
  );
}
