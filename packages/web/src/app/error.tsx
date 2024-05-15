"use client";

import React from "react";
import { ERRORS } from "./errors";

export default function Error({ error }: { error: Error }) {
  if (error.message === ERRORS.NOT_FOUND) return <h2>Article not found</h2>;
  return <h2>Something went wrong</h2>;
}
