import React from "react";

export  const Loader = () => {

  return (
    <div className="progress" style={{height: "20px", marginTop: "140px"}}>
      <div className="indeterminate" ></div>
    </div>
  )
}