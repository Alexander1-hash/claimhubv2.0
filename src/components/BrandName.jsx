import React from "react";
import pig from "../assets/pig.svg";
import SvgPig from "./CustomLogo";

function BrandName() {
  return (
    <div className="brand">
      {" "}
      <SvgPig viewBox="300 180 800 400" width={100} height={50} />
    </div>
  );
}

export default BrandName;
