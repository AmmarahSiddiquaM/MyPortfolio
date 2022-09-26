import styled from "@emotion/styled";
import {
  Slide,
  AppBar,
  Box,
  Container,
  Drawer,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { images } from "../../../assets/images";

import { colors, spacing } from "../../../styles";
import { Text } from "../../atoms";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const NavbarMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const onLinkClick = () => {
    handleDrawerClose();
  };

  const onClickLogo = () => {
    window.scrollTo(0, 0);
  };

  const containerRef = useRef();

  return (
    <>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: colors.background,
            boxShadow: "none",
            pt: spacing.m,
          }}
        >
          <Toolbar disableGutters>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              ref={containerRef}
            >
              <Logo src={images.logo} onClick={onClickLogo} />
              <MenuIcon
                onClick={handleDrawerOpen}
                fontSize="large"
                htmlColor="rgba(0,0,0,0.8)"
              />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        sx={{
          width: "100%",
          "& .MuiDrawer-paper": {
            backgroundColor: colors.background,
            width: "100%",
          },
        }}
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Toolbar disableGutters sx={{ width: "100%", pt: spacing.m }}>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              ref={containerRef}
            >
              <Logo src={images.logo} onClick={onClickLogo} />
              <CloseIcon
                fontSize="large"
                onClick={handleDrawerClose}
                htmlColor="rgba(0,0,0,0.8)"
              />
            </Container>
          </Toolbar>
          <Box
            id="nav-mobile"
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledA
              activeClass="nav-active"
              to="home"
              spy
              smooth
              onClick={onLinkClick}
            >
              <Text weight="bold" size="xxxl" color={colors.textGray}>
                Home
              </Text>
            </StyledA>
            <StyledA
              activeClass="nav-active"
              to="about"
              spy
              smooth
              onClick={onLinkClick}
            >
              <Text
                weight="bold"
                size="xxxl"
                color={colors.textGray}
                sx={{ mt: spacing.l }}
              >
                About
              </Text>
            </StyledA>
            <StyledA
              activeClass="nav-active"
              to="experiments"
              spy
              smooth
              onClick={onLinkClick}
            >
              <Text
                weight="bold"
                size="xxxl"
                color={colors.textGray}
                sx={{ mt: spacing.l }}
              >
                Experiments
              </Text>
            </StyledA>
            <StyledA
              activeClass="nav-active"
              to="contact"
              spy
              smooth
              onClick={onLinkClick}
            >
              <Text
                weight="bold"
                size="xxxl"
                color={colors.textGray}
                sx={{ mt: spacing.l }}
              >
                Contact
              </Text>
            </StyledA>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

const StyledA = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
