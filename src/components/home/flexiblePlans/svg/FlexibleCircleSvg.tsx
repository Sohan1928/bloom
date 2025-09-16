const FlexibleCircleSvg = () => {
  return (
    <svg
      // width={685}
      // height={696}
      viewBox="0 0 685 696"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.7} filter="url(#filter0_f_295_9385)">
        <ellipse
          cx={145}
          cy={172.007}
          rx={290}
          ry={273.5}
          fill="url(#paint0_linear_295_9385)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_295_9385"
          x={-395}
          y={-351.493}
          width={1080}
          height={1047}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={125}
            result="effect1_foregroundBlur_295_9385"
          />
        </filter>
        <linearGradient
          id="paint0_linear_295_9385"
          x1={-145}
          y1={-71.0981}
          x2={301.734}
          y2={302.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6B8E" />
          <stop offset={1} stopColor="#2C4B6A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FlexibleCircleSvg;
