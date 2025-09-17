// import bliss from "./images/bliss.png";
// import coral from "./images/coral.png";
// import flea from "./images/flea.png";
// import polltree from "./images/polltree.png";
// import winkk from "./images/winkk.png";
// import BlissIconSvg from "./svg/BlissIconSvg";
// import CoralIconSvg from "./svg/CoralIconSvg";
// import FleaIconSvg from "./svg/FleaIconSvg";
// import PolltreeIconSvg from "./svg/PolltreeIconSvg";
// import WinkkIconSvg from "./svg/WinkkIconSvg";

// const SelectedWorks = () => {
//   return (
//     <section className="selected-works-container overflow-x-hidden">
//       <div className="selected-works-content grid lg:grid-cols-2 gap-2 overflow-hidden">
//         <div className="bliss selected-works">
//           <h3>Selected Works</h3>
//           <p>
//             We don’t do pretty-for-the-sake-of-pretty. Every color, word, and
//             pixel comes from a clear strategy built to help you grow.
//           </p>
//         </div>
//         <div className="bliss bliss1 relative">
//           <img className="rounded-[12px]" src={bliss} alt="Bliss.png" />
//           <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
//             <BlissIconSvg></BlissIconSvg>
//             <h6>Bliss+</h6>
//           </div>
//           <div className="bliss-bottom flex items-center justify-between w-full">
//             <h6 className="">Bliss+</h6>
//             <span>(2025)</span>
//           </div>
//         </div>
//         <div className="bliss bliss1 relative">
//           <img
//             className="bg-cover bg-no-repeat rounded-[12px]"
//             src={flea}
//             alt="Flea.png"
//           />
//           <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
//             <FleaIconSvg></FleaIconSvg>
//             <h6>Flea</h6>
//           </div>
//           <div className="bliss-bottom flex items-center justify-between w-full">
//             <h6 className="">Flea</h6>
//             <span>(2025)</span>
//           </div>
//         </div>
//         <div className="bliss bliss1 relative">
//           <img
//             className="bg-cover bg-no-repeat rounded-[12px]"
//             src={coral}
//             alt="Coral.png"
//           />
//           <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
//             <CoralIconSvg></CoralIconSvg>
//             <h6>Coral</h6>
//           </div>
//           <div className="bliss-bottom flex items-center justify-between w-full">
//             <h6 className="">Coral</h6>
//             <span>(2025)</span>
//           </div>
//         </div>
//         <div className="bliss bliss1 relative">
//           <img
//             className="bg-cover bg-no-repeat rounded-[12px]"
//             src={winkk}
//             alt="Winkk.png"
//           />
//           <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
//             <WinkkIconSvg></WinkkIconSvg>
//             <h6>Winkk</h6>
//           </div>
//           <div className="bliss-bottom flex items-center justify-between w-full">
//             <h6 className="">Winkk</h6>
//             <span>(2024)</span>
//           </div>
//         </div>
//         <div className="bliss bliss1 relative">
//           <img
//             className="bg-cover bg-no-repeat rounded-[12px]"
//             src={polltree}
//             alt="Polltree.png"
//           />
//           <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
//             <PolltreeIconSvg></PolltreeIconSvg>
//             <h6>Polltree</h6>
//           </div>
//           <div className="bliss-bottom flex items-center justify-between w-full">
//             <h6 className="">Polltree</h6>
//             <span>(2024)</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SelectedWorks;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bliss from "./images/bliss.png";
import coral from "./images/coral.png";
import flea from "./images/flea.png";
import polltree from "./images/polltree.png";
import winkk from "./images/winkk.png";

import BlissIconSvg from "./svg/BlissIconSvg";
import CoralIconSvg from "./svg/CoralIconSvg";
import FleaIconSvg from "./svg/FleaIconSvg";
import PolltreeIconSvg from "./svg/PolltreeIconSvg";
import WinkkIconSvg from "./svg/WinkkIconSvg";

gsap.registerPlugin(ScrollTrigger);

const SelectedWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1280px", () => {
      if (!containerRef.current) return;

      const carts =
        containerRef.current.querySelectorAll<HTMLDivElement>(".bliss1");

      // Initial zoom
      gsap.set(carts, { scale: 1.2 });

      // Scroll-triggered zoom
      gsap.to(carts, {
        scale: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1.1,
        },
      });
    });
  }, []);

  return (
    <section className="selected-works-container overflow-x-hidden">
      <div
        ref={containerRef}
        className="selected-works-content grid lg:grid-cols-2 gap-2 overflow-hidden"
      >
        <div className="bliss selected-works">
          <h3>Selected Works</h3>
          <p>
            We don’t do pretty-for-the-sake-of-pretty. Every color, word, and
            pixel comes from a clear strategy built to help you grow.
          </p>
        </div>
        {/* Cart 1 */}
        <div className="bliss bliss1 relative">
          <img className="rounded-[12px]" src={bliss} alt="Bliss.png" />
          <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
            <BlissIconSvg />
            <h6>Bliss+</h6>
          </div>
          <div className="bliss-bottom flex items-center justify-between w-full">
            <h6>Bliss+</h6>
            <span>(2025)</span>
          </div>
        </div>
        {/* Cart 2 */}
        <div className="bliss bliss1 relative">
          <img
            className="bg-cover bg-no-repeat rounded-[12px]"
            src={flea}
            alt="Flea.png"
          />
          <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
            <FleaIconSvg />
            <h6>Flea</h6>
          </div>
          <div className="bliss-bottom flex items-center justify-between w-full">
            <h6>Flea</h6>
            <span>(2025)</span>
          </div>
        </div>
        {/* Cart 3 */}
        <div className="bliss bliss1 relative">
          <img
            className="bg-cover bg-no-repeat rounded-[12px]"
            src={coral}
            alt="Coral.png"
          />
          <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
            <CoralIconSvg />
            <h6>Coral</h6>
          </div>
          <div className="bliss-bottom flex items-center justify-between w-full">
            <h6>Coral</h6>
            <span>(2025)</span>
          </div>
        </div>
        {/* Cart 4 */}
        <div className="bliss bliss1 relative">
          <img
            className="bg-cover bg-no-repeat rounded-[12px]"
            src={winkk}
            alt="Winkk.png"
          />
          <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
            <WinkkIconSvg />
            <h6>Winkk</h6>
          </div>
          <div className="bliss-bottom flex items-center justify-between w-full">
            <h6>Winkk</h6>
            <span>(2024)</span>
          </div>
        </div>
        {/* Cart 5 */}
        <div className="bliss bliss1 relative">
          <img
            className="bg-cover bg-no-repeat rounded-[12px]"
            src={polltree}
            alt="Polltree.png"
          />
          <div className="bliss-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-[4px]">
            <PolltreeIconSvg />
            <h6>Polltree</h6>
          </div>
          <div className="bliss-bottom flex items-center justify-between w-full">
            <h6>Polltree</h6>
            <span>(2024)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
