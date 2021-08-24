import posterMeetTheMakers from "../../../images/poster-meet-the-makers.jpg";

function Believe() {
  return (
    <section className="believe">
      <div className="container">
        <header className="flow-content">
          <h2 className="sectionAbout-title">We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h2>
          <p className="sectionAbout-para">Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
        </header>

        <div className="believe__display">
          <img src={posterMeetTheMakers} alt="poster of makers" />
        </div>
      </div>
    </section>
  )
}

export default Believe;
