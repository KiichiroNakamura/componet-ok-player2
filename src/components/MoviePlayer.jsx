import React, { useState } from "react";
import "video-react/dist/video-react.css"; // import css
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
//
export const MoviePlayer = () => {
  const [rate, setRate] = useState(1);
  const [player, setPlayer] = useState(null);
  const [mediaSrc, setMediaSrc] = useState(
    // "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    // "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
    "videos/file_example_MP4_480_1_5MG.mp4"
  );
  const [mediaType, setMediaType] = useState(
    "video/mp4"
    //"video/webm"
  );
  // setPlayer(Player);
  return (
    <React.Fragment>
      <Player ref={player} playbackRate={rate}>
        <ControlBar>
          <PlaybackRateMenuButton order={7} rates={[2, 1.5, 1.0, 0.5]} />
        </ControlBar>
        <source src={mediaSrc} type={mediaType} />
      </Player>
    </React.Fragment>
  );
};
