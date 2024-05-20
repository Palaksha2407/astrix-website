import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EventDetails from './components/EventDetails';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <MainContent />
        <Sidebar />
        <EventDetails />
      </div>
    </div>
  );
}

export default App;
