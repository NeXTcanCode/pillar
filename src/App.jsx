// import './App.css'

import FirstHero from "./Component/FirstHero";
import LinkNine from "./Component/LinkNine";
import NewsImg from "./Component/NewsImg";
import ProjectImg from "./Component/ProjectImg";
import Testimonial from "./Component/Testimonial";
import Comment from "./Page/Eigth/Comment";
import LeftPart from "./Page/Eigth/LeftPart";
import AchieveCarousel from "./Page/Fifth/AchieveCarousel";
import Achievements from "./Page/Fifth/Achievements";
import FirstPage from "./Page/First/FirstPage";
import Hero from "./Page/First/Hero";
import NewsEvents from "./Page/Fourth/NewsEvents";
import Col1 from "./Page/Nine/Col1";
import Col2 from "./Page/Nine/Col2";
import Col3 from "./Page/Nine/Col3";
import NinePage from "./Page/Nine/NinePage";
import About from "./Page/Second/About";
import Allmessage from "./Page/Second/Allmessage";
import Image from "./Page/Second/Image";
import SecondPage from "./Page/Second/SecondPage";
import GallerySection from "./Page/Seventh/Gallery";
import GalleyLogo from "./Page/Seventh/GalleyLogo";
import Project from "./Page/Sixth/Project";
import ProjectActivities from "./Page/Sixth/ProjectActivities";
import ProjectCarousel from "./Page/Sixth/ProjectCarousel";
import Middle from "./Page/Third/Middle";
import Volunteer from "./Page/Third/Volunteer";

function App() {
  return (
    <>
      <FirstPage></FirstPage>
      {/* <About></About> */}
      {/* <Image></Image> */}
      {/* <Allmessage></Allmessage> */}
      <SecondPage></SecondPage>
      <Volunteer></Volunteer>
      {/* <Middle></Middle> */}
      {/* <NewsImg></NewsImg> */}
      <NewsEvents></NewsEvents>
      {/* <Achievements></Achievements> */}
      {/* <AchieveCarousel></AchieveCarousel> */}
      <Achievements></Achievements>
      {/* this is 5th page ^^^ */}
      {/* <Project></Project> */}
      {/* <ProjectCarousel></ProjectCarousel> */}
      {/* <ProjectImg></ProjectImg> */}
      <Project></Project>
      {/* this is 6th page ^^^ */}
      {/* <ProjectActivities></ProjectActivities> */}
      <GallerySection></GallerySection>
      {/* <GalleyLogo></GalleyLogo> */}
      <Comment></Comment>
      {/* <LeftPart></LeftPart> */}
      {/* <Col1></Col1> */}
      {/* <LinkNine></LinkNine> */}
      {/* <Col2></Col2> */}
      {/* <Col3></Col3> */}
      <NinePage></NinePage>
    </>
  );
}

export default App;
