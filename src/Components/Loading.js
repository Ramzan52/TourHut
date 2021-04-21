import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loading = ({ size=100 }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size ? "unset" : "100vh",
        margin: 20,
      }}
    >
      <CircularProgress size={size } thickness={2} />
    </div>
  );
};

export default Loading;
