import React from "react";

const WelcomeMsg = ({ onGetPostClick }) => {
  return (
    <center>
      <div className="bg-gray text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-black welcomeMsg">
            There are no post
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 col-6 mx-auto">
              
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default WelcomeMsg;
