import React from "react";
import Footer from "./footer";
import Header from "./header";

interface propsType {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement?: JSX.Element;
}

const Layout = (props: propsType) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
