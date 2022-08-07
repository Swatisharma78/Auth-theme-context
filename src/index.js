import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      {/* Composition : information flow from Parent to child and never from child to parent
      # Inheritance */}
      {/* 
      Composition :
      Parent --> Child  possible
      Child --> Parent   not possible
      child1 --> child2   not possible

      # if we write CartProvider above AuthProvider it will show error as it is depend on AuthProvider its context will not be available for CartProvider 
      */}
         <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
