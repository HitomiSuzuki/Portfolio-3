import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <div>Hello world</div>
    </React.StrictMode>
)