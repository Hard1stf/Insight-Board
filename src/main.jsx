import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Providers from './app/providers.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </Providers>
  </StrictMode>,
);
