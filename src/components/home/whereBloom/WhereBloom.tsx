import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhereBloomMarquee from "./WhereBloomMarquee";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WhereBloom = () => {
  useGSAP(() => {
    const splitTextPreserveColor = (element: HTMLElement | null) => {
      if (!element) return;

      const nodes = Array.from(element.childNodes);
      const newHTML = nodes
        .map((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            // Normal h2 text
            return node.textContent
              ?.split("")
              .map(
                (char) =>
                  `<span class="text-animation" style="color:#cfd1da">${char}</span>`
              )
              .join("");
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Existing span (color preserve)
            const el = node as HTMLElement;
            const color = window.getComputedStyle(el).color; // #686a78
            return el.textContent
              ?.split("")
              .map(
                (char) =>
                  `<span class="text-animation" style="color:${color}">${char}</span>`
              )
              .join("");
          }
          return "";
        })
        .join("");

      element.innerHTML = newHTML;
    };

    const line1 = document.querySelector(".where-bloom-content h2");
    if (line1) splitTextPreserveColor(line1 as HTMLElement);
    const mm = gsap.matchMedia();

    mm.add("(min-width:1280px", () => {
      gsap.from(".text-animation", {
        scrollTrigger: {
          trigger: ".where-bloom-container",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "restart none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.2,
        stagger: 0.02,
      });
    });
  }, []);

  return (
    <section className="where-bloom-container animation-container">
      <div className="where-bloom-content">
        <h2 className="line-1">
          We’re Bloom®{" "}
          <span>
            — a creative studio cultivating bold brands, beautiful websites, and
            ideas that refuse to be ordinary.
          </span>
        </h2>
        <WhereBloomMarquee />
      </div>
    </section>
  );
};

export default WhereBloom;
