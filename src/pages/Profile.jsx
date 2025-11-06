import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [previewURL, setPreviewURL] = useState(user?.photoURL || "");

  // Update preview image when photoURL changes
  useEffect(() => {
    setPreviewURL(photoURL || "https://via.placeholder.com/150");
  }, [photoURL]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("User not found!");

    try {
      await updateProfile(user, { displayName, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
          My Profile
        </h2>

        {/* User Avatar */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={previewURL}
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover mb-2 ring-2 ring-blue-400"
          />
          <p className="font-semibold text-white text-lg">{displayName || "User Name"}</p>
          <p className="text-gray-300">{user?.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Display Name"
            required
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Photo URL"
          />
          <button className="py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:from-teal-500 hover:to-green-500 transition-colors mt-2">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
