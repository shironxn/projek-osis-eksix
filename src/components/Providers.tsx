"use client";

import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const Providers = ({ children }: any) => {
  return <ReCaptchaProvider>{children}</ReCaptchaProvider>;
};

export default Providers;
