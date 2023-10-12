import Cover from "@/Components/Cover";
import SimpleFooter from "@/Components/SimpleFooter";
import Footer from "@/Components/homelements/Footer";
import Navbar1 from "@/Components/navbars/Navbar1";
import React from "react";

function allmatcourses() {
  return (
    <Cover>
      <div className="bg-blue-100 min-h-screen flex flex-col">
        <Navbar1 />
        <div className="flex flex-col items-center">
          <div className="col-lg-0.5 d-lg-block d-none"></div>
          <div className="text-center mt-5">
            <h1>Life is interesting with maths</h1>
          </div>
          <div className="text-center mt-3">
            <input
              type="text"
              placeholder="Search courses..."
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Description Of the course.
                  <br />
                  <br />
                  <br />
                </p>
                <a href="#" className="btn btn-primary">
                  Check Out
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-0.5 d-lg-block d-none"></div>
        </div>
        <div className="mt-auto">
          <SimpleFooter />
        </div>
      </div>
    </Cover>
  );
}

export default allmatcourses;
