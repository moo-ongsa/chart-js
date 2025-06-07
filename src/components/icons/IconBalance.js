import * as React from "react";
const SvgIconBalance = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_balance_svg__a"
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
    <g mask="url(#icon_balance_svg__a)">
      <path
        fill="inherit"
        d="M5 17v-7h2v7zm6 0v-7h2v7zm-9 4v-2h20v2zm15-4v-7h2v7zM2 8V6l10-5 10 5v2zm4.45-2h11.1L12 3.25z"
      />
    </g>
  </svg>
);
export default SvgIconBalance;
