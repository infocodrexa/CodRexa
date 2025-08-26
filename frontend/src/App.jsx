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

// Import Service Pages
import Seo from "./Components/ServicePage/Seo";
import Smo from "./Components/ServicePage/Smo";
import LocalSeo from "./Components/ServicePage/LocalSeo";
import ContentMarketing from "./Components/ServicePage/ContentMarketing";
import Orm from "./Components/ServicePage/Orm";
import LinkBuilding from "./Components/ServicePage/LinkBuilding";
import WebsiteOptimization from "./Components/ServicePage/WebsiteOptimization";
import Analytics from "./Components/ServicePage/Analytics";
import ModernResponsive from "./Components/ServicePage/ModernResponsive";
import EcommerceDev from "./Components/ServicePage/EcommerceDev";
import WordpressShopify from "./Components/ServicePage/WordpressShopify";
import Crm from "./Components/ServicePage/Crm";
import WebDev from "./Components/ServicePage/WebDev";
import Ppc from "./Components/ServicePage/Ppc";
import FbTwitterAds from "./Components/ServicePage/FbTwitterAds";
import AdwordsExpress from "./Components/ServicePage/AdwordsExpress";
import DisplayAds from "./Components/ServicePage/DisplayAds";
import ShoppingAds from "./Components/ServicePage/ShoppingAds";
import LeadMarketing from "./Components/ServicePage/LeadMarketing";
import YoutubePromotion from "./Components/ServicePage/YoutubePromotion";
import Android from "./Components/ServicePage/Android";
import Ios from "./Components/ServicePage/Ios";
import AppStoreOptimization from "./Components/ServicePage/AppStoreOptimization";
import MarketplaceListing from "./Components/ServicePage/MarketplaceListing";
import AmazonFlipkart from "./Components/ServicePage/AmazonFlipkart";
import AffiliateMarketing from "./Components/ServicePage/AffiliateMarketing";
import Redesign from "./Components/ServicePage/Redesign";
import Maintenance from "./Components/ServicePage/Maintenance";
import DomainHosting from "./Components/ServicePage/DomainHosting";
import Ssl from "./Components/ServicePage/Ssl";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <OrganizationForm />
              <PersonalForm />
            </>
          }
        />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/team" element={<TeamWork />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Services Routes */}
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/smo" element={<Smo />} />
        <Route path="/services/local-seo" element={<LocalSeo />} />
        <Route path="/services/content-marketing" element={<ContentMarketing />} />
        <Route path="/services/orm" element={<Orm />} />
        <Route path="/services/link-building" element={<LinkBuilding />} />
        <Route path="/services/website-optimization" element={<WebsiteOptimization />} />
        <Route path="/services/analytics" element={<Analytics />} />
        <Route path="/services/modern-responsive" element={<ModernResponsive />} />
        <Route path="/services/ecommerce-dev" element={<EcommerceDev />} />
        <Route path="/services/wordpress-shopify" element={<WordpressShopify />} />
        <Route path="/services/crm" element={<Crm />} />
        <Route path="/services/web-dev" element={<WebDev />} />
        <Route path="/services/ppc" element={<Ppc />} />
        <Route path="/services/fb-twitter-ads" element={<FbTwitterAds />} />
        <Route path="/services/adwords-express" element={<AdwordsExpress />} />
        <Route path="/services/display-ads" element={<DisplayAds />} />
        <Route path="/services/shopping-ads" element={<ShoppingAds />} />
        <Route path="/services/lead-marketing" element={<LeadMarketing />} />
        <Route path="/services/youtube-promotion" element={<YoutubePromotion />} />
        <Route path="/services/android" element={<Android />} />
        <Route path="/services/ios" element={<Ios />} />
        <Route path="/services/app-store-optimization" element={<AppStoreOptimization />} />
        <Route path="/services/marketplace-listing" element={<MarketplaceListing />} />
        <Route path="/services/amazon-flipkart" element={<AmazonFlipkart />} />
        <Route path="/services/affiliate-marketing" element={<AffiliateMarketing />} />
        <Route path="/services/redesign" element={<Redesign />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/domain-hosting" element={<DomainHosting />} />
        <Route path="/services/ssl" element={<Ssl />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
