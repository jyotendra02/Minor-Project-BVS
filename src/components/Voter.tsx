import React, { useState } from 'react';
import '../css/VotingSystem.css'
import { submitVoteOperation } from '../utils/operation';
import { resetVotesOperation } from '../utils/operation';
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

  const handleSubmit = async() => {
    try {
      if (selectedCandidate !== null) {
        const candidateName = candidates[selectedCandidate];
        const candidateIndex = selectedCandidate;
        
        setVotedCandidate(candidateName);
        onVote(candidateName); // Pass the selected candidate name to the parent
        console.log(candidateIndex)
        await submitVoteOperation(candidateIndex);
      } else {
        alert('Please select a candidate before submitting.');
      }
      
    } catch (error) {
      alert(error)
    }
  
  };
  const handleClick = async ()=> {
    try {
      await resetVotesOperation();
      
    } catch (error) {
      console.log(error)
      
    }
    

  }

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
      <button onClick={handleClick}>Endgame</button>
    </div>
  );
};

export default Voter;