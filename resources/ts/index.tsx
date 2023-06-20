import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { SiteTitle } from './components/atoms/SiteTitle';
import { HoverLink } from './components/atoms/HoverLink';

const container = document.getElementById('app')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SiteTitle />
            <HoverLink to={'http://google.com'}>text</HoverLink>
        </BrowserRouter>
    </React.StrictMode>
)