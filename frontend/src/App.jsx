import Hero from "./Components/Home/Hero/Hero";
import ContactForm from "./Components/forms/ContactForm";
import OrganizationForm from "./Components/forms/OrganizationForm";
import PersonalForm from "./Components/forms/PersonalForm";
import Footer from "./Fotter.jsx";
import NavBar from "./Navbar";
import HomeSlide from "./Components/Home/Hero_Slide/heroSlide.jsx";
import WhyChooseUs from "./Components/Home/WhyChooseUs/WhyChooseUs.jsx";
import OurServices from "./Components/Home/OurServices/OurServices.jsx";

function App() {


  return (
    <>
      <NavBar />
      <Hero />
      <HomeSlide/>
      <WhyChooseUs/>
      <OurServices/>
      <ContactForm />
      <OrganizationForm />
      <PersonalForm />
      <Footer />
    </>
  );
}

export default App;
