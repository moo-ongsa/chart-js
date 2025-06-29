import * as React from "react";
const SvgIconVisibility = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <mask
      id="icon_visibility_svg__a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path d="M0 .616h24v24H0z" />
    </mask>
    <g mask="url(#icon_visibility_svg__a)">
      <path d="M12 16.616q1.875 0 3.188-1.312Q16.5 13.99 16.5 12.115t-1.312-3.188Q13.875 7.616 12 7.616T8.813 8.928 7.5 12.116t1.313 3.188T12 16.616m0-1.8q-1.125 0-1.912-.788a2.6 2.6 0 0 1-.788-1.912q0-1.125.787-1.912A2.6 2.6 0 0 1 12 9.416q1.125 0 1.912.787.788.788.788 1.913t-.787 1.912a2.6 2.6 0 0 1-1.913.788m0 4.8q-3.65 0-6.65-2.038T1 12.116q1.35-3.424 4.35-5.463 3-2.037 6.65-2.037t6.65 2.037T23 12.116q-1.35 3.425-4.35 5.462T12 19.617m0-2a9.55 9.55 0 0 0 5.188-1.488 9.77 9.77 0 0 0 3.612-4.012 9.77 9.77 0 0 0-3.613-4.013A9.55 9.55 0 0 0 12 6.616a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 3.2 12.116a9.77 9.77 0 0 0 3.613 4.012A9.55 9.55 0 0 0 12 17.617" />
    </g>
  </svg>
);
export default SvgIconVisibility;
