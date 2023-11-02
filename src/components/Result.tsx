import React, { useState, useEffect } from "react";
import { fetchStorage } from "../utils/tzkt"; // Import the API function to fetch contract data
import "./CSS/Result.css"; // Import the CSS file
import { resetVotesOperation } from "../utils/operation";
const Result: React.FC = () => {
  const [candidatesData, setCandidatesData] = useState<any[]>([]); // State to store candidate data

  useEffect(() => {
    // Fetch data from the contract storage
    const fetchData = async () => {
      try {
        const storageData = await fetchStorage();
        const candidates = storageData.candidates;

        const candidatesDetails = Object.keys(candidates).map((candidateId) => {
          const votes = candidates[candidateId];
          // Fetch additional data for each candidate here

          // Replace the following with the code to fetch candidate details
          const candidateDetail = {
            id: Number(candidateId) + 1, // Start numbering from 1
            votes: votes,
            // Add more details here
          };

          return candidateDetail;
        });

        setCandidatesData(candidatesDetails);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClick = async () => {
    try {
      // You can perform the resetVotesOperation here
      await resetVotesOperation();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="result-container">
      <h1 className="result-heading">Election Results</h1>
      <ul className="result-candidate-list">
        {candidatesData.map((candidate: any) => (
          <li className="result-candidate-item" key={candidate.id}>
            <div className="result-candidate-name">
              Candidate {candidate.id}
            </div>
            <div className="result-candidate-votes">
              {candidate.votes > 0 ? <>{candidate.votes}</> : candidate.votes}
            </div>
          </li>
        ))}
      </ul>
      <button className="voter-endgame-button" onClick={handleClick}>
        Endgame
      </button>
    </div>
  );
};

export default Result;
