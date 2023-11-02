import React, { useState } from "react";
import './CSS/voter.css'; // Import the CSS file
import { resetVotesOperation , submitVoteOperation } from "../utils/operation";
const Voter: React.FC = () => {
  const candidates = [
    "Candidate 1",
    "Candidate 2",
    "Candidate 3",
    "Candidate 4",
  ];
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [votedCandidate, setVotedCandidate] = useState<string | null>(null);

  const handleVoting = (candidateIndex: number) => {
    setSelectedCandidate(candidateIndex);
  };

  const handleSubmit = async () => {
    try {
      if (selectedCandidate !== null) {
        const candidateName = candidates[selectedCandidate];
        const candidateIndex = selectedCandidate;

        setVotedCandidate(candidateName);

        console.log(candidateIndex);

        // You can perform the submitVoteOperation here
        await submitVoteOperation(candidateIndex);
      } else {
        alert("Please select a candidate before submitting.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="voter-container">
      <h1 className="voter-heading">Choose a Candidate</h1>
      <ul className="voter-candidate-list">
        {candidates.map((candidate, index) => (
          <li className="voter-candidate-item" key={index}>
            <button
              className="voter-candidate-button"
              onClick={() => handleVoting(index)}
            >
              {candidate}
            </button>
          </li>
        ))}
      </ul>
      <button className="voter-submit-button" onClick={handleSubmit}>
        Submit
      </button>
      {votedCandidate !== null && (
        <p className="voter-voted-message">Thanks for voting for {votedCandidate}!</p>
      )}
      
    </div>
  );
};

export default Voter;
