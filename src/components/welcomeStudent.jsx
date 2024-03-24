import React from "react";
import ws1 from "../utils/images/ws1.png";
import ws2 from "../utils/images/ws2.png";

export const WelcomeStudent = () => {
  return (
    <div className="hero h-screen w-screen bg-base-200" id="welcome-student">
      <div className="hero-content flex-col shadow-2xl bg-base-100 w-full rounded-xl h-3/4 m-10">
        <div className="flex flex-col w-full">
          <div className="flex w-full h-1/6">
            <a className="btn btn-outline btn-error" href="#home">
              Log Out
            </a>
            <div className="w-5/6">
              <h1 className="text-7xl font-bold">Welcome trainer!</h1>
            </div>
          </div>
          <div className="h-3/4">
            <p className="py-6">Choose one of the options below!</p>
            <div className="flex justify-evenly items-center w-full">
              <div className="flex flex-col">
                <img
                  src={ws1}
                  className="max-w-2xl rounded-lg m-4"
                  alt="test"
                />
                <a
                  className="btn btn-xl btn-outline btn-success text-xl"
                  href="#select-team"
                >
                  Select Your Team
                </a>
              </div>
              <div className="flex flex-col ">
                <img
                  src={ws2}
                  className="max-w-2xl rounded-lg m-4"
                  alt="test"
                />
                <a
                  className="btn btn-xl btn-outline btn-success text-xl"
                  href="#prof-feedback"
                >
                  View Feedback
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
