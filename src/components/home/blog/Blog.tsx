import { useGSAP } from "@gsap/react";
import blogImg1 from "../../Images/blog_img1.png";
import blogImg2 from "../../Images/blog_img2.png";
import blogImg3 from "../../Images/blog_img3.png";
import blogImg4 from "../../Images/blog_img4.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1280px)", () => {
      // Target h2 and p together
      gsap.from(".blog-title > *", {
        // direct children of blog-title
        opacity: 0,
        x: 200,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".blog-title",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      gsap.from(".cart-section", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cart-section",
          start: "top 80%",
          end: "top 40%",
          scrub: 1.6,
          toggleActions: "play none none none",
        },
      });
    });
  });

  return (
    <section className="blog-container">
      <div className="blog-title">
        <h2>The Blog</h2>
        <p>Curated by our team</p>
      </div>
      <div className="cart-section grid grid-cols-1 lg:grid-cols-2 gap-2 align-center justify-center">
        <div className="fisrt-cart">
          <img src={blogImg1} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>
              Plant with intention. Start with strategy, not just aesthetics.
            </p>
          </div>
        </div>
        <div className="fisrt-cart">
          <img src={blogImg2} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>The unexpected moments are where the magic happens.</p>
          </div>
        </div>
        <div className="fisrt-cart">
          <img src={blogImg3} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>
              Why Good Branding Isn’t Just a Logo (And What You Actually Need)
            </p>
          </div>
        </div>
        <div className="fisrt-cart">
          <img src={blogImg4} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>From Idea to Iconic: How to Build a Brand People Obsess Over</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
