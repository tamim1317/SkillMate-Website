import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    skillId: 1,
    skillName: "Beginner Guitar Lessons",
    providerName: "Alex Martin",
    providerEmail: "alex@skillswap.com",
    price: 20,
    rating: 4.8,
    slotsAvailable: 3,
    description: "Acoustic guitar classes for complete beginners.",
    image: "https://i.ibb.co.com/pj8S7MhL/beg-guitar-meta.jpg",
    category: "Music"
  },
  {
    skillId: 2,
    skillName: "Spoken English Practice",
    providerName: "Sara Hossain",
    providerEmail: "sara@skillswap.com",
    price: 10,
    rating: 4.6,
    slotsAvailable: 5,
    description: "Conversational English sessions for non-native speakers.",
    image: "https://i.ibb.co.com/F4pv9d4N/maxresdefault-1.jpg",
    category: "Language"
  },
  {
    skillId: 3,
    skillName: "Yoga for Beginners",
    providerName: "Nadim Rahman",
    providerEmail: "nadia@skillswap.com",
    price: 15,
    rating: 4.9,
    slotsAvailable: 4,
    description: "Morning yoga classes focused on balance and flexibility.",
    image: "https://i.ibb.co.com/3YSrNfLp/maxresdefault-2.jpg",
    category: "Fitness"
  },
  {
    skillId: 4,
    skillName: "Basic Cooking Workshop",
    providerName: "Rahul Das",
    providerEmail: "rahul@skillswap.com",
    price: 12,
    rating: 4.7,
    slotsAvailable: 6,
    description: "Learn to cook simple and tasty meals.",
    image: "https://i.ibb.co.com/8LxVjbb4/maxresdefault-3.jpg",
    category: "Lifestyle"
  },
  {
    skillId: 5,
    skillName: "Frontend Web Development",
    providerName: "Tamim Hossain",
    providerEmail: "tamim@skillswap.com",
    price: 25,
    rating: 5.0,
    slotsAvailable: 2,
    description: "Learn HTML, CSS, and JavaScript with real projects.",
    image: "https://i.ibb.co.com/tw0L07tX/front-end-web-development-course-in-dehradun.jpg",
    category: "Technology"
  },
  {
    skillId: 6,
    skillName: "Photography Basics",
    providerName: "Lina Akter",
    providerEmail: "lina@skillswap.com",
    price: 18,
    rating: 4.5,
    slotsAvailable: 3,
    description: "Understand light, composition, and camera settings.",
    image: "https://i.ibb.co.com/rR5SXCXW/2a50285d.jpg",
    category: "Art"
  }
];

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <h1 className="text-5xl font-bold text-center mb-12">Explore Popular Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between h-64">
              <div>
                <h2 className="text-2xl font-bold mb-2">{skill.skillName}</h2>
                <p className="text-gray-300 mb-2">By {skill.providerName}</p>
                <p className="text-blue-400 font-semibold mb-1">${skill.price}</p>
                
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 font-medium mr-1">Rating:</span>
                  <span className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          i < Math.round(skill.rating) ? "text-yellow-400" : "text-gray-500"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.757 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </span>
                </div>
              </div>

              <Link to={`/skills/${skill.skillId}`}>
                <button className="mt-3 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow hover:from-indigo-600 hover:to-blue-500 transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;