import React, { useState } from "react";
import "video-react/dist/video-react.css"; // import css
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
//
export const MoviePlayer = () => {
  const [rate, setRate] = useState(1);
  const [player, setPlayer] = useState(null);
  // setPlayer(Player);
  return (
    <React.Fragment>
      <Player ref={player} playbackRate={rate}>
        <ControlBar>
          <PlaybackRateMenuButton order={7} rates={[2, 1.5, 1.0, 0.5]} />
        </ControlBar>
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </Player>
    </React.Fragment>
  );
};
