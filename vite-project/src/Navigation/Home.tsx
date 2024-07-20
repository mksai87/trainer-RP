import Banner from "../components/Banner";
import HoriZantal from "../components/HoriZantal";
import HoriVerebal from "../components/HoriVerebal";
import HoriTech from "../components/HoriTech";
import Learn from "../components/Learn";
import Footer from "../components/Footer";
import FeedbackForm from "../FeedbackForm";

function Home() {
  return (
    <>
      <>
        <Banner></Banner>
        <br />
        <HoriZantal></HoriZantal>
        <br />
        <HoriVerebal></HoriVerebal>
        <br />
        <HoriTech></HoriTech>
        <br />
        <Learn></Learn>
        <br />
        <FeedbackForm></FeedbackForm>
        <br />
        <Footer></Footer>
      </>
    </>
  );
}
export default Home;
