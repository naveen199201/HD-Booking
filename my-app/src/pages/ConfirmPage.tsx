import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const ConfirmPage: React.FC = () => {
  return (



    <div className="h-full m-auto  text center flex flex-col justify-center items-center mt-20">
      <BsCheckCircleFill className="text-green-600 size-20 mb-8" />
       <p className="text-black text-5xl  font-medium mb-4">
         Booking Confirmed
       </p>
       <button className="bg-gray-200 p-2 mt-2 text-[#656565]">Back to Home</button>
    </div>
  );
};

export default ConfirmPage;
