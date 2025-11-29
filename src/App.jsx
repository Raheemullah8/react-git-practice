import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="sidebar">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </div>
        <main className="main-content">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;