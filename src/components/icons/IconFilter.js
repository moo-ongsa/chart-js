import * as React from "react";
const SvgIconFilter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_filter_svg__a"
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
    <g mask="url(#icon_filter_svg__a)">
      <path
        fill="inherit"
        d="M13 9V7h3V3h2v4h3v2zm3 12V11h2v10zM6 21v-4H3v-2h8v2H8v4zm0-8V3h2v10z"
      />
    </g>
  </svg>
);
export default SvgIconFilter;
