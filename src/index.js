import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#675D50"
    },
    secondary: {
      main: "#ABC4AA"
    },
    background: {
      default: "#F3DEBA"
    }
  },
  typography: {
    fontFamily: '"Raleway", sans-serif, "Courier New", "Courier", "monospace"',
  }
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App /> 
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


