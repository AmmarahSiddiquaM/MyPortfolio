import { Button, Divider } from "@mui/material";
import PDF from "../../../assets/resume/Ammarah_Resume.pdf";

import {
  FadeInContainer,
  FullHeightContainer,
  Text,
} from "../../../components/atoms";
import { colors, spacing } from "../../../styles";
import { Companies } from "../companies";

export const About = () => {
  const onClickResume = () => {
    window.open(PDF);
  };

  return (
    <>
      <FullHeightContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: {
            md: spacing.xxxl,
          },
          mt: { xs: spacing.xxxxl, sm: spacing.xxl, md: 0 },
        }}
      >
        <Text size="l" weight="bold">
          I'm Ammarah, a software engineer from Bangalore.
        </Text>
        <Text size="l" mt={spacing.xl}>
          I was born in the temple town of{" "}
          <Text size="l" component="span" weight="bold">
            Madurai
          </Text>{" "}
          but grew up in{" "}
          <Text size="l" component="span" weight="bold">
            Neyveli
          </Text>{" "}
          - a lignite mining town in the state of Tamil Nadu in India.
        </Text>
        <Text size="l" mt={spacing.xl}>
          I graduated from{" "}
          <Text size="l" component="span" weight="bold">
            B.S. Abdur Rahman Crescent Institute of Science & Technology
          </Text>
          , Chennai, with a degree in{" "}
          <Text size="l" component="span" weight="bold">
            Computer Science & Engineering.
          </Text>
        </Text>
        <Text size="l" mt={spacing.xl}>
          I am currently working as a Software Engineer at{" "}
          <Text size="l" component="span" weight="bold" color={colors.primary}>
            Walmart
          </Text>{" "}
          in Bangalore, India. In this position I am responsible for converting
          designs and wireframes into quality code, building responsive web
          applications and cross platform mobile applications using{" "}
          <Text size="l" component="span" weight="bold" color={colors.primary}>
            React JS
          </Text>{" "}
          and{" "}
          <Text size="l" component="span" weight="bold" color={colors.primary}>
            React Native
          </Text>
          . Over the past 4 years, I have gained ample experience in the field
          of{" "}
          <Text size="l" component="span" weight="bold" color={colors.primary}>
            front-end development
          </Text>
          . My qualifications and experience are reflected in my resume.
        </Text>
        <Text size="l" mt={spacing.xl}>
          I would describe myself as someone who is{" "}
          <Text size="l" component="span" weight="bold">
            focused
          </Text>
          ,{" "}
          <Text size="l" component="span" weight="bold">
            self-motivated
          </Text>
          ,{" "}
          <Text size="l" component="span" weight="bold">
            goal oriented
          </Text>{" "}
          with a double engine drive and a{" "}
          <Text size="l" component="span" weight="bold">
            never say die attitude
          </Text>{" "}
          to find solutions to problems that might crop up as obstacles.
        </Text>
        <Button
          variant="outlined"
          sx={{
            width: "max-content",
            px: spacing.xxl,
            py: spacing.xs,
            mt: spacing.xxxl,
            mb: {
              xs: spacing.xxxxl,
              sm: spacing.xxxxl,
              md: 0,
            },
          }}
          onClick={onClickResume}
        >
          Resume
        </Button>
      </FullHeightContainer>
      <Divider />
      <FadeInContainer>
        <Companies />
      </FadeInContainer>
    </>
  );
};
