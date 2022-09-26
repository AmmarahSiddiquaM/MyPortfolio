import { Box, Card, Grid } from "@mui/material";
import { images } from "../../../assets/images";
import { FullHeightContainer, Text } from "../../../components/atoms";
import { spacing } from "../../../styles";

export const Companies = () => {
  return (
    <FullHeightContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 0,
        py: spacing.xxxxl,
      }}
    >
      <Text weight="bold" size="xl">
        WORK EXPERIENCE
      </Text>
      <Text mt={spacing.xxl}>
        I feel honored and grateful to have worked with the following
        organizations.
      </Text>
      <Box
        mt={spacing.xl}
        sx={{
          display: "flex",
        }}
      >
        <Grid container spacing={spacing.xl}>
          <Grid item xs={6} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 140,
                height: 84,
              }}
            >
              <img height={26} src={images.companies.lti} alt="LTI" />
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 140,
                height: 84,
              }}
            >
              <img
                height={46}
                src={images.companies.quantiphi}
                alt="Quantiphi"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 140,
                height: 84,
              }}
            >
              <img height={60} src={images.companies.walmart} alt="Walmart" />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </FullHeightContainer>
  );
};
