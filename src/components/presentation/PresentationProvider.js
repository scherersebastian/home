import React from "react";

const presentationContext = React.createContext();
export default presentationContext;

export const PresentationProvider = ({ children }) => {
  const [presentation, setPresentation] = React.useState(false);

  return (
    <presentationContext.Provider value={[presentation, setPresentation]}>
      {children}
    </presentationContext.Provider>
  );
};
