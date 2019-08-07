import React from 'react';

const appContext = React.createContext({
  currentVenue: null,
  setCurrentVenue: () => {},
});

export default appContext;
