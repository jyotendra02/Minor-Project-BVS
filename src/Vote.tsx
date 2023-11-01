import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { voteOperation, endOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";
import { connectWallet, getAccount } from "./utils/wallet";

const Vote: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [candidates, setCandidates] = useState<number[]>(Array(4).fill(0));
  const [totalVotes, setTotalVotes] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the current storage values (candidates and totalVotes) from the smart contract
    (async () => {
      try {
        const storageData = await fetchStorage();
        if (storageData) {
          setCandidates(storageData.candidates);
          setTotalVotes(storageData.totalVotes);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCandidateSelect = (index: number) => {
    setSelectedCandidate(index);
  };

  const handleVoteSubmit = async () => {
    if (selectedCandidate !== null) {
      try {
        await voteOperation(selectedCandidate);
        setCandidates((prevCandidates) => {
          const newCandidates = [...prevCandidates];
          newCandidates[selectedCandidate] += 1;
          return newCandidates;
        });
        setTotalVotes((prevTotalVotes) => (prevTotalVotes !== null ? prevTotalVotes + 1 : 1));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      const account = await getAccount();
      setUserAddress(account);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="h-100">
      <Navbar />
      <div className="container my-4">
        <h2>Vote for a Candidate</h2>
        {userAddress ? (
          <>
            <div className="form-group">
              {candidates.map((votes, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name="candidate"
                      value={index}
                      onChange={() => handleCandidateSelect(index)}
                    />{" "}
                    Candidate {index + 1}
                  </label>
                  <span className="ml-2">Votes: {votes}</span>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary"
              onClick={handleVoteSubmit}
              disabled={selectedCandidate === null}
            >
              Submit Vote
            </button>
            <p>Total Votes: {totalVotes !== null ? totalVotes : "Loading..."}</p>
          </>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Vote;
