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

const App = () => {
  return (
    <section id="font-inter" className="bg-[#fff] main-container">
      <div className="bg-[#F2F2F7] rounded-[12px] overflow-hidden">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <WhereBloom></WhereBloom>
      <SelectedWorks></SelectedWorks>
      <Services></Services>
      <Video></Video>
      <WorkingWithBloom></WorkingWithBloom>
      <Location></Location>
      <FlexiblePlans></FlexiblePlans>
      <Blog></Blog>
      <Faq></Faq>
      <Footer></Footer>
    </section>
  );
};

export default App;
