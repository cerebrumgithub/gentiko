import React from "react";
import Navbarz from "./Navbar";
import Footer from "./Footer";

const PublicLayout = ({ children, haveFooter = true }) => {
  return (
    <>
      <Navbarz />
      <main className="PublicLayout">{children}</main>

      {haveFooter ? <Footer /> : null}
    </>
  );
};

export default PublicLayout;
