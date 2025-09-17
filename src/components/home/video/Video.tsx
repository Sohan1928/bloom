// import { IoPlay } from "react-icons/io5";

// const Video = () => {
//   return (
//     <section className="video-container relative">
//       <div className="video-img relative">
//         <h4 className="absolute">We’re Bloom® — Your Creative Cultivators.</h4>
//         <div className="absolute play-btn text-2xl">
//           <IoPlay></IoPlay>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Video;

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoPlay } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1280px", () => {
      if (!videoRef.current) return;

      // Initial scale
      gsap.set(videoRef.current, { scale: 1.3 });

      // Scroll-triggered scale
      gsap.to(videoRef.current, {
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "bottom 70%",
          scrub: 1.2,
        },
      });
    });
  }, []);

  return (
    <section className="video-container relative">
      <div
        ref={videoRef}
        className="video-img relative bg-cover bg-center rounded-[12px]"
      >
        <h4 className="absolute text-white text-xl">
          We’re Bloom® — Your Creative Cultivators.
        </h4>
        <div className="absolute play-btn text-2xl text-white">
          <IoPlay />
        </div>
      </div>
    </section>
  );
};

export default Video;
