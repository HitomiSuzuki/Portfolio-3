import React from 'react';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Top } from './pages/Front/Top';
import { Gallery } from './pages/Front/Gallery';
import { Login } from './pages/Admin/Login';
import { NewArtwork } from './pages/Admin/NewArtwork';
import { Artworks } from './pages/Admin/Artworks';

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
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
)


