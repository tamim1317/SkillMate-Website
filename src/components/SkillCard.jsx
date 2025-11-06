import React from "react";
import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
  const { skillId, skillName, image, rating, price } = skill;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 group">
      <img
        src={image}
        alt={skillName}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6 flex flex-col justify-between h-64">
        <div>
          <h2 className="text-2xl font-bold mb-2">{skillName}</h2>
          <p className="text-yellow-400 mb-2">Rating: {rating}</p>
          <p className="text-blue-400 font-semibold mb-2">${price}</p>
        </div>
        <Link to={`/skills/${skillId}`}>
          <button className="mt-3 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl w-full text-white font-semibold shadow hover:from-indigo-600 hover:to-blue-500 transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
