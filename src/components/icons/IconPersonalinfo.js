import * as React from "react";
const SvgIconPersonalinfo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="icon_personalinfo_svg__a"
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
    <g mask="url(#icon_personalinfo_svg__a)">
      <path
        fill="inherit"
        d="M5 17.85a10.1 10.1 0 0 1 3.137-2.088Q9.926 15 12 15q2.074 0 3.863.762A10.1 10.1 0 0 1 19 17.85V5H5zM12 13q1.45 0 2.475-1.025A3.37 3.37 0 0 0 15.5 9.5q0-1.45-1.025-2.475A3.37 3.37 0 0 0 12 6q-1.45 0-2.475 1.025A3.37 3.37 0 0 0 8.5 9.5q0 1.45 1.025 2.475A3.37 3.37 0 0 0 12 13m-7 8q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm1.725-2h10.55a7.8 7.8 0 0 0-2.487-1.488A8 8 0 0 0 12 17a8.2 8.2 0 0 0-2.812.512A7.2 7.2 0 0 0 6.725 19M12 11q-.625 0-1.062-.437A1.45 1.45 0 0 1 10.5 9.5q0-.625.438-1.062A1.45 1.45 0 0 1 12 8q.624 0 1.063.438.437.436.437 1.062 0 .624-.437 1.063A1.45 1.45 0 0 1 12 11"
      />
    </g>
  </svg>
);
export default SvgIconPersonalinfo;
