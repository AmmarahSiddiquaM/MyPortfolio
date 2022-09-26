import { videos } from "../../../assets/videos";
import { FullHeightContainer, Text } from "../../../components/atoms";
import { VideoPlayer } from "../../../components/molecules";
import { spacing } from "../../../styles";

export const Experiments = () => {
  return (
    <FullHeightContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: spacing.xxxxl,
        minHeight: 0,
      }}
    >
      <Text weight="bold" size="xl">
        EXPERIMENTS
      </Text>
      <Text mt={spacing.xxl} sx={{ textAlign: "center", mb: spacing.l }}>
        Some of the work I did in my free time using React and React Native.
        <br />
        Watch this space I would be uploading few more soon 👇
      </Text>
      <VideoPlayer
        title="Tinder Swipe"
        description="Swipe right to show interest or left if uninterested. Mark as favourite by swiping up."
        videoSrc={videos.tinder1}
        color="#fee9e2"
      />
      <VideoPlayer
        title="Shared Element Transitions"
        description="Two different screens share an image to maintain the focus and experience."
        videoSrc={videos.tinder2}
        color="#e6daea"
      />
      <VideoPlayer
        title="Netflix Clone"
        description="Netflix UI clone built using React."
        videoSrc={videos.netflix}
        color="#f9f7c7"
      />
      <VideoPlayer
        title="Credit Score Indicator"
        description="Donut Chart implemention using react-native-svg and animating the indicator to show the score."
        videoSrc={videos.creditScore}
        color="#ddeeff"
      />
      <VideoPlayer
        title="Bottom Tab Animation"
        description="CRED's UI inspired Bottom Tab text animation with delay in each character."
        videoSrc={videos.cred}
        color="#daf6f1"
      />
    </FullHeightContainer>
  );
};
