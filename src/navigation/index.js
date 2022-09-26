import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

import { NavbarFooter } from "./navbar-footer";

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavbarFooter />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
