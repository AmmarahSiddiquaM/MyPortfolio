import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components/molecules";

export const NavbarFooter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
