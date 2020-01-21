import React from "react";
import DecoderRing from "./DecoderRing";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { title, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          <DecoderRing encoded={title} />
        </h4>
        <p>
          <DecoderRing encoded={description} />
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
