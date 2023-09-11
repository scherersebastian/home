import React from "react";

export default function Image({
  width,
  path = "../../../static/img/bike_27.webp",
}) {
  return (
    <div
      className={"col col--" + width}
      style={{
        background: `url(${path})`,
        /* Center and scale the image nicely */
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}
