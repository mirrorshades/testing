import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import App from './screens/App/App';
import AppContext from './app-context';

const Main = () => {
  const [currentVenue, setCurrentVenue] = useState(null);
  const handleSetCurrentVenue = venue => setCurrentVenue(venue);

  return (
    <ThemeProvider
      theme={{
        colors: {
          brand: {
            primary: '#34B379',
          },
          text: {
            light: '#ffffff',
            dark: '#2A2A2A',
          },
          topbar: '#43E895',
        },
        fonts: {},
      }}
    >
      <AppContext.Provider value={{ currentVenue, setCurrentVenue: handleSetCurrentVenue }}>
        <App />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default Main;
