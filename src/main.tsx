import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalStorageContext } from './contexts/localstorageContext.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60, // 5 minutes
      cacheTime: 1000 * 60 * 60 // 1 hour
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalStorageContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalStorageContext>
    </QueryClientProvider>
  </React.StrictMode>
);
