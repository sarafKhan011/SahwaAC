import React from "react";
import NavbarMain from "../components/nevbarSection/NavbarMain";
import HeroMain from "../components/heroSection/HeroMain";
import SubhMain from "../components/subHeroSection/SubhMain";
import PmMain from "../components/presidentMess/PmMain";
import PopularCourse from "../components/popularcourse/PopularCourse";
import Lecturer from "../components/lecturer/Lecturer";
import Footer from "../components/footer/FooterMain";
import Results from "@/components/Certificate/Results";
import HomeR from "@/components/Certificate/HomeR";
import StLogin from "@/components/Certificate/Login";
import AddResult from "@/components/Certificate/AddResult";

const Home = () => {
  return (
    <main className="font-body flex-col items-center">
      <NavbarMain />
      <HeroMain />
      <SubhMain />
      <PmMain />
      {/* <Results />
      <HomeR />
      <AddResult /> */}
      <PopularCourse />
      {/* <Lecturer /> */}
      <Footer />
    </main>
  );
};

export default Home;
