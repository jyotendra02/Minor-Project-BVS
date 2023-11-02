import React from 'react';
import Navbar from './Navbar'; // Adjust the path to the actual location of your Navbar component
import Voter from './Voter';   // Adjust the path to the actual location of your Voter component

const Vote: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Voter />  {/* Render the Voter component */}
    </div>
  );
};

export default Vote;

