import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ShowFormProvider } from "./context/ShowForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowFormProvider>
      <App />
    </ShowFormProvider>
  </React.StrictMode>
);