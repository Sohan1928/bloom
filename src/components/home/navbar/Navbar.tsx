import { useGSAP } from "@gsap/react";
import HumburgerMenuSvg from "./svg/HumburgerMenuSvg";
import LogoSvg from "./svg/LogoSvg";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px", () => {
      gsap.from(".nav-content", {
        y: -150,
        duration: 1.2,
        ease: "power1.in",
        delay: 1,
      });
    });
  }, []);
  return (
    <section className="nav-container">
      <div className="nav-content">
        <div className="navbar-logo">
          <LogoSvg></LogoSvg>
        </div>
        <div className="humburger-menu">
          <HumburgerMenuSvg></HumburgerMenuSvg>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
