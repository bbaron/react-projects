import "./SeasonDisplay.css";
import React from "react";
import Icon from "./Icon";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: "snowflake"
  }
};

const marchToAugust = month => month > 2 && month < 9;

const isNorthernHemisphere = lat => lat > 0;

const getSeason = (lat, month) => {
  if (marchToAugust(month)) {
    return isNorthernHemisphere(lat) ? "summer" : "winter";
  } else {
    return isNorthernHemisphere(lat) ? "winter" : "summer";
  }
};

const getMonth = () => new Date().getMonth();

const SeasonDisplay = props => {
  const season = getSeason(props.lat, getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <Icon direction="left" name={iconName} />
      <h1>{text}</h1>
      <Icon direction="right" name={iconName} />
    </div>
  );
};

export default SeasonDisplay;
