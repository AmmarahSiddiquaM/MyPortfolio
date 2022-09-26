import styled from "@emotion/styled";
import { AppBar, Box, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-scroll";
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

export const NavbarWeb = () => {
  const onClickLogo = () => {
    window.scrollTo(0, 0);
  };

  return (
    <HideOnScroll>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: colors.background,
          boxShadow: "none",
          pt: spacing.m,
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Logo src={images.logo} onClick={onClickLogo} />
            <Box sx={{ display: "flex", flex: 1 }} />
            <StyledA activeClass="nav-active" to="home" spy smooth>
              <Text weight="bold" size="s">
                HOME
              </Text>
            </StyledA>
            <StyledA activeClass="nav-active" to="about" spy smooth>
              <Text weight="bold" size="s">
                ABOUT
              </Text>
            </StyledA>
            <StyledA activeClass="nav-active" to="experiments" spy smooth>
              <Text weight="bold" size="s">
                EXPERIMENTS
              </Text>
            </StyledA>
            <StyledA activeClass="nav-active" to="contact" spy smooth>
              <Text weight="bold" size="s">
                CONTACT
              </Text>
            </StyledA>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

const StyledA = styled(Link)`
  text-decoration: none;
  margin-left: ${spacing.xxxl};
  cursor: pointer;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
