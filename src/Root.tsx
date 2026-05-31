import React from "react";
import { Composition } from "remotion";
import type { AnyZodObject } from "remotion";
import { MainComposition, type MainCompositionProps } from "./MainComposition";
import scenesData from "../public/scenes.json";
import type { ScenesJSON } from "./types";

// Keep the composition frame rate matched to the generated avatar.
// The current avatar.mp4 is 25fps; rendering at 30fps duplicates frames and
// makes the host motion look laggy, especially in GitHub Actions outputs.
const FPS = 25;
const WIDTH = 1920;
const HEIGHT = 1080;

// To change the channel name / tagline, edit
// src/components/ChannelBanner.tsx (CHANNEL_NAME and CHANNEL_TAGLINE constants).

const data = scenesData as ScenesJSON;

export const Root: React.FC = () => {
  return (
    <Composition<AnyZodObject, MainCompositionProps>
      id="NewsVideo"
      component={MainComposition}
      durationInFrames={Math.ceil(data.duration * FPS)}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{
        scenes: data.scenes,
        words: data.words ?? [],
      }}
    />
  );
};
