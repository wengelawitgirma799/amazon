import React from "react";
import { DotLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <DotLoader color="orange" />
    </div>
  );
}

export default Loader;
