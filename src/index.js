import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/reset.css';
import {
  RouterProvider,
} from 'react-router-dom';
import { router } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
