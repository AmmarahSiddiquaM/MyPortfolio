import { Grid } from "@mui/material";
import { images } from "../../../assets/images";
import { FullHeightContainer, Text } from "../../../components/atoms";
import { colors, spacing } from "../../../styles";

export const Me = () => {
  return (
    <Grid
      container
      sx={{
        pt: {
          xs: `calc(56px + ${spacing.m})`,
          sm: `calc(56px + ${spacing.m})`,
          md: `calc(64px + ${spacing.m})`,
        },
      }}
    >
      <Grid item md={6} xs={12} sm={12}>
        <FullHeightContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: {
              xs: 0,
              sm: 0,
              md: "90vh",
            },
            mt: {
              xs: spacing.xxl,
              sm: spacing.xxl,
              md: 0,
            },
          }}
        >
          <Text weight="bold" size={"2.5rem"}>
            I’m Ammarah, a Software Engineer at{" "}
            <Text
              weight="bold"
              size={"2.5rem"}
              component="span"
              color={colors.primary}
            >
              Walmart
            </Text>
            . I enjoy building responsive web and mobile applications.
          </Text>
        </FullHeightContainer>
      </Grid>
      <Grid item md xs={0} sm={0} />
      <Grid item md={5} xs={12} sm={12}>
        <FullHeightContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-end",
            },
            justifyContent: "center",
            minHeight: {
              xs: 0,
              sm: 0,
              md: "90vh",
            },
            mt: {
              xs: spacing.xxl,
              sm: spacing.xxl,
              md: 0,
            },
            mb: {
              xs: spacing.xxxxl,
              sm: spacing.xxxxl,
              md: 0,
            },
          }}
        >
          <img
            height="auto"
            width="100%"
            src={images.me.ammarah}
            alt="ammarah"
            style={{ maxWidth: "80%" }}
          />
        </FullHeightContainer>
      </Grid>
    </Grid>
  );
};
