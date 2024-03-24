import React from "react";

export const ChangeRank = () => {
  return (
    <div className="hero h-screen w-screen bg-base-200" id="change-rank">
      <div className="hero-content flex-col shadow-2xl bg-base-100 w-full rounded-xl h-3/4 m-10">
        <div className="flex w-full h-1/6">
          <a className="btn btn-outline btn-error" href="#home">
            Log Out
          </a>
          <div className="w-full">
            <h1 className="text-7xl font-bold">Ranking Switch</h1>
          </div>
          <a className="btn btn-outline btn-primary w-28" href="#welcome-prof">
            Back
          </a>
        </div>
        <div className="w-full">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Year Group</th>
                  <th>Ranking</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Student Name 1</td>
                  <td>Year 1</td>
                  <td>1</td>
                  <td>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Student Name 2</td>
                  <td>Year 2</td>
                  <td>2</td>
                  <td>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Student Name 3</td>
                  <td>Year 3</td>
                  <td>3</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
