import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { FormProvider } from "./context/FormContext";
import { AlertProvider } from "./context/AlertContext";
import { MoreInfoScreenProvider } from './context/MoreInfoScreenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider>
      <FormProvider>
        <MoreInfoScreenProvider>
          <App />
        </MoreInfoScreenProvider>
      </FormProvider>
    </AlertProvider>
  </React.StrictMode>
);