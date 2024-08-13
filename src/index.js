import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddProjectForm from './components/AddProjectForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AddProjectForm />
  </React.StrictMode>
);
