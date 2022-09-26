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
        PROTOTYPES AND EXPERIMENTS
      </Text>
      <Text mt={spacing.xxl} sx={{ textAlign: "center", mb: spacing.l }}>
        Im my free time I like to build complex experiences in web and mobiles.
        <br />
        Watch this space I would be uploading few more soon 👇
      </Text>
      <VideoPlayer
        title="Tinder Swipe"
        description="Implementaion of swipeable cards"
        videoSrc={videos.tinder1}
        color="#fee9e2"
      />
      <VideoPlayer
        title="Shared Element Transitions"
        description="Implementaion of shared element transition"
        videoSrc={videos.tinder2}
        color="#e6daea"
      />
      <VideoPlayer
        title="Netflix Clone"
        description="Netflix UI clone built using React JS"
        videoSrc={videos.netflix}
        color="#f9f7c7"
      />
      <VideoPlayer
        title="Credit Score Indicator"
        description="Credit score indicator animation"
        videoSrc={videos.creditScore}
        color="#ddeeff"
      />
      <VideoPlayer
        title="Bottom Tab Animation"
        description="Bottom tab text animation"
        videoSrc={videos.cred}
        color="#daf6f1"
      />

      {/* <video
        src={videos.tinder2}
        style={{ width: 820, height: 730, objectFit: "cover" }}
      />
      <video
        src={videos.creditScore}
        style={{ width: 820, height: 730, objectFit: "cover" }}
      />
      <video
        src={videos.netflix}
        style={{ width: 820, height: 730, objectFit: "cover" }}
      />
      <video
        src={videos.leasePlan}
        style={{ width: 820, height: 730, objectFit: "cover" }}
      /> */}
    </FullHeightContainer>
  );
};
