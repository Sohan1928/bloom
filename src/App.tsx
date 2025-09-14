import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";
import SelectedWorks from "./components/home/selectedWorks/SelectedWorks";
import WhereBloom from "./components/home/whereBloom/WhereBloom";

const App = () => {
  return (
    <section id="font-inter" className="bg-[#fff] main-container">
      <div className="bg-[#F2F2F7]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <WhereBloom></WhereBloom>
      <SelectedWorks></SelectedWorks>
    </section>
  );
};

export default App;
