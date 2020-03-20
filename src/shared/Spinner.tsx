import React from "react";
import "./Spinner.css";

type SpinnerProps = {
  size: "small" | "large";
};

const Spinner = (props: SpinnerProps) => {
  const widthAndHeight = props.size === "small" ? 15 : 100;
  const margin = props.size === "small" ? 0 : "50 auto";
  return (
    <div
      className="loader"
      style={{
        width: widthAndHeight,
        height: widthAndHeight,
        margin,
        display: "inline-block"
      }}
    >
      Loading...
    </div>
  );
};

export default Spinner;
