import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import RouterCustom from './router';
import { CartProvider } from './pages/admin/Cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartProvider>  
<HashRouter>
<RouterCustom />
</HashRouter>
</CartProvider> 
);
