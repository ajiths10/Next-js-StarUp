import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
