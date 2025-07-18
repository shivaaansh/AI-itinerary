import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="font-extrabold text-[50px] text-center">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        <br /> Personalized Itineraries at Your FingerTips
      </h1>
      <p className="text-xl text-gray-500 text-center mt-4">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button className="bg-[#f56551] text-white px-6 py-3 rounded-md hover:bg-[#e25440]">
          Get Started, It's free!
        </Button>
      </Link>
    </div>
  );
}

export default Hero;
