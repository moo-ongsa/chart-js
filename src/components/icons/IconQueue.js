import * as React from "react";
const SvgIconQueue = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_queue_svg__a"
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
    <g mask="url(#icon_queue_svg__a)">
      <path
        fill="inherit"
        d="M16 14a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 13 11q0-1.25.875-2.125A2.9 2.9 0 0 1 16 8q1.25 0 2.125.875T19 11t-.875 2.125A2.9 2.9 0 0 1 16 14m-6 6v-1.9q0-.525.25-1 .25-.476.7-.75a9.3 9.3 0 0 1 2.388-1.013A10.3 10.3 0 0 1 16 15q1.399 0 2.663.338a9.3 9.3 0 0 1 2.387 1.012q.45.274.7.75.25.475.25 1V20zm2.15-2h7.7a7.4 7.4 0 0 0-1.85-.75 8 8 0 0 0-2-.25q-1.025 0-2 .25a7.4 7.4 0 0 0-1.85.75M16 12q.424 0 .712-.287A.97.97 0 0 0 17 11a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 10a.97.97 0 0 0-.713.287A.97.97 0 0 0 15 11q0 .424.287.713.288.287.713.287M3 14v-2h8v2zm0-8V4h12v2zm8.1 4H3V8h9q-.35.425-.562.925A6 6 0 0 0 11.1 10"
      />
    </g>
  </svg>
);
export default SvgIconQueue;
