import React from "react";
import { useNavigate } from "react-router-dom";
import type { Place } from "../data/placesData";

interface CardProps {
  place: Place;
}

const Card: React.FC<CardProps> = ({ place }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <img
        src={place.image}
        alt={place.location}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col ">
        {/* Title and Location */}
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-bold text-gray-800">{place.name}</h2>
          <p className="bg-gray-200 text-black rounded-[5px] text-sm font-medium px-3 py-1.5 hover:bg-amber-500 transition">
            {place.location}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2 ">
          {place.description}
        </p>

        {/* Price and Button — Sticks to Bottom */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="font-semibold text-gray-800 flex  items-center">
            <span className="pr-1 text-sm text-gray-600">From</span>
            <span className="text-xl">₹{place.price.toLocaleString()}</span>
          </p>
          <button
            onClick={() => navigate(`/details/${place.id}`)}
            className="bg-amber-400 text-black text-sm font-medium px-3 py-1.5 rounded hover:bg-amber-500 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
