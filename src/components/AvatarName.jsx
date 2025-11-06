import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider'; // Adjust path as needed

const AvatarName = () => {
    // 1. Fetch user from AuthContext
    const { user } = useContext(AuthContext); 
    
    // Check if user data is available (safety check)
    if (!user) {
        return null;
    }

    // Get the required data, providing fallbacks
    const photoURL = user.photoURL || 'https://i.ibb.co/68v8z9y/user.png'; // Default image
    const displayName = user.displayName || 'User Profile'; 

    return (
        // Wrapper for the avatar and the hover-over name
        <div className="relative group flex items-center cursor-pointer">
            
            {/* 2. Avatar/Image Display */}
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={photoURL} alt={`${displayName}'s Avatar`} /> 
                </div>
            </div>

            {/* 3. Display Name on Hover (Tooltip/Floating Box) */}
            <div 
                className="absolute top-12 right-0 
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