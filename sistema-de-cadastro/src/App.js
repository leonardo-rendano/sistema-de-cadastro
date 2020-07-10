import React from 'react';

import NavBar from './components/NavBar';

import Routes from './Routes';

import { HashRouter } from 'react-router-dom'

export default function App() {
  return(
    <HashRouter>
      <div className="container">
          <NavBar />
          <Routes />
      </div>
    </HashRouter>
  );
}