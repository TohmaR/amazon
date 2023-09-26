import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './Reducer';
import {StateContextProvider} from './context/StateContext';
import {AuthContextProvider} from './context/AuthContext';
import {AdressesContextProvider} from './context/AdressesContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdressesContextProvider>
        <StateContextProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateContextProvider>
      </AdressesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);