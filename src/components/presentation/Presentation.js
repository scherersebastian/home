import React from "react";

import { PresentationProvider } from "./PresentationProvider";

export default function Presentation({ children }) {
  return <PresentationProvider>{children}</PresentationProvider>;
}
