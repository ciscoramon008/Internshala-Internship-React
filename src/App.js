import React from 'react';
import './App.css';
import SidebarNav from './components/SidebarNav/SidebarNav';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className='App row no-gutters'>
      <div className='col-5 col-sm-4 col-md-3 col-xl-2'><SidebarNav /></div>
      <div className='col-7 col-sm-8 col-md-9 col-xl-10'><MainContent /></div>
    </div>
  );
}

export default App;
