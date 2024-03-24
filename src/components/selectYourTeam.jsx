import React from "react";

export const SelectYourTeam = () => {
  return (
    <div className="hero h-screen w-screen bg-base-200" id="select-team">
      <div className="hero-content flex-col shadow-2xl bg-base-100 w-full rounded-xl m-10">
        <div className="flex flex-row w-full">
          <div>
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Select
              </option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
            </select>
            <h1>Current Team: </h1>
            <div className="card bg-base-300 h-16 w-32 m-4 justify-center">
              Pokemon 1
            </div>
            <div className="card bg-base-300 h-16 w-32 m-4 justify-center">
              Pokemon 2
            </div>
            <div className="card bg-base-300 h-16 w-32 m-4 justify-center">
              Pokemon 3
            </div>
            <div className="card bg-base-300 h-16 w-32 m-4 justify-center">
              Pokemon 4
            </div>
            <div className="card bg-base-300 h-16 w-32 m-4 justify-center">
              Pokemon 5
            </div>
            <div className="card bg-base-300 h-16 w-32 m-4 justify-center">
              Pokemon 6
            </div>
          </div>
          <div className="w-10/12">
            <div className="flex w-full h-1/4 m-6">
              <div className="w-full">
                <h1 className="text-7xl font-bold">Select Your Team</h1>
              </div>
              <a
                className="btn btn-outline btn-primary w-28"
                href="#welcome-student"
              >
                Back
              </a>
            </div>
            <div className="h-4/5 w-full">
              <div className="flex justify-center">
                <div className="flex flex-col">
                  <div className="flex flex-col items-start m-4 w-64">
                    <h1 className="font-bold text-2xl">Name:</h1>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="input input-bordered input-accent w-full max-w-xs mt-2"
                    />
                  </div>
                  <div className="flex flex-col items-start m-4 w-64">
                    <h1 className="font-bold text-2xl">Type:</h1>
                    <input
                      type="text"
                      placeholder="Enter Type"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                  </div>
                  <button class="btn btn-outline btn-secondary w-full h-14 text-2xl mt-10">
                    Confirm
                  </button>
                </div>
                <div className="flex flex-col ml-2 mt-[-5.5em]">
                  <div className="flex flex-col items-start m-4 w-64">
                    <h1 className="font-bold text-sm">Move 1:</h1>
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                  </div>
                  <div className="flex flex-col items-start m-4 w-64">
                    <h1 className="font-bold text-sm">Move 3:</h1>
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                  </div>
                  <button class="btn btn-outline btn-success w-full h-14 text-2xl mt-10">
                    Add Pokemon
                  </button>
                </div>
                <div className="flex flex-col ml-2 mt-[-5.5em]">
                  <div className="flex flex-col items-start m-4 w-64">
                    <h1 className="font-bold text-sm">Move 2:</h1>
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                  </div>
                  <div className="flex flex-col items-start m-4 w-64">
                    <h1 className="font-bold text-sm">Move 4:</h1>
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                    <input
                      type="text"
                      placeholder="Enter Move"
                      className="input input-bordered input-primary w-full max-w-xs mt-2"
                    />
                  </div>
                  <button class="btn btn-outline btn-error w-full h-14 text-2xl mt-10">
                    Remove Last Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
