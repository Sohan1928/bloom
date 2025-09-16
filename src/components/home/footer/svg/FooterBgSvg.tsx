const FooterBgSvg = () => {
  return (
    <svg
      // width={1160}
      // height={851}
      viewBox="0 0 1160 851"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.3} filter="url(#filter0_f_2090_766)">
        <circle
          cx={580}
          cy={425.339}
          r={330}
          fill="url(#paint0_linear_2090_766)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2090_766"
          x={0}
          y={-154.661}
          width={1160}
          height={1160}
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
            result="effect1_foregroundBlur_2090_766"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2090_766"
          x1={270.776}
          y1={95.3389}
          x2={823.249}
          y2={613.031}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5288" />
          <stop offset={1} stopColor="#006EFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FooterBgSvg;
