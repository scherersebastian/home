import React from "react";

import presentationContext from "./PresentationProvider";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Get react-responsive-carousel presentation css
// https://github.com/leandrowd/react-responsive-carousel/blob/master/src/examples/presentation/presentation.scss

const PresentationContainer = ({ children }) => {
  const [presentation] = React.useContext(presentationContext);

  return (
    <div
      style={
        presentation
          ? {
              border: "0",
              /* margin: 10px auto; */
              padding: "0",
              display: "inline-block",
              width: "100%",
              zIndex: "9999",
              position: "fixed",
              top: "0",
              left: "0",
            }
          : {}
      }
    >
      <Carousel showArrows useKeyboardArrows emulateTouch swipeable>
        {children}
      </Carousel>
    </div>
  );
};

export default PresentationContainer;
