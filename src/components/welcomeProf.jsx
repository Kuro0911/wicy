import React from "react";
import wp1 from "../utils/images/wp1.png";
import wp2 from "../utils/images/wp2.png";

export const WelcomeProf = () => {
  return (
    <div className="hero h-screen w-screen bg-base-200" id="welcome-prof">
      <div className="hero-content flex-col shadow-2xl bg-base-100 w-full rounded-xl h-3/4 m-10">
        <div className="flex flex-col w-full">
          <div className="flex w-full h-1/6">
            <a className="btn btn-outline btn-error" href="#home">
              Log Out
            </a>
            <div className="w-5/6">
              <h1 className="text-7xl font-bold">Welcome Professor!</h1>
            </div>
          </div>
          <div className="h-3/4">
            <p className="py-6">What would you like to do?</p>
            <div className="flex justify-evenly items-center w-full">
              <div className="flex flex-col">
                <img src={wp1} className="max-w-2xl rounded-lg m-4" />
                <a
                  className="btn btn-xl btn-outline btn-success text-xl"
                  href="#view-students"
                >
                  View Students
                </a>
              </div>
              <div className="flex flex-col ">
                <img src={wp2} className="max-w-2xl rounded-lg m-4" />
                <a
                  className="btn btn-xl btn-outline btn-success text-xl"
                  href="#change-rank"
                >
                  Change Ranking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
