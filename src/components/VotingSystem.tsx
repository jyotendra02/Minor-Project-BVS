import React, { useState, useEffect } from 'react';

const VotingSystem: React.FC = () => {
  const [voterId, setVoterId] = useState<string>('');
  const [candidates, setCandidates] = useState<Array<{ id: number; name: string }>>([]);
  const [constituency, setConstituency] = useState<string>('');
  const [voterDetails, setVoterDetails] = useState<{ name: string; constituency: string } | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);

  // Function to fetch candidate details for the given constituency
  const fetchCandidateDetails = async () => {
    try {
      // You would make an API call here to fetch candidate details from a back-end or blockchain
      // Example: const response = await fetch(`/api/candidates?constituency=${constituency}`);
      // const data = await response.json();
      // setCandidates(data.candidates);

      // For the sake of simplicity, let's use dummy data
      setCandidates([
        { id: 1, name: 'Candidate 1' },
        { id: 2, name: 'Candidate 2' },
        // Add more candidates
      ]);
    } catch (error) {
      console.error('Error fetching candidate details', error);
    }
  };

  // Function to fetch voter details
  const fetchVoterDetails = async () => {
    try {
      // You would make an API call to fetch voter details here
      // Example: const response = await fetch(`/api/voters/${voterId}`);
      // const data = await response.json();
      // setVoterDetails(data);

      // For simplicity, let's use dummy data
      setVoterDetails({
        name: 'John Doe',
        constituency: 'Constituency X',
      });
    } catch (error) {
      console.error('Error fetching voter details', error);
    }
  };
  // Function to submit the vote
const submitVote = () => {
  if (selectedCandidate !== null) {
    // You would send the vote to your backend or blockchain here
    // Example: Send a POST request with the selectedCandidate to record the vote
    console.log(`Voter with ID ${voterId} voted for candidate ${selectedCandidate}`);
  }
};


  useEffect(() => {
    if (voterId && constituency) {
      fetchVoterDetails();
      fetchCandidateDetails();
    }
  }, [voterId, constituency]);

  return (
    <div>
      <h1>Voting System</h1>
      <div>
        <label htmlFor="voterId">Enter Voter ID: </label>
        <input
          type="text"
          id="voterId"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
        />
        <button onClick={() => setConstituency('Constituency X')}>Search</button>
      </div>
      <div>
        {voterDetails && (
          <div>
            <h2>Voter Details</h2>
            <p>Name: {voterDetails.name}</p>
            <p>Constituency: {voterDetails.constituency}</p>
          </div>
        )}
      </div>
      <div>
        {candidates.length > 0 && (
          <div>
            <h2>Candidate Details</h2>
            <form>
              {candidates.map((candidate) => (
                <div key={candidate.id}>
                  <label>
                    <input
                      type="radio"
                      name="candidate"
                      value={candidate.id}
                      checked={selectedCandidate === candidate.id}
                      onChange={() => setSelectedCandidate(candidate.id)}
                    />
                    {candidate.name}
                  </label>
                </div>
              ))}
              <button type="button" onClick={submitVote}>
                Vote
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotingSystem;
