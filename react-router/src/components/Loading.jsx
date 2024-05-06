import React from "react";

const Loading = () => {
  return (
    <center>
      <div
        className="d-flex justify-content-center spinner"
        style={{ width: "10rem", height: "10rem" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
};

export default Loading;
