import * as React from "react";
const SvgIconAsterisk = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_asterisk_svg__a"
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
    <g mask="url(#icon_asterisk_svg__a)">
      <path
        fill="inherit"
        d="M11 21v-6.6l-4.65 4.675-1.425-1.425L9.6 13H3v-2h6.6L4.925 6.35 6.35 4.925 11 9.6V3h2v6.6l4.65-4.675 1.425 1.425L14.4 11H21v2h-6.6l4.675 4.65-1.425 1.425L13 14.4V21z"
      />
    </g>
  </svg>
);
export default SvgIconAsterisk;
