import React, { useMemo } from "react";
import Card from "../components/Card";
import { placesData } from "../data/placesData";
import type { Place } from "../data/placesData";

interface MainPageProps {
  searchTerm: string;
}

const MainPage: React.FC<MainPageProps> = ({ searchTerm }) => {
  // filter logic: matches location, description, or price string
  const filteredPlaces = useMemo(() => {
    if (!searchTerm.trim()) return placesData;
    const term = searchTerm.toLowerCase();
    return placesData.filter(
      (p) =>
        p.location.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.price.toString().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="py-6 bg-gray-100   ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[88%] mx-auto">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place: Place) => (
            <Card key={place.id} place={place} />
          ))
        ) : (
          <p className="text-gray-600 text-lg mt-10 col-span-full text-center">
            No results found for “{searchTerm}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
