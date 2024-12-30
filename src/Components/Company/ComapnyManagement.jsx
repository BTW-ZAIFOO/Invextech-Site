import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-28 h-28 rounded-full mx-auto mb-6"
        />
      ) : (
        <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-500 text-xl">
          No Image
        </div>
      )}
      <h3 className="text-2xl font-bold text-center text-gray-800">
        {member.name}
      </h3>
      <p className="text-center font-semibold text-gray-500 text-lg mb-2">
        {member.role}
      </p>
      <p className="text-center text-gray-600 text-base mb-4">
        {member.bio}
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href={member.socials.linkedin}
          className="text-blue-500 hover:text-blue-700 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;