import React, { useState } from 'react';

const Voting: React.FC = () => {
  const candidates = ["Candidate 1", "Candidate 2", "Candidate 3", "Candidate 4"];
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [votedCandidate, setVotedCandidate] = useState<string | null>(null);

  const handleVoting = (candidateIndex: number) => {
    setSelectedCandidate(candidateIndex);
  };

  const handleSubmit = () => {
    if (selectedCandidate !== null) {
      // Update the votedCandidate state with the name of the selected candidate.
      setVotedCandidate(candidates[selectedCandidate]);
    } else {
      alert('Please select a candidate before submitting.');
    }
  };

  return (
    <div>
      <h1>Choose a Candidate</h1>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            <button onClick={() => handleVoting(index)}>{candidate}</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {votedCandidate !== null && (
        <p>Thanks for voting for {votedCandidate}!</p>
      )}
    </div>
  );
};

export default Voting;
