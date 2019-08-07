import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './screens/App/App';

const Main = () => (
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
    <App />
  </ThemeProvider>
);

export default Main;
