import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Top } from './pages/Top';


const container = document.getElementById('app')!;
const root = createRoot(container);



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Top />
        </BrowserRouter>
    </React.StrictMode>
)

