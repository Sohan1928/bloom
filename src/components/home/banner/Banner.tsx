import { AiOutlineTrademark } from "react-icons/ai";
import banner_man from "../../Images/banner_man.png";
import gradient_bg from "../../Images/Gradient.png";
import { MdOutlineCopyright } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();
    mm.add("(min-width:1024px", () => {
      tl.from(".banner-title", 1.6, {
        opacity: 0,
        y: -150,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
      });
      tl.from(".banner-studio", 0.2, {
        opacity: 0,
        y: -150,
        ease: "power4.out",
        skewY: 7,
      });
      tl.from(".banner-img", 0.2, {
        opacity: 0,
        y: 150,
        ease: "power4.out",
        skewY: 7,
      });
    });
  }, []);
  return (
    <section className="banner-container">
      <div className="relative banner-content">
        <div className="relative flex flex-col justify-center items-center">
          <div className="relative">
            <h1 className="banner-title" id="font-antonio">
              Bloom
            </h1>
            <div className="banner-studio hidden lg:block">
              <h5 id="font-antonio" className="flex items-start studio">
                Studio
                <span className="text-[1rem] relative top-[-0.1em]">
                  <AiOutlineTrademark />
                </span>
              </h5>
              <h5 className="banner-p">Creative agency Based in Gotham</h5>
            </div>
          </div>

          <img className="banner-img" src={banner_man} alt="banner_man.png" />
          <img className="gradient-bg" src={gradient_bg} alt="gradient-bg" />
        </div>

        <div className="banner-bottom hidden lg:flex items-center justify-between w-full z-50 absolute bottom-[-530px]">
          <div className="banner-three-li flex items-center gap-2 font-medium">
            <h6>Framer</h6>
            <h6>Dribble</h6>
            <h6>Figma</h6>
          </div>
          <div>
            <h5 className="flex items-center font-medium">
              <MdOutlineCopyright></MdOutlineCopyright>2025 Bloom
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
