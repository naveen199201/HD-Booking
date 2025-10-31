import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CheckoutProps {
  experience: string;
  date: string;
  time: string;
  price: number;
}

const Checkout: React.FC<CheckoutProps> = ({ experience, date, time, price }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const navigate=useNavigate();

  const [agree, setAgree] = useState(false);
  const [discount, setDiscount] = useState(0);

  const subtotal = price;
  const taxes = Math.round(subtotal * 0.06);
  const total = subtotal + taxes - discount;

  const handleApplyPromo = () => {
    if (promo === "SAVE10") {
      setDiscount(50);
      alert("Promo applied successfully!");
    } else {
      alert("Invalid promo code");
    }
  };

  const handlePay = () => {
    if (!agree) {
      alert("Please agree to the terms before proceeding.");
      return;
    }
    
    navigate("/confirm");
  };

  return (
    <div className="flex flex-col md:flex-row  gap-12 lg:gap-20  mt-10 py-4 w-[88%] mx-auto ">
      {/* Left Section */}
    <div className="flex-1 bg-[#EFEFEF] p-6 rounded-xl shadow-sm h-full md:w-full md:max-w-full">
        {/* <h2 className="text-lg font-semibold mb-4">Checkout</h2> */}
        <div className="grid md:grid-cols-2 gap-4">
            <div>
            <p className="text-[#5B5B5B] mb-1">Full Name</p>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full bg-[#DDDDDD]"
          />
          </div>
          <div>
          <p className="text-[#5B5B5B] mb-1">Email</p>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full bg-[#DDDDDD]"
          />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full bg-[#DDDDDD]"
          />
          <button
            onClick={handleApplyPromo}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Apply
          </button>
        </div>

        <label className="flex items-center gap-2 mt-4 text-sm  text-[#5B5B5B]">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to the terms and safety policy
        </label>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[30%] bg-[#EFEFEF] p-6 rounded-xl shadow-sm">
        <div className="flex justify-between mb-2 text-[#656565]">
          <p>Experience</p>
          <p className="font-semibold text-[#161616]">{experience}</p>
        </div>
        <div className="flex justify-between mb-2 text-[#656565]">
          <p>Date</p>
          <p className="text-[#161616]">{date}</p>
        </div>
        <div className="flex justify-between mb-2 text-[#656565]">
          <p>Time</p>
          <p className="text-[#161616]">{time}</p>
        </div>
        <div className="flex justify-between mb-2 text-[#656565]">
          <p>Qty</p>
          <p className="text-[#161616]">1</p>
        </div>

        <div className="flex justify-between text-[#656565]">
          <p>Subtotal</p>
          <p className="text-[#161616]">₹{subtotal}</p>
        </div>
        <div className="flex justify-between text-[#656565]">
          <p>Taxes</p>
          <p className="text-[#161616]">₹{taxes}</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <p>Discount</p>
            <p>-₹{discount}</p>
          </div>
        )}

        <hr className="my-2 text-gray-300" />
        <div className="flex justify-between text-lg font-semibold">
          <p>Total</p>
          <p>₹{total}</p>
        </div>

        <button
          onClick={handlePay}
          className="bg-yellow-400 w-full mt-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
        >
          Pay and Confirm
        </button>
      </div>
    </div>
  );
};

export default Checkout;
