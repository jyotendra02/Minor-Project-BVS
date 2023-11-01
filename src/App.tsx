import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Voter from './components/Voter';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/voter">Voter</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voter" element={<Voter onVote={() => {}} />} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
