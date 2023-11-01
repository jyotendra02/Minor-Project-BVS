import React, { useState } from 'react';
import './App.css'; // Import the CSS file

type VoterProps = {
  onVote: (candidateName: string) => void;
};

const Voter: React.FC<VoterProps> = ({ onVote }) => {
  const candidates = ["Candidate 1", "Candidate 2", "Candidate 3", "Candidate 4"];
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [votedCandidate, setVotedCandidate] = useState<string | null>(null);

  const handleVoting = (candidateIndex: number) => {
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
