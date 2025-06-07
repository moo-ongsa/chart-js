import * as React from "react";
const SvgIconFavorite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_favorite_svg__a"
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
    <g mask="url(#icon_favorite_svg__a)">
      <path
        fill="inherit"
        d="m12 21-1.45-1.3q-2.525-2.274-4.175-3.925T3.75 12.813Q2.775 11.5 2.388 10.4A6.7 6.7 0 0 1 2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55A5.9 5.9 0 0 1 12 4.75a5.9 5.9 0 0 1 2.025-1.55 5.8 5.8 0 0 1 2.475-.55q2.35 0 3.925 1.575Q22 5.801 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.413t-2.625 2.962T13.45 19.7zm0-2.7a109 109 0 0 0 3.95-3.687q1.55-1.538 2.45-2.675t1.25-2.025T20 8.15q0-1.5-1-2.5t-2.5-1a3.86 3.86 0 0 0-2.175.663q-1 .663-1.375 1.687h-1.9q-.375-1.024-1.375-1.687A3.86 3.86 0 0 0 7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025 2.45 2.675A109 109 0 0 0 12 18.3"
      />
    </g>
  </svg>
);
export default SvgIconFavorite;
