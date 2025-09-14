import HumburgerMenuSvg from "./svg/HumburgerMenuSvg";
import LogoSvg from "./svg/LogoSvg";

const Navbar = () => {
  return (
    <section className="nav-container">
      <div className="nav-content">
        <div>
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
