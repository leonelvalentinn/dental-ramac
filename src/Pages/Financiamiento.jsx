
import "../Styles/financiamiento.css";
import HeroFinanciamiento from "../Components/HeroFinanciamiento";
import SliderF from "../Components/SliderF";
import DescriptionF from "../Components/DescriptionF";
import Navbar from "../Components/Navbar";

const Financiamiento = () => {
  return (
    <div>
      <Navbar />
      <HeroFinanciamiento />
      <SliderF />
      <DescriptionF />
    </div>
  );
};

export default Financiamiento;
