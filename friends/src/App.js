import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PrivateRoute from './PrivateRoute';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>TEST</h1>
      <PrivateRoute exact path="/protected" component={Friends} />
    </div>
  );
}

export default App;
