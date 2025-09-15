import ToggleSvg from "./svg/ToggleSvg";
import { MdOutlineCheckCircle } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import FlexibleCircleSvg from "./svg/FlexibleCircleSvg";

const FlexiblePlans = () => {
  return (
    <section className="flexible-container">
      <div className="flexible-left-content relative">
        <h1 className="z-50">Flexible Plans.</h1>
        <p className="z-50">
          Whether you’re sprouting something new or giving your brand a bold new
          bloom — we’ve got a package for you.
        </p>
        <div className="input-container z-50">
          <input
            className="flexible-input"
            type="text"
            name="text"
            id="text1"
            placeholder="Switch to monthly"
          />
          <div className="toggle-svg">
            <ToggleSvg></ToggleSvg>
          </div>
        </div>
        <div className="absolute -top-2 -left-2 overflow-hidden pointer-events-none rounded-tl-[16px] z-0">
          <FlexibleCircleSvg></FlexibleCircleSvg>
        </div>
      </div>
      <div className="flexible-right-content">
        <h4 className="subtitle">Per Project</h4>
        <h2 className="dollar">$4,999</h2>
        <p className="flexible-right-p">Delivery time: 4-6 weeks</p>
        <ul className="new-project-list">
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>Full Brand Strategy &
            Identity
          </li>
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>Logo Suite + Social
            Media
          </li>
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>5-Page Website (Framer
            or Figma)
          </li>
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>Full Copywriting
          </li>
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>Brand Guidelines
          </li>
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>2 Rounds of Revisions
          </li>
          <li>
            <MdOutlineCheckCircle></MdOutlineCheckCircle>Ongoing Creative
            Support
          </li>
        </ul>
        <button>
          Let's Talk<MdOutlineArrowOutward></MdOutlineArrowOutward>
        </button>
      </div>
    </section>
  );
};

export default FlexiblePlans;
