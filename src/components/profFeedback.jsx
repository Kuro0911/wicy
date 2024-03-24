import React from "react";

export const ProfFeedback = () => {
  return (
    <div className="hero h-screen w-screen bg-base-200" id="prof-feedback">
      <div className="hero-content flex-col shadow-2xl bg-base-100 w-full rounded-xl h-3/4 m-10">
        <div className="flex flex-col w-full">
          <div className="flex w-full h-1/4">
            <a className="btn btn-outline btn-error" href="#home">
              Log Out
            </a>
            <div className="w-full">
              <h1 className="text-7xl font-bold">Professors feedback</h1>
            </div>
            <a
              className="btn btn-outline btn-primary w-28"
              href="#welcome-student"
            >
              Back
            </a>
          </div>
          <div className="h-3/4">
            <div className="flex justify-center">
              <div>
                <div className="flex">
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                </div>
                <div className="flex">
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                </div>
                <div className="flex">
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                  <div className="card bg-base-300 h-32 w-64 m-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
