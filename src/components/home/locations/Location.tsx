import { useGSAP } from "@gsap/react";
import Maps from "./Maps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  useGSAP(() => {
    gsap.from(".location-container", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".location-container",
        start: "top 80%",
        end: "top 40%",
        scrub: 1.6,
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section className="location-container">
      <div className="location-main-content">
        <div className="title-content">
          <h3 className="subtitle">Locations</h3>
          <h2 className="title">We’re Global </h2>
          <p className="hidden lg:block">
            We’ve built a strong team operating in all time zones, 100% remote.
          </p>
          <p className="block lg:hidden">
            We’ve helped businesses across industries achieve their goals.
          </p>
        </div>
        <Maps></Maps>
      </div>
    </section>
  );
};

export default Location;
