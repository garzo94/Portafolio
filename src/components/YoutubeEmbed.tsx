import React from "react";
import { Box } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";
import getYouTubeID from "get-youtube-id";

interface ILink {
  youtubeLink: string;
}
export function YoutubeEmbed(data: ILink) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  var id = getYouTubeID(data.youtubeLink);

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
      className="video"
      videoId={`${id}`}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
