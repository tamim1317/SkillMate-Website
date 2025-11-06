import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(null);

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  // Fetch skills from public folder
  useEffect(() => {
  fetch("/skills.json")
    .then((res) => res.json())
    .then((data) => {
      const selectedSkill = data.find((s) => s.id === parseInt(id));
      setSkill(selectedSkill); // set the skill after fetch
    })
    .catch((err) => console.error(err));
}, [id]);

  const handleBookSession = (e) => {
    e.preventDefault();
    toast.success(`Session booked for ${name}!`);
    setName("");
    setEmail("");
  };

  if (!skill) return <p className="text-center mt-10">Skill not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{skill.title}</h2>
      <img
        src={skill.image}
        alt={skill.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p><strong>Provider:</strong> {skill.provider}</p>
      <p><strong>Email:</strong> {skill.providerEmail || "Not provided"}</p>
      <p><strong>Price:</strong> ${skill.price}</p>
      <p><strong>Rating:</strong> {skill.rating}</p>
      <p><strong>Slots Available:</strong> {skill.slotsAvailable}</p>
      <p className="mb-4"><strong>Description:</strong> {skill.description}</p>

      <h3 className="text-2xl font-semibold mb-2">Book a Session</h3>
      <form
        onSubmit={handleBookSession}
        className="flex flex-col gap-3 max-w-md"
      >
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Book Session
        </button>
      </form>

      <Toaster />
    </div>
  );
};

export default SkillDetails;
