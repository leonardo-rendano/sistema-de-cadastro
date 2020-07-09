import React from 'react';

import NavBar from './components/NavBar';

import Routes from './Routes';

export default function App() {
  return(
    <div className="container">
        <NavBar />
        <Routes />
    </div>
  );
}