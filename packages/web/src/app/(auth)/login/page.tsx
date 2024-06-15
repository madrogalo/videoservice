"use server";
import React from "react";
import { LoginBox } from "@/app/(components)/LoginBox/LoginBox";
import AuthLayout from "@/app/(components)/AuthLayout/AuthLayout";

export const Login = () => {
  return (
    <AuthLayout>
      <LoginBox />
    </AuthLayout>
  );
};

export default Login;
