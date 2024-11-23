import Faq from "../components/Faq";
import Banner from "../components/Banner";
import About from "../components/About";
import Facilities from "../components/Facilities";
import UserGuide from "../components/UserGuide";
import OurImpact from "../components/OurImpact";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <div>
        <Banner/>
        <About/>
        <Facilities/>
        <UserGuide/>
        <Faq/>
        <OurImpact/>
        <Review/>
      </div>
    </>
  )
}

export default Home;