import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'
const store=configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<BrowserRouter>
  <App />
  </BrowserRouter>
</Provider>,
    
);


