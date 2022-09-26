import { Box, Container } from "@mui/material";
import { useEffect, useRef } from "react";
import { spacing } from "../../../styles";
import { Text } from "../../atoms";

export const VideoPlayer = ({ title, description, color, videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: spacing.xl,
      }}
    >
      <Box
        sx={{
          backgroundColor: color,
          p: spacing.l,
          width: "fit-content",
        }}
      >
        <Text weight="bold" size="xxxl" variant="secondary">
          {title}
        </Text>
        <Text mb={spacing.l}>{description}</Text>
        <video
          autoPlay
          ref={videoRef}
          preload="auto"
          loop
          controls
          style={{
            width: "100%",
            maxWidth: 600,
            maxHeight: 600,
            objectFit: "contain",
          }}
        >
          <source src={videoSrc} />
        </video>
      </Box>
    </Container>
  );
};
