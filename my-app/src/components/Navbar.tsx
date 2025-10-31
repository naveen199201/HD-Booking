import React from "react";
import logo from "../assets/logo.png";


interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (s: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearchClick = () => {
    // currently filtering happens in real-time by setSearchTerm,
    // but you could trigger analytics/navigation here if needed
    console.log("Search clicked:", searchTerm);
  };

  return (
    <nav className=" shadow-lg">
      <div className=" w-[88%] mx-auto  text-white py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={logo} alt="App Logo" width={100} height={100} />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center bg-white  overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search experiences"
            className="px-4 py-2 text-gray-900 focus:outline-none w-72 sm:w-64 mr-5 border-2 border-none bg-gray-200"
            onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          />
          <button
            onClick={handleSearchClick}
            className="bg-yellow-400 hover:bg-yellow-500 rounded-[5px] text-black px-4 py-2 font-semibold"
          >
            Search
          </button>
        </div>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
