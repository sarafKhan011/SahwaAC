import React from "react";
import NavbarMain from "../components/nevbarSection/NavbarMain";
import HeroMain from "../components/heroSection/HeroMain";
import SubhMain from "../components/subHeroSection/SubhMain";
import PmMain from "../components/presidentMess/PmMain";
import PopularCourse from "../components/popularcourse/PopularCourse";
import Lecturer from "../components/lecturer/Lecturer";
import Footer from "../components/footer/FooterMain";

const Home = () => {
  return (
    <main className="font-body flex-col items-center">
      <NavbarMain />
      <HeroMain />
      <SubhMain />
      <PmMain />
      <PopularCourse />
      <Lecturer />
      <Footer />
    </main>
  );
};

export default Home;
