import FooterBgSvg from "./svg/FooterBgSvg";
import FooterIconSvg from "./svg/FooterIconSvg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-top">
        <div>
          <FooterIconSvg></FooterIconSvg>
        </div>
        <ul>
          <li>Framer</li>
          <li>Dribble</li>
          <li>Figma</li>
        </ul>
      </div>
      <div className="footer-title">
        <h2>Let’s transform your brand.</h2>
        <button>
          Get in touch<MdOutlineArrowOutward></MdOutlineArrowOutward>
        </button>
      </div>
      <div className="footer-bottom">
        <div className="link-tag flex items-center gap-[18px]">
          <a>Home</a>
          <a>Works</a>
          <a>About</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
        <div className="footer-copyright">
          <h5 className="flex items-center gap-1">
            <MdOutlineCopyright></MdOutlineCopyright>2025 Bloom
          </h5>
        </div>
      </div>
      <div className="footer-bg">
        <FooterBgSvg></FooterBgSvg>
      </div>
    </section>
  );
};

export default Footer;
