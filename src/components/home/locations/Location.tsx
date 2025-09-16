import Maps from "./Maps";

const Location = () => {
  return (
    <section className="location-container">
      <div className="location-main-content">
        <div className="title-content">
          <h3 className="subtitle">Locations</h3>
          <h2 className="title">We’re Global </h2>
          <p className="hidden lg:block">
            We’ve built a strong team operating in all time zones, 100% remote.
          </p>
          <p className="block lg:hidden">
            We’ve helped businesses across industries achieve their goals.
          </p>
        </div>
        <Maps></Maps>
      </div>
    </section>
  );
};

export default Location;
