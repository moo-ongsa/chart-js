import * as React from "react";
const SvgIconAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_add_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="inherit" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#icon_add_svg__a)">
      <path fill="inherit" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
    </g>
  </svg>
);
export default SvgIconAdd;
