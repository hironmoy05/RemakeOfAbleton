import PrimaryHeader from "./PrimaryHeader/PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader/SecondaryHeader";
import Hero from "./Hero/Hero";
import AboutMusic from "./About/AboutMusic/AboutMusic";
import MakingMusic from "./About/MakingMusic/MakingMusic";
import AboutUs from "./About/AboutUs/AboutUs";
import Believe from "./About/Believe/Believe";
import OurPassionate from "./About/OutPassionate/OurPassionate";
import Talent from "./About/Talent/Talent";
import PrimaryFooter from "./PrimaryFooter/PrimaryFooter";

function App() {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <Hero />
      <main>
        <AboutMusic />
        <MakingMusic />
        <AboutUs />
        <Believe />
        <OurPassionate />
        <Talent />
      </main>
      <PrimaryFooter />
    </>
  );
}

export default App;
