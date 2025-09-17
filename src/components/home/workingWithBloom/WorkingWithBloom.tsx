import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkingWithBloom = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:1280px", () => {
      gsap.from(".working-bloom-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".working-bloom-container",
          start: "top 90%",
          end: "top 50%",
          scrub: 1.6,
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  useGSAP(() => {
    // Function to split text & preserve color if needed
    const splitTextPreserveColor = (element: HTMLElement | null) => {
      if (!element) return;

      const nodes = Array.from(element.childNodes);
      const newHTML = nodes
        .map((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            // normal text
            return node.textContent
              ?.split("")
              .map(
                (char) =>
                  `<span class="text-animation" style="color:#fff">${char}</span>` // default color
              )
              .join("");
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            const color = window.getComputedStyle(el).color;
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

    const textContent = document.querySelector(".text-content h3");
    if (textContent) splitTextPreserveColor(textContent as HTMLElement);

    // MatchMedia for responsiveness (optional)
    const mm = gsap.matchMedia();
    mm.add("(min-width:1280px)", () => {
      gsap.from(".text-content .text-animation", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".text-content-h3",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      // Optional: animate author-content
      gsap.from(".author-content span", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".text-content",
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section className="working-bloom-container">
      <div className="working-bloom-content lg:flex lg:items-center lg:justify-center">
        <div className="work-bloom-img"></div>
        <div className="text-content flex flex-col justify-center">
          <h3 className="hidden lg:block text-content-h3">
            Working with Bloom felt like hiring a creative greenhouse for our
            ideas. Everything grew faster and brighter than we imagined.
          </h3>
          <h3 className="block lg:hidden">
            “At Bloom, we’re not just pixel pushers or color pickers. We’re
            digital dreamers. From branding to web design, we turn bright ideas
            into bold realities.”
          </h3>
          <p className="flex flex-col author-content gap-1">
            <span>Carl Sagan</span>
            <span className="pt-1">Founder @Krom</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingWithBloom;
