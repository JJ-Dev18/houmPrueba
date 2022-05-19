import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Main from './Main';

const theme = {
  primary : ' #FF452B ',
  secondary :  '#263238' ,
  text : '#607D8B '
 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
 
);
