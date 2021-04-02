import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function ScrollToTop() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return  null;
}