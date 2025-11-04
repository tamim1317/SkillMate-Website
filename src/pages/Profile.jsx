// src/pages/Profile.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, auth } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <img
        src={user?.photoURL || "https://via.placeholder.com/150"}
        alt="User Avatar"
        width="150"
      />
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>

      <h3>Update Profile</h3>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
      <Toaster />
    </div>
  );
};

export default Profile;
