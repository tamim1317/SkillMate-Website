import React from "react";
import { Link } from "react-router";

const skills = [
  {
    "skillId": 1,
    "skillName": "Beginner Guitar Lessons",
    "providerName": "Alex Martin",
    "providerEmail": "alex@skillswap.com",
    "price": 20,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Acoustic guitar classes for complete beginners.",
    "image": "https://i.postimg.cc/9f3QvG6L/guitar.jpg",
    "category": "Music"
  },
  {
    "skillId": 2,
    "skillName": "Spoken English Practice",
    "providerName": "Sara Hossain",
    "providerEmail": "sara@skillswap.com",
    "price": 10,
    "rating": 4.6,
    "slotsAvailable": 5,
    "description": "Conversational English sessions for non-native speakers.",
    "image": "https://i.postimg.cc/fTbKJ3K1/english.jpg",
    "category": "Language"
  },
  {
    "skillId": 3,
    "skillName": "Yoga for Beginners",
    "providerName": "Nadia Rahman",
    "providerEmail": "nadia@skillswap.com",
    "price": 15,
    "rating": 4.9,
    "slotsAvailable": 4,
    "description": "Morning yoga classes focused on balance and flexibility.",
    "image": "https://i.postimg.cc/Y0VjrhqV/yoga.jpg",
    "category": "Fitness"
  },
  {
    "skillId": 4,
    "skillName": "Basic Cooking Workshop",
    "providerName": "Rahul Das",
    "providerEmail": "rahul@skillswap.com",
    "price": 12,
    "rating": 4.7,
    "slotsAvailable": 6,
    "description": "Learn to cook simple and tasty meals.",
    "image": "https://i.postimg.cc/Zn2fMN0h/cooking.jpg",
    "category": "Lifestyle"
  },
  {
    "skillId": 5,
    "skillName": "Frontend Web Development",
    "providerName": "Tamim Hossain",
    "providerEmail": "tamim@skillswap.com",
    "price": 25,
    "rating": 5.0,
    "slotsAvailable": 2,
    "description": "Learn HTML, CSS, and JavaScript with real projects.",
    "image": "https://i.postimg.cc/KYff7KxK/webdev.jpg",
    "category": "Technology"
  },
  {
    "skillId": 6,
    "skillName": "Photography Basics",
    "providerName": "Lina Akter",
    "providerEmail": "lina@skillswap.com",
    "price": 18,
    "rating": 4.5,
    "slotsAvailable": 3,
    "description": "Understand light, composition, and camera settings.",
    "image": "https://i.postimg.cc/0QJz1xv8/photo.jpg",
    "category": "Art"
  }
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Popular Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{skill.skillName}</h2>
              <p className="text-gray-600 mb-2">By {skill.providerName}</p>
              <p className="text-blue-600 font-bold mb-2">${skill.price}</p>
              <p className="text-yellow-500 mb-2">Rating: {skill.rating}</p>
              <Link to={`/skills/${skill.id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
