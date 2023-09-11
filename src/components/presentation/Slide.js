import React from "react";

import presentationContext from "./PresentationProvider";

import { Fullscreen, FullscreenExit } from "react-bootstrap-icons";

export default function Slide({ children }) {
  const [presentation, setPresentation] = React.useContext(presentationContext);

  return (
    <div
      style={{
        textAlign: "left",
        height: "100vh",
        padding: "75px",

        backgroundColor: "aquamarine",
      }}
    >
      <div className="row" style={{ height: "90%" }}>
        {children}
      </div>

      <div
        className="row"
        style={{
          height: "10%",
          position: "relative",
        }}
      >
        <div
          className="col col--6"
          style={{
            textAlign: "left",
            bottom: "0",
            left: "0",
            position: "absolute",
          }}
        >
          Sebastian Scherer
        </div>

        <div
          className="col col--6"
          style={{
            textAlign: "right",
            cursor: "pointer",
            bottom: "0",
            right: "0",
            position: "absolute",
          }}
          onClick={() => setPresentation(!presentation)}
        >
          {presentation ? <FullscreenExit /> : <Fullscreen />}
        </div>
      </div>
    </div>
  );
}
