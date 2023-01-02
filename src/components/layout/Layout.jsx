import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* <Footer /> */}
    </>
  );
};
