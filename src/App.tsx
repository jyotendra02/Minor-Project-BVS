import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Vote from "./components/Vote";
import Result from "./components/Result";
import "./style.css";
const App = () => {
  const [showComponents, setShowComponents] = useState(false);

  const toggleComponents = () => {
    setShowComponents(!showComponents);
  };

  return (
    <Router>
      <div >
        <nav className="heading">
          <ul>
            <li>
              <Link to="/" onClick={() => setShowComponents(false)}>
                BVS Minor Project
              </Link>
            </li>
          </ul>
        </nav>

        <div className="links">
          <button onClick={toggleComponents}>
            <Link to="/vote">Vote</Link>
          </button>
          <button onClick={toggleComponents}>
            <Link to="/result">Result</Link>
          </button>
        </div>

        <Routes>
          <Route path="/vote" element={<Vote />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
