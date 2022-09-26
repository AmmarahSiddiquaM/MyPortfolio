import { Divider } from "@mui/material";
import React from "react";
import { FadeInContainer } from "../../components/atoms";
import { About } from "./about";
import { Experiments } from "./experiments";
import { Me } from "./me";

export const Home = () => {
  return (
    <>
      <div id="home">
        <FadeInContainer>
          <Me />
          <Divider />
        </FadeInContainer>
      </div>
      <div id="about">
        <FadeInContainer>
          <About />
          <Divider />
        </FadeInContainer>
      </div>
      <div id="experiments">
        <FadeInContainer>
          <Experiments />
        </FadeInContainer>
      </div>
    </>
  );
};
