import React from "react";
import TeamMemberCard from "./ComapnyManagement";

const TeamSection = ({ team }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {team.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
};

export default TeamSection;