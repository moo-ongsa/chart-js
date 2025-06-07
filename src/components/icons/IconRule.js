import * as React from "react";
const SvgIconRule = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_rule_svg__a"
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
    <g mask="url(#icon_rule_svg__a)">
      <path
        fill="inherit"
        d="M14.4 20 13 18.6l2.6-2.6-2.6-2.6 1.4-1.4 2.6 2.6 2.6-2.6 1.4 1.4-2.6 2.6 2.6 2.6-1.4 1.4-2.6-2.6zm1.975-9-3.55-3.55 1.4-1.4 2.125 2.125 4.25-4.25L22 5.35zM2 17v-2h9v2zm0-8V7h9v2z"
      />
    </g>
  </svg>
);
export default SvgIconRule;
