const ToggleSvg = () => {
  return (
    <svg
      width={82}
      height={45}
      viewBox="0 0 82 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_295_9392)">
        <rect
          y={0.882324}
          width={82}
          height={44}
          rx={22}
          fill="#353C47"
          fillOpacity={0.5}
        />
        <g filter="url(#filter0_d_295_9392)">
          <rect
            x={5}
            y={5.88232}
            width={34}
            height={34}
            rx={17}
            fill="#686A78"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_295_9392"
          x={1}
          y={4.88232}
          width={42}
          height={42}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_295_9392"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_295_9392"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_295_9392">
          <rect y={0.882324} width={82} height={44} rx={22} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ToggleSvg;
