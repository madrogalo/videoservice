import AuthLayout from "@/app/(components)/AuthLayout/AuthLayout";
import SignInBox from "@/app/(components)/SignInBox/SignInBox";
import React from "react";

export const SignIn = () => {
  return (
    <AuthLayout>
      <SignInBox />
    </AuthLayout>
  );
};

export default SignIn;
