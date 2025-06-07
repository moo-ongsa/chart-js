import * as React from "react";
const SvgIconLink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_link_svg__a"
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
    <g mask="url(#icon_link_svg__a)">
      <path fill="inherit" d="M6.4 18 5 16.6 14.6 7H6V5h12v12h-2V8.4z" />
    </g>
  </svg>
);
export default SvgIconLink;
