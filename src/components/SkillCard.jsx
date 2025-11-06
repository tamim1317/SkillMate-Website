import React from 'react';
import { Link } from 'react-router-dom';
// Optional: import an animation library if you are using one here (e.g., AOS)

const SkillCard = ({ skill }) => {
    // Destructure properties from the 'skill' object
    const { id, name, image, rating, price, description } = skill; 

    return (
        // Using a card class from DaisyUI/Tailwind for a clean look
        <div 
            className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto"
            // Optional: If using AOS, add data-aos attributes here, e.g., data-aos="fade-up"
        >
            {/* 🖼️ Skill Image */}
            <figure>
                <img 
                    src={image} 
                    alt={`Image for ${name}`} 
                    className="h-56 w-full object-cover"
                />
            </figure>

            {/* 📝 Card Body / Content */}
            <div className="card-body p-5">
                {/* 🏷️ Skill Name */}
                <h2 className="card-title text-2xl font-semibold mb-2">{name}</h2>
                
                {/* ⭐ Rating & Price */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-medium text-yellow-600">
                        Rating: {rating} / 5
                    </p>
                    <p className="text-xl font-bold text-blue-600">
                        Price: ${price}
                    </p>
                </div>
                
                {/* 🔍 View Details Button */}
                <div className="card-actions justify-end">
                    <Link to={`/skill/${id}`}>
                        <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-0">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;