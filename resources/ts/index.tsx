import React from 'react';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Top } from './pages/Front/Top';
import { Gallery } from './pages/Front/Gallery';
import { Login } from './pages/Admin/Login';
import { NewArtwork } from './pages/Admin/NewArtwork';
import { Artworks } from './pages/Admin/Artworks';
import { configureStore } from '@reduxjs/toolkit';

import { Provider, useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

// let persistor = persistStore(store)

const container = document.getElementById('app')!;
const root = createRoot(container);

const queryClient = new QueryClient();

const router = createBrowserRouter([
    { path: "/", element: <Top /> },
    { path: "gallery", element: <Gallery /> },
    { path: "login", element: <Login /> },
    { path: 'new', element: <NewArtwork />},
    { path: 'artworks', element: <Artworks />},
  ]);

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            {/* </PersistGate> */}
        </Provider>
    // </React.StrictMode>
)


