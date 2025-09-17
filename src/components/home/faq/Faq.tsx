import { useGSAP } from "@gsap/react";
import Accordion from "./Accordian";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1280px", () => {
      gsap.from(".faq-content > *", {
        // direct children of faq-content
        opacity: 0,
        y: 70,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".faq-content",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
      });
      gsap.from(".faq-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
          end: "top 40%",
          scrub: 1.6,
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return (
    <section className="faq-container">
      <div className="faq-content">
        <div>
          <h2>Faq</h2>
        </div>
        <div>
          <Accordion></Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
