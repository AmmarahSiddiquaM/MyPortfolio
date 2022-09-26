import { Box } from "@mui/material";

export const FullHeightContainer = ({ children, sx, ...props }) => {
  return (
    <Box sx={[{ minHeight: "100vh" }, sx]} {...props}>
      {children}
    </Box>
  );
};
