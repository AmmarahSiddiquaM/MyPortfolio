import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { colors, spacing } from "../../../styles";
import { Text } from "../../atoms";

export const Footer = () => {
  return (
    <section id="contact">
      <Box>
        <Divider />
        <Box
          sx={{
            py: spacing.xxxxl,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text variant="secondary" size="xxl">
            Let's Connect
          </Text>
          <StyledA href="mailto:ammarah.2302@gmail.com">
            ammarah.2302@gmail.com
          </StyledA>
          <Box sx={{ display: "flex", mt: spacing.l }}>
            <SocialIcon
              href="https://www.linkedin.com/in/ammarah-ahmad-siddiqua/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon
              href="https://www.facebook.com/AmmarahSiddiqua/"
              target="_blank"
            >
              <FacebookIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/ammarah_siddiqua/"
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </SocialIcon>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

const StyledA = styled.a`
  text-decoration: none;
  color: ${colors.primary};
`;

const SocialIcon = styled.a`
  color: ${colors.textPrimary};
  text-decoration: none;
  margin: 0px ${spacing.s};
  cursor: pointer;
`;
