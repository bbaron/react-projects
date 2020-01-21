import React from "react";

const Icon = props => (
  <i className={`icon-${props.direction} ${props.size} ${props.name} icon`} />
);

Icon.defaultProps = {
  size: "massive"
};

export default Icon;
