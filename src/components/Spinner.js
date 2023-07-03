import React from "react";

const Spinner = (props) => {
  return (
    <div className="text-center my-4">
      <div className={`spinner-border text-${props.type}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
