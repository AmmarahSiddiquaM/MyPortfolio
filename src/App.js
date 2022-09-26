import React from "react";
import { Container, ThemeProvider } from "@mui/material";

import { Navigation } from "./navigation";
import { theme } from "./styles";

const App = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Container>
  );
};

export default App;
