import Maps from "./Maps";

const Location = () => {
  return (
    <section className="location-container">
      <div className="location-main-content">
        <div className="title-content">
          <h3 className="subtitle">Locations</h3>
          <h2 className="title">We’re Global </h2>
          <p>
            We’ve built a strong team operating in all time zones, 100% remote.
          </p>
        </div>
        <Maps></Maps>
      </div>
    </section>
  );
};

export default Location;
