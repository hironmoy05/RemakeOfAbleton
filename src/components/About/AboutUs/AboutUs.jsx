import photo3 from "../../../images/photo-3.jpg";
import photo4 from "../../../images/photo-4.jpg";
import photo5 from "../../../images/photo-5.jpg";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <header className="flow-content">
          <h2 className="sectionAbout-title">
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </h2>
          <div className="sectionAbout-para">
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </div>
        </header>

        <div className="about-us__display">
          <div className="lightGreenBackground"></div>
          <div className="flex">
            <div className="img-left">
              <img src={photo3} alt="photo 3" />
              <img src={photo4} alt="photo 4" />
            </div>
            <div className="img-right">
              <img src={photo5} alt="photo 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
