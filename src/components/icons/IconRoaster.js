import * as React from "react";
const SvgIconRoaster = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_roaster_svg__a"
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
    <g mask="url(#icon_roaster_svg__a)">
      <path
        fill="inherit"
        d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.425-1.562A2.8 2.8 0 0 1 5.6 14.55q1.5-.75 3.113-1.15T12 13q1.676 0 3.287.4 1.613.4 3.113 1.15.75.375 1.175 1.087Q20 16.35 20 17.2V20zm8-10q.825 0 1.412-.588Q14 8.826 14 8q0-.824-.588-1.412A1.93 1.93 0 0 0 12 6q-.825 0-1.412.588A1.93 1.93 0 0 0 10 8q0 .825.588 1.412Q11.175 10 12 10m4 5.7V18h2v-.8q0-.275-.125-.5a.85.85 0 0 0-.375-.35 7 7 0 0 0-.738-.363A11 11 0 0 0 16 15.7m-6-.525V16.5h4v-1.325a8 8 0 0 0-1-.138 13.4 13.4 0 0 0-2 0q-.5.037-1 .138M6 18h2v-2.3q-.375.125-.763.288-.387.162-.737.362a.85.85 0 0 0-.375.35Q6 16.925 6 17.2z"
      />
    </g>
  </svg>
);
export default SvgIconRoaster;
