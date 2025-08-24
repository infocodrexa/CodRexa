import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Home/Hero/Hero";
import ContactForm from "./Components/forms/ContactForm";
import OrganizationForm from "./Components/forms/OrganizationForm";
import PersonalForm from "./Components/forms/PersonalForm";
import Footer from "./fotter";
import NavBar from "./Navbar";
import Whyus from "./Components/About/WhyUs/Whyus";
import TeamWork from "./Components/About/Our Team/TeamWork";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ContactForm />
              <OrganizationForm />
              <PersonalForm />
            </>
          }
        />
        <Route path="/Whyus" element={<Whyus />} />
        <Route path="/team" element={<TeamWork/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
