import React from "react";
import log2 from "../utils/images/log2.png";
import "../App.css";

export const StaffLogin = () => {
  return (
    <div className="hero min-h-screen w-screen bg-base-200" id="staff-login">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-base-100">
        <div className="card shrink-0 w-screen max-w-xl ">
          <form className="card-body flex">
            <h1 className="text-5xl font-bold">Staff Login</h1>
            <p className="py-6">Enter your staff trainer details</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <a className="btn btn-primary text-xl" href="#welcome-prof">
                LOGIN
              </a>
            </div>
            <a href="#home" class="btn btn-outline btn-info text-xl">
              BACK
            </a>
          </form>
        </div>
        <img src={log2} className="max-w-2xl rounded-lg" alt="test" />
      </div>
    </div>
  );
};
