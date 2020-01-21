import React from "react";
import he from "he";

const DecoderRing = ({ encoded }) => {
  return <>{he.decode(encoded)}</>;
};

export default DecoderRing;
