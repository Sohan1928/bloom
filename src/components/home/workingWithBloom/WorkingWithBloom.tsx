const WorkingWithBloom = () => {
  return (
    <section className="working-bloom-container">
      <div className="working-bloom-content lg:flex lg:items-center lg:justify-center">
        <div className="work-bloom-img"></div>
        <div className="text-content flex flex-col justify-center">
          <h3 className="hidden lg:block">
            Working with Bloom felt like hiring a creative greenhouse for our
            ideas. Everything grew faster and brighter than we imagined.
          </h3>
          <h3 className="block lg:hidden">
            “At Bloom, we’re not just pixel pushers or color pickers. We’re
            digital dreamers. From branding to web design, we turn bright ideas
            into bold realities.”
          </h3>
          <p className="flex flex-col author-content gap-1">
            <span>Carl Sagan</span>
            <span className="pt-1">Founder @Krom</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingWithBloom;
