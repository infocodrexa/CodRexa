import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Home/Hero/Hero";
import ContactForm from "./Components/forms/ContactForm";
import OrganizationForm from "./Components/forms/OrganizationForm";
import PersonalForm from "./Components/forms/PersonalForm";
import Footer from "./fotter";
import NavBar from "./Navbar";
import Whyus from "./Components/About/WhyUs/Whyus";
import TeamWork from "./Components/About/Our Team/TeamWork";
import Homepage from "./Components/Home/homepage/Homepage.jsx";
import Dashboard from "./User/Dashboard.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage/>
              <OrganizationForm />
              <PersonalForm />
            </>
          }
        />
        <Route path="/Whyus" element={<Whyus />} />
        <Route path="/team" element={<TeamWork/>} />
        <Route path="/mission" element={<TeamWork/>} />
        <Route path="/web-design" element={<Dashboard />} />
        <Route path="/web-dev" element={<Dashboard />} />
        <Route path="/seo" element={<Dashboard />} />
        <Route path="/basic" element={<Dashboard />} />
        <Route path="/premium" element={<Dashboard />} />
        <Route path="/enterprise" element={<Dashboard />} />
        <Route path="/portfolio" element={<Dashboard />} />
        <Route path="/blog" element={<Dashboard />} />
        <Route path="/enquiry" element={<Dashboard />} />
        <Route path="/contact" element={ <ContactForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
