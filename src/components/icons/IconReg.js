import * as React from "react";
const SvgIconReg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_reg_svg__a"
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
    <g mask="url(#icon_reg_svg__a)">
      <path
        fill="inherit"
        d="M2 20v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13q.75 0 1.463.075.712.075 1.387.225l-1.75 1.75a3 3 0 0 0-.537-.05H10q-1.775 0-3.187.425-1.413.425-2.313.925a.97.97 0 0 0-.5.85v.8h6.25l2 2zm13.55.4-3.45-3.45 1.4-1.4 2.05 2.05 5.05-5.05 1.4 1.4zM10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m0-2q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10"
      />
    </g>
  </svg>
);
export default SvgIconReg;
