import { createTheme } from "@mui/material";
import { colors } from "./colors";
import { defaultStyles } from "./defaultStyles";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  components: defaultStyles,
});
