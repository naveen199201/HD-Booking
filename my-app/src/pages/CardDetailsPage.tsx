import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { placesData } from "../data/placesData";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const CardDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const place = placesData.find((p) => p.id === Number(id));
  const navigate=useNavigate();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const taxAmount = 99;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ✅ Automatically select first date and time
  useEffect(() => {
    if (place && place.dates.length > 0) {
      const firstDate = place.dates[0];
      setSelectedDate(firstDate.date);

      if (firstDate.times && firstDate.times.length > 0) {
        setSelectedTime(firstDate.times[0].time);
      }
    }
  }, [place]);

  if (!place) {
    return <div className="p-6 text-center text-red-500">Place not found.</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const selectedDateObj = place.dates.find((d) => d.date === selectedDate);
  const handleConfirm = () => {
    navigate("/checkout");
  }

  return (
    <div className="flex justify-between flex-col w-[88%] mx-auto">
      {/* Header */}
      <h1 className="py-6 flex items-center text-xl font-semibold">
        <GoArrowLeft className="mr-2 text-lg" /> Details
      </h1>

      <div className="flex justify-between">
        {/* Left Section */}
        <div className="w-[70%] ">
          {/* Image */}
          <img
            src={place.image}
            alt={place.location}
            className="w-full h-96 object-cover rounded-lg"
          />

          {/* Title + Description */}
          <h1 className="text-4xl font-bold text-gray-800 mt-6">
            {place.location}
          </h1>
          <p className="text-gray-700 mt-4 text-lg">{place.description}</p>

          {/* Date Selection */}
          <p className="font-semibold text-2xl mt-6 mb-2">Choose Date</p>
          <div className="flex flex-wrap gap-3">
            {place.dates.map((d) => {
              const formatted = formatDate(d.date);
              const isSelected = selectedDate === d.date;
              return (
                <button
                  key={d.date}
                  onClick={() => {
                    setSelectedDate(d.date);
                    setSelectedTime(null); // reset time when date changes
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    isSelected
                      ? "bg-yellow-300 text-white border-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {formatted}
                </button>
              );
            })}
          </div>

          {/* Time Slots */}
          {selectedDateObj && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Select Time</h2>

              <div className="flex flex-wrap gap-3">
                {selectedDateObj.times.map((t, idx) => {
                  const isSelected = selectedTime === t.time;
                  const isDisabled = t.bookingsLeft === 0;

                  return (
                    <button
                      key={idx}
                      onClick={() => !isDisabled && setSelectedTime(t.time)}
                      disabled={isDisabled}
                      aria-disabled={isDisabled}
                      className={`flex items-center justify-between gap-3 min-w-[140px] px-4 py-2  text-sm font-medium border transition  rounded-[5px] ${
                        isDisabled
                          ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                          : isSelected
                          ? "bg-yellow-300 text-white border-gray-300"
                          : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      <span className="truncate">{t.time}</span>
                      <span
                        className={`ml-3 inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-red-500 
                          
                        }`}
                      >
                        {t.bookingsLeft > 0
                          ? `${t.bookingsLeft} left`
                          : "Sold out"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <p className="text-[#838383] pt-5">
            All times are in IST (GMT +5:30)
          </p>

          <p className="text-black text-2xl font-medium mt-6">About</p>
          <p className="text-gray-700 mt-4 text-lg bg-gray-300 pl-3 rounded-md">
            {place.description}
          </p>
        </div>

        {/* Right Section */}
        <div className="w-[25%] h-[20%] bg-[#EFEFEF] p-6 rounded-lg text-white">
          <div className="flex justify-between flex-row py-2">
            <p className="text-[#656565]">Starts at</p>
            <p className="text-gray-700 text-lg">₹{place.price}</p>
          </div>

          {/* Quantity */}
          <div className="flex justify-between items-center py-2">
            <p className="text-[#656565]">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={decrement}
                className="bg-gray-300 px-2 text-gray-800 font-bold hover:bg-gray-400"
              >
                −
              </button>
              <span className="text-lg text-black font-semibold">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="bg-gray-300 px-2 text-gray-800 font-bold hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between py-2">
            <p className="text-[#656565]">Subtotal</p>
            <p className="text-gray-700 text-lg font-medium">
              ₹{place.price * quantity}
            </p>
          </div>

          {/* Taxes */}
          <div className="flex justify-between py-2">
            <p className="text-[#656565]">Taxes</p>
            <p className="text-gray-700 text-lg font-medium">₹{taxAmount}</p>
          </div>

          <hr className="my-2 border-gray-300" />

          {/* Total */}
          <div className="flex justify-between py-2">
            <p className="text-[#656565] font-medium">Total</p>
            <p className="text-gray-800 text-lg font-bold">
              ₹{place.price * quantity + taxAmount}
            </p>
          </div>

          <div className="text-center pt-2">
            <button onClick={handleConfirm} className="text-center bg-amber-300 p-2 w-full text-black font-medium rounded hover:bg-amber-400">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
