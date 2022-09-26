import { colors } from "./colors";

export const defaultStyles = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderWidth: "2px",
        borderColor: colors.primary,
        borderRadius: 0,
        fontWeight: "bold",
        fontFamily: "Calibri",
        "&:hover": {
          borderWidth: "2px",
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          color: colors.background,
        },
      },
    },
  },
};
