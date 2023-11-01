import React from 'react';
import Voter from './components/Voter.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <Voter onVote={function (candidateName: string): void {
        throw new Error('Function not implemented.');
      } } />
      <Navbar/>
    </div>
  );
}

export default App;
