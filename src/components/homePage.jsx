import React from "react";
import hp1 from "../utils/images/hp1.png";
import student from "../utils/images/student.png";
import teacher from "../utils/images/teacher.png";

export const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200 w-screen" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hp1} className="max-w-2xl rounded-lg" alt="test" />
        <div>
          <h1 className="text-7xl font-bold">Why I Choose You!</h1>
          <p className="py-6">
            Welcome to WICY, The Coastal School's
            <span className="text-[#e779c1] font-bold"> Pokémon</span> themed
            response application!
          </p>
          <div className="flex w-full">
            <div className="flex flex-col w-1/2 items-center justify-center">
              <a
                href="#student-login"
                className="btn btn-2xl btn-wide bg-[#e779c1] text-xl m-6 text-white hover:bg-white hover:text-[#e779c1]"
              >
                Student Login
              </a>
              <img src={student} className="max-w-sm rounded-lg" alt="test" />
            </div>
            <div className="flex flex-col w-1/2 items-center justify-center">
              <a
                className="btn btn-2xl btn-wide bg-[#e779c1] text-xl text-white m-6 hover:bg-white hover:text-[#e779c1]"
                href="#staff-login"
              >
                Staff Login
              </a>
              <img src={teacher} className="max-w-sm rounded-lg " alt="test" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
