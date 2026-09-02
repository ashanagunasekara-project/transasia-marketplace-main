import React from "react";

type SvgIcon4Props = React.SVGProps<SVGSVGElement> & {
  scrolled: number;
  scrollHeight: number;
};

export const ScrollTopIcon = ({
  scrolled,
  scrollHeight,
  ...props
}: SvgIcon4Props) => (
  <svg
    className="rbt-back-circle svg-inner"
    width="100%"
    height="100%"
    viewBox="-1 -1 102 102"
    {...props}
  >
    <path
      d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
      style={{
        strokeDasharray: "307.919, 307.919",
        transition: "none",
        strokeDashoffset: 307.919 - (scrolled / scrollHeight) * 307.919,
      }}
    />
  </svg>
);
