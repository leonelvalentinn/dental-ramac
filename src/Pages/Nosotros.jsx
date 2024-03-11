
import HeroAbout from "../Components/HeroAbout";
import AboutMe from "../Components/AboutMe";
import Ofrecemos from "../Components/Ofrecemos";
import Description from "../Components/Description";
import Amenidades from "../Components/Amenidades";
import Navbar from "../Components/Navbar";

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <Amenidades />
      <AboutMe />
      <Ofrecemos />
      <Description />
    </div>
  );
};

export default Nosotros;
