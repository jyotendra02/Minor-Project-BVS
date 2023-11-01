import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const Voter = ({ onVote }) => {
  const candidates = ["Candidate 1", "Candidate 2", "Candidate 3", "Candidate 4"];
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [votedCandidate, setVotedCandidate] = useState(null);

  const handleVoting = (candidateIndex) => {
    setSelectedCandidate(candidateIndex);
  };

  const handleSubmit = () => {
    if (selectedCandidate !== null) {
      const candidateName = candidates[selectedCandidate];
      setVotedCandidate(candidateName);
      onVote(candidateName); // Pass the selected candidate name to the parent
    } else {
      alert('Please select a candidate before submitting.');
    }
  };

  return (
    <div className="container2">
      <h1>Choose a Candidate</h1>
      <ul className="candidate-list">
        {candidates.map((candidate, index) => (
          <li className="candidate-item" key={index}>
            <button
              className="candidate-button"
              onClick={() => handleVoting(index)}
            >
              {candidate}
            </button>
          </li>
        ))}
      </ul>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {votedCandidate !== null && (
        <p className="voted-message">Thanks for voting for {votedCandidate}!</p>
      )}
    </div>
  );
};

export default Voter;
