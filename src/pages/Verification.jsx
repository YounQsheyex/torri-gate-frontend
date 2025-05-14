import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Verification = () => {
  const email = localStorage.getItem("email");
  const maskEmail = (email) => {
    const [start, domain] = email.split("@");
    if (start.length <= 2) {
      return `${start[0]}...@${domain}`;
    }
    return `${start.slice(0, 2)}...@${domain}`;
  };
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg max-w-[453px]">
        <Link to={"/register"}>
          <button className="flex items-center gap-1.5">
            {" "}
            <FaArrowLeft /> back
          </button>
        </Link>
        <div className="max-w-[332px]">
          <h1 className="text-2xl lg:text-[30px] font-semibold">
            Verification required to proceed
          </h1>
          <p className="text-[#666] text-[16px] font-normal">
            A verification Instruction has been sent to your
            <span className="font-semibold ml-1"> {maskEmail(email)},</span>
          </p>
        </div>
        <button className="btn w-full mt-4 font-semibold">Go to Mail</button>
      </div>
    </AuthWrapper>
  );
};

export default Verification;
