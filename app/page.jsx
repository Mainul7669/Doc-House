import Banner from "@components/Banner";
import Contact from "@components/Contact";
import Doctors from "@app/doctors/Doctors";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Review from "@components/Review";
import ServiceCards from "@components/ServiceCards";
import Services from "@components/Services";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col bg-[#FFF]">
      <Navbar/>
      <Banner />
      <Services/>
      <ServiceCards/>
      <Review/>
      <Doctors/>
      <Contact/>
      <Footer/>
    </section>
  );
};

export default Home;
