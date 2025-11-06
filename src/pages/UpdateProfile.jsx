import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  // State to hold form inputs
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Initialize state with current user data
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!user) return;

    // Update Firebase user profile
    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Update Profile
        </h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <p className="font-medium">{displayName || "User Name"}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Photo URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
