import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Get base path for GitHub Pages deployment
const basename = import.meta.env.PROD ? '/truckingcompany-website' : '';

createRoot(document.getElementById('root')).render(<StrictMode>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </StrictMode>);