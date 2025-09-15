import { IoPlay } from "react-icons/io5";

const Video = () => {
  return (
    <section className="video-container relative">
      <div className="video-img relative">
        <h4 className="absolute">We’re Bloom® — Your Creative Cultivators.</h4>
        <div className="absolute play-btn text-2xl">
          <IoPlay></IoPlay>
        </div>
      </div>
    </section>
  );
};

export default Video;
