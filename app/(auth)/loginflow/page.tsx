"use client";
import React from "react";
import Page from "./page";
import RedirectToHome from "../_components/RecirectToHome";

const RedirectPage = () => {
  return (
    <div>
      <RedirectToHome />
      <Page />
    </div>
  );
};

export default RedirectPage;
