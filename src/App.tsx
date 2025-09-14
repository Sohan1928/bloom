import Banner from "./components/home/banner/Banner";
import Navbar from "./components/home/navbar/Navbar";

const App = () => {
  return (
    <section id="font-inter" className="bg-[#fff] main-container">
      <div className="bg-[#F2F2F7]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </section>
  );
};

export default App;
