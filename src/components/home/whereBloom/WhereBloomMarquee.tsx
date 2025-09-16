import Marquee from "react-fast-marquee";
import SliderSvg1 from "./svg/SliderSvg1";
import SliderSvg2 from "./svg/SliderSvg2";
import SliderSvg3 from "./svg/SliderSvg3";

const WhereBloomMarquee = () => {
  return (
    <Marquee
      gradient={true}
      gradientWidth={120}
      gradientColor="#2e353b"
      pauseOnHover={true}
    >
      <div className="marquee-container flex items-center gap-12">
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg1></SliderSvg1>
          <h4>Blob</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg2></SliderSvg2>
          <h4>Coral</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg3></SliderSvg3>
          <h4>Yallo!+</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg1></SliderSvg1>
          <h4>Blob</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg2></SliderSvg2>
          <h4>Coral</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg3></SliderSvg3>
          <h4>Yallo!+</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg1></SliderSvg1>
          <h4>Blob</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg2></SliderSvg2>
          <h4>Coral</h4>
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <SliderSvg3></SliderSvg3>
          <h4>Yallo!+</h4>
        </span>
        <div className="w-4"></div>
      </div>
    </Marquee>
  );
};

export default WhereBloomMarquee;
