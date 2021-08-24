import photo1 from "../../../images/photo-1.jpg";
import photo2 from "../../../images/photo-2.jpg";

function AboutMusic() {
  return (
    <section className="about-music">
      <div className="container">
        <header className="flow-content">
          <h2 className="sectionAbout-title">
            We make <a href="#">Live</a>, <a href="#">Push</a> and{" "}
            <a href="#">Link</a> — unique software and hardware for music
            creation and performance. With these products, our community of
            users creates amazing things.
          </h2>
          <p className="sectionAbout-para">
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.
          </p>
        </header>

        <div className="making-music__display">
          <div className="flex">
            <div className="yellowBackground"></div>
            <div className="img-left">
              <img src={photo1} alt="photo 1" />
            </div>
            <div className="img-right">
              <img src={photo2} alt="photo 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMusic;
