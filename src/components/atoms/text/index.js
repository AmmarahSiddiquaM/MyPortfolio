import { Typography } from "@mui/material";
import { colors, textSizes } from "../../../styles";

export const Text = ({
  children,
  color = colors.textPrimary,
  size = "m",
  variant = "primary",
  weight = "regular",
  sx,
  ...props
}) => {
  return (
    <Typography
      color={color}
      sx={[
        {
          fontSize: textSizes[size] || size,
          fontFamily: variant === "primary" ? "Calibri" : "NoeDisplay",
          fontWeight: weight,
        },
        sx,
      ]}
      {...props}
    >
      {children}
    </Typography>
  );
};
