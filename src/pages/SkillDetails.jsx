import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

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

const SkillDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [skill, setSkill] = useState(null);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    const selectedSkill = skills.find((s) => s.skillId === parseInt(id));
    setSkill(selectedSkill);
  }, [id]);

  const handleBookSession = (e) => {
    e.preventDefault();
    toast.success(`Session booked for ${name}!`);
    setName("");
    setEmail("");
  };

  if (!skill) return <p className="text-center mt-10 text-white">Skill not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl mt-10 text-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Details + Form */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">{skill.skillName}</h2>
            <p className="text-gray-300 mb-2"><strong>Provider:</strong> {skill.providerName}</p>
            <p className="text-gray-300 mb-2"><strong>Email:</strong> {skill.providerEmail}</p>
            <p className="text-blue-400 font-semibold mb-2"><strong>Price:</strong> ${skill.price}</p>
            
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 font-medium mr-1">Rating:</span>
              <span className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 fill-current ${
                      i < Math.round(skill.rating) ? "text-yellow-400" : "text-gray-500"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.757 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </span>
            </div>

            <p className="text-gray-300 mb-4"><strong>Slots Available:</strong> {skill.slotsAvailable}</p>
            <p className="text-gray-300 mb-6">{skill.description}</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4">Book a Session</h3>
            <form className="flex flex-col gap-3" onSubmit={handleBookSession}>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-500 rounded-xl p-3 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-500 rounded-xl p-3 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow hover:from-indigo-600 hover:to-blue-500 transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SkillDetails;