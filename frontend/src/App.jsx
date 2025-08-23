import Hero from "./Components/Home/Hero/Hero";
import ContactForm from "./Components/forms/ContactForm";
import OrganizationForm from "./Components/forms/OrganizationForm";
import PersonalForm from "./Components/forms/PersonalForm";
import Footer from "./fotter";
import NavBar from "./Navbar"

function App() {


  return (
    <>
      <NavBar />
      <Hero />
      <ContactForm />
      <OrganizationForm />
      <PersonalForm />
      <Footer />
    </>
  );
}

export default App;
