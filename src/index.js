import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { createRoot } from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />, document.getElementById('root'))
//ReactDOM.(<App />, document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)