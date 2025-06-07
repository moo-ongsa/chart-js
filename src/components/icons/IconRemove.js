import * as React from "react";
const SvgIconRemove = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_remove_svg__a"
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
    <g mask="url(#icon_remove_svg__a)">
      <path fill="inherit" d="M5 13v-2h14v2z" />
    </g>
  </svg>
);
export default SvgIconRemove;
