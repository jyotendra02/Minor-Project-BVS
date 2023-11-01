import React, { useState } from 'react';
import './App.css'; // Import the CSS file

type ResultsProps = {
  candidates: string[]; // An array of candidate names
};

const Results: React.FC<ResultsProps> = ({ candidates }) => {
  // Initialize vote counts to zero for all candidates
  const initialVoteCounts = new Array(candidates.length).fill(0);
  const [voteCounts, setVoteCounts] = useState<number[]>(initialVoteCounts);
  const totalVotes = voteCounts.reduce((total, count) => total + count, 0);

  const handleVoting = (candidateIndex: number) => {
    const newVoteCounts = [...voteCounts];
    newVoteCounts[candidateIndex] += 1;
    setVoteCounts(newVoteCounts);
  };

  return (
    <div className="container2">
      <h1>Show Results</h1>
      <p>Total Votes: {totalVotes}</p>
      <ul className="candidate-list">
        {candidates.map((candidate, index) => (
          <li className="candidate-item" key={index}>
            {candidate}: {voteCounts[index]} votes
            <button
              className="candidate-button"
              onClick={() => handleVoting(index)}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
