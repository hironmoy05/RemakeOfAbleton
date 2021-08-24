import photo6 from "../../../images/photo-6.jpg";
import photo7 from "../../../images/photo-7.jpg";

function OurPassionate() {
  return (
    <section className="our-passionate">
      <div className="container">
        <header className="flow-content">
          <h2 className="sectionAbout-title">
            We’re passionate about what we do, but we’re equally passionate
            about improving who we are.
          </h2>
          <p className="sectionAbout-para">
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other.
          </p>

          <p className="sectionAbout-para">
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </p>
        </header>

        <div className="our-passionate__display">
          <div className="lavendarBackground"></div>
          <div className="flex">
            <div className="img-left img-right--opposite">
              <img src={photo6} alt="photo 6" />
            </div>
            <div className="img-right img-left--opposite">
              <img src={photo7} alt="photo 7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPassionate;
