import * as React from "react";
const SvgIconRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_right_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="inherit" d="M24 0H0v24h24z" />
    </mask>
    <g mask="url(#icon_right_svg__a)">
      <path
        fill="inherit"
        d="m8 22.001 10-10-10-10-1.775 1.775 8.225 8.225-8.225 8.225z"
      />
    </g>
  </svg>
);
export default SvgIconRight;
