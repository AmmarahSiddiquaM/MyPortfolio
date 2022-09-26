import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile;
};
