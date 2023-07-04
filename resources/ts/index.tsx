import React from 'react';
import styled from 'styled-components';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Top } from './pages/Top';
import { Gallery } from './pages/Gallery';

const container = document.getElementById('app')!;
const root = createRoot(container);

const router = createBrowserRouter([
    { path: "/", element: <Top /> },
    { path: "gallery", element: <Gallery /> },
  ]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)


