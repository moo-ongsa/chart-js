import * as React from "react";
const SvgIconLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_left_svg__a"
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
    <g mask="url(#icon_left_svg__a)">
      <path
        fill="inherit"
        d="M16 22 6 12 16 2l1.775 1.774L9.55 12l8.225 8.225z"
      />
    </g>
  </svg>
);
export default SvgIconLeft;
