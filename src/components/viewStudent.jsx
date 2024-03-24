import React from "react";

export const ViewStudent = () => {
  return (
    <div className="hero h-screen w-screen bg-base-200" id="view-students">
      <div className="hero-content flex-col shadow-2xl bg-base-100 w-full rounded-xl h-3/4 m-10">
        <div className="flex w-full h-1/6 mt-[-1em] items-center justify-center">
          <a className="btn btn-outline btn-error" href="#home">
            Log Out
          </a>
          <div className="w-4/6">
            <h1 className="text-7xl font-bold">Student List</h1>
          </div>
          <div className="flex w-2/6">
            <div className="flex flex-col items-start mr-6">
              <span className="font-bold text-lg">Gold: </span>
              <span className="font-bold text-lg">Silver: </span>
              <span className="font-bold text-lg">Bronze: </span>
            </div>
            <div className="flex flex-col items-end w-3/6">
              <span className="font text-lg">Learning Support</span>
              <span className="font text-lg">Standard Test</span>
              <span className="font text-lg">Academic Enrichment</span>
            </div>
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
                  <th>Recent Attempt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Student Name 1</td>
                  <td>Year 1</td>
                  <td>Gold</td>
                  <td>
                    <a
                      className="btn btn-primary text-lg"
                      href="#mark-feedback"
                    >
                      Mark Recent Attempt
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Student Name 2</td>
                  <td>Year 2</td>
                  <td>Silver</td>
                  <td>
                    <a
                      className="btn btn-primary text-lg"
                      href="#mark-feedback"
                    >
                      Mark Recent Attempt
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Student Name 3</td>
                  <td>Year 3</td>
                  <td>Bronze</td>
                  <td>
                    <a
                      className="btn btn-primary text-lg"
                      href="#mark-feedback"
                    >
                      Mark Recent Attempt
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Student Name 4</td>
                  <td>Year 4</td>
                  <td>Bronze</td>
                  <td>
                    <a
                      className="btn btn-primary text-lg"
                      href="#mark-feedback"
                    >
                      Mark Recent Attempt
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Student Name 5</td>
                  <td>Year 5</td>
                  <td>Bronze</td>
                  <td>
                    <a
                      className="btn btn-primary text-lg"
                      href="#mark-feedback"
                    >
                      Mark Recent Attempt
                    </a>
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
