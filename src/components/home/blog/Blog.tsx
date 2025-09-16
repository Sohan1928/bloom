import blogImg1 from "../../Images/blog_img1.png";
import blogImg2 from "../../Images/blog_img2.png";
import blogImg3 from "../../Images/blog_img3.png";
import blogImg4 from "../../Images/blog_img4.png";

const Blog = () => {
  return (
    <section className="blog-container">
      <div className="blog-title">
        <h2>The Blog</h2>
        <p>Curated by our team</p>
      </div>
      <div className="cart-section grid grid-cols-1 lg:grid-cols-2 gap-2 align-center justify-center">
        <div className="fisrt-cart">
          <img src={blogImg1} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>
              Plant with intention. Start with strategy, not just aesthetics.
            </p>
          </div>
        </div>
        <div className="fisrt-cart">
          <img src={blogImg2} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>The unexpected moments are where the magic happens.</p>
          </div>
        </div>
        <div className="fisrt-cart">
          <img src={blogImg3} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>
              Why Good Branding Isn’t Just a Logo (And What You Actually Need)
            </p>
          </div>
        </div>
        <div className="fisrt-cart">
          <img src={blogImg4} alt="blogImg1" />
          <div className="first-cart-bottom">
            <h6>1.5.2024</h6>
            <p>From Idea to Iconic: How to Build a Brand People Obsess Over</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
