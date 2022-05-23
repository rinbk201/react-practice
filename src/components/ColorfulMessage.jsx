import React from "react";

export const ColorfulMessage = (props) => {
  console.log("colorful");
  const { color, children } = props;
  //console.log(props);
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
