const Services = () => {
  return (
    <section className="services-container">
      <div className="title-content">
        <h3 className="subtitle">Services</h3>
        <h2 className="title">What We Grow Best</h2>
      </div>
      {/* branding content */}
      <div className="lg:min-h-screen flex items-center justify-center">
        <div className="branding-content grid lg:grid-cols-4 gap-2 items-center justify-center text-center mx-auto">
          <div className="branding-box">
            <h4>Branding</h4>
          </div>
          <div className="branding-box available-box">
            <h4></h4>
          </div>
          <div className="branding-box">
            <h4>UI.UX</h4>
          </div>
          <div className="branding-box available-box">
            <h4></h4>
          </div>
          <div className="branding-box available-box">
            <h4></h4>
          </div>
          <div className="branding-box">
            <h4>Motion</h4>
          </div>
          <div className="branding-box available-box">
            <h4></h4>
          </div>
          <div className="branding-box">
            <h4>Web</h4>
          </div>
          <div className="branding-box">
            <h4>Mobile</h4>
          </div>
          <div className="branding-box available-box">
            <h4></h4>
          </div>
          <div className="branding-box">
            <h4>3D</h4>
          </div>
          <div className="branding-box available-box">
            <h4></h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
