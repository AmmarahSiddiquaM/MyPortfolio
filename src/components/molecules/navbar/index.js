import { useIsMobile } from "../../../hooks/useIsMobile";
import { NavbarMobile } from "./navbar.mobile";
import { NavbarWeb } from "./navbar.web";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const Wrapper = isMobile ? NavbarMobile : NavbarWeb;

  return <Wrapper />;
};
