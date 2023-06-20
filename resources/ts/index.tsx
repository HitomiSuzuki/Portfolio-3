import React from 'react';
import { createRoot } from 'react-dom/client';
import { SiteTitle } from './components/atoms/SiteTitle';

const container = document.getElementById('app')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <div>HelloWorld</div>
        <SiteTitle />
    </React.StrictMode>
)