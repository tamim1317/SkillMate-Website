import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AvatarName = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const photoURL = user.photoURL || 'https://i.ibb.co/68v8z9y/user.png';
  const displayName = user.displayName || 'User Profile';

  return (
    <div className="relative group flex items-center cursor-pointer" aria-label="User Profile">
      
      {/* Avatar */}
      <div className="avatar">
        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
          <img src={photoURL} alt={`${displayName}'s Avatar`} className="object-cover w-full h-full"/>
        </div>
      </div>

      {/* Tooltip on Hover */}
      <div 
        className="absolute top-12 right-1/2 transform translate-x-1/2 
                   z-50 p-2 
                   bg-gray-800 text-white text-xs 
                   rounded shadow-lg opacity-0 
                   transition-opacity duration-300 
                   group-hover:opacity-100 
                   whitespace-nowrap"
      >
        {displayName}
      </div>
    </div>
  );
};

export default AvatarName;
