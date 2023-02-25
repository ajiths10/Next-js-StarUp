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
      <div className="container p-5 m-5">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
