// import Banner from "./components/home/banner/Banner";
// import Blog from "./components/home/blog/Blog";
// import Faq from "./components/home/faq/Faq";
// import FlexiblePlans from "./components/home/flexiblePlans/FlexiblePlans";
// import Footer from "./components/home/footer/Footer";
// import Location from "./components/home/locations/Location";
// import Navbar from "./components/home/navbar/Navbar";
// import SelectedWorks from "./components/home/selectedWorks/SelectedWorks";
// import Services from "./components/home/services/Services";
// import Video from "./components/home/video/Video";
// import WhereBloom from "./components/home/whereBloom/WhereBloom";
// import WorkingWithBloom from "./components/home/workingWithBloom/WorkingWithBloom";
// // import { useGSAP } from "@gsap/react";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import gsap from "gsap";
// gsap.registerPlugin(ScrollSmoother);

// const App = () => {
//   // useGSAP(() => {
//   //   const smoother = ScrollSmoother.create({
//   //     wrapper: "#smooth-wrapper",
//   //     content: "#smooth-content",
//   //     smooth: 1.3,
//   //     smoothTouch: 0.1,
//   //     effects: true,
//   //   });

//   //   return () => {
//   //     smoother.kill(); // cleanup
//   //   };
//   // }, []);
//   return (
//     <section
//       id="smooth-wrapper"
//       className="font-inter bg-[#fff] main-container"
//     >
//       <div id="smooth-content">
//         <div className="bg-[#F2F2F7] rounded-[12px] overflow-hidden">
//           <Navbar></Navbar>
//           <Banner></Banner>
//         </div>
//         <WhereBloom></WhereBloom>
//         <SelectedWorks></SelectedWorks>
//         <Services></Services>
//         <Video></Video>
//         <WorkingWithBloom></WorkingWithBloom>
//         <Location></Location>
//         <FlexiblePlans></FlexiblePlans>
//         <Blog></Blog>
//         <Faq></Faq>
//         <Footer></Footer>
//       </div>
//     </section>
//   );
// };

// export default App;

import { useEffect } from "react";
import Banner from "./components/home/banner/Banner";
import Blog from "./components/home/blog/Blog";
import Faq from "./components/home/faq/Faq";
import FlexiblePlans from "./components/home/flexiblePlans/FlexiblePlans";
import Footer from "./components/home/footer/Footer";
import Location from "./components/home/locations/Location";
import Navbar from "./components/home/navbar/Navbar";
import SelectedWorks from "./components/home/selectedWorks/SelectedWorks";
import Services from "./components/home/services/Services";
import Video from "./components/home/video/Video";
import WhereBloom from "./components/home/whereBloom/WhereBloom";
import WorkingWithBloom from "./components/home/workingWithBloom/WorkingWithBloom";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const App = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // smoothness factor (1–3 works well)
      smoothTouch: 0.1, // touch device smoothness
      effects: true, // enable data-speed & data-lag effects
    });

    return () => {
      smoother.kill(); // cleanup on unmount
    };
  }, []);

  return (
    <section
      id="smooth-wrapper"
      className="font-inter bg-[#fff] main-container"
    >
      <div id="smooth-content">
        <div className="bg-[#F2F2F7] rounded-[12px] overflow-hidden">
          <Navbar />
          <Banner />
        </div>
        <WhereBloom />
        <SelectedWorks />
        <Services />
        <Video />
        <WorkingWithBloom />
        <Location />
        <FlexiblePlans />
        <Blog />
        <Faq />
        <Footer />
      </div>
    </section>
  );
};

export default App;
