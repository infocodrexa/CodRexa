import { Routes, Route } from "react-router-dom";
import PersonalForm from "./Components/forms/PersonalForm";
import Footer from "./fotter";
import NavBar from "./Navbar";
import Whyus from "./Components/About/WhyUs/Whyus";
import TeamWork from "./Components/About/Our Team/TeamWork";
import Homepage from "./Components/Home/homepage/Homepage.jsx";
import Dashboard from "./User/Dashboard.jsx";
import Basic from "./Components/Package/Basic/Basic.jsx";
import Primium from "./Components/Package/Primium/Primium.jsx";
import NotFound from "./NotFound.jsx"

// Import Service Pages

import LocalSeo from "./Components/ServicePage/LocalSeo/LocalSeo";
import Smo from "./Components/ServicePage/Smo/Smo";
import Seo from "./Components/ServicePage/Seo/Seo";
import ContentMarketing from "./Components/ServicePage/ContentMarketing/ContentMarketing";
import Orm from "./Components/ServicePage/Orm/Orm";
import LinkBuilding from "./Components/ServicePage/LinkBuilding/LinkBuilding";
import WebsiteOptimization from "./Components/ServicePage/WebsiteOptimization/WebsiteOptimization";
import ModernResponsive from "./Components/ServicePage/ModernResponsive/ModernResponsive";
import EcommerceDev from "./Components/ServicePage/EcommerceDev/EcommerceDev";
import WordpressShopify from "./Components/ServicePage/WordpressShopify/WordpressShopify";
import Crm from "./Components/ServicePage/Crm/Crm";
// import WebDev from "./Components/ServicePage/WebDev/WebDev";
import Ppc from "./Components/ServicePage/Ppc/Ppc";
import FbTwitterAds from "./Components/ServicePage/FbTwitterAds/FbTwitterAds";
import AdwordsExpress from "./Components/ServicePage/AdwordsExpress/AdwordsExpress";
import DisplayAds from "./Components/ServicePage/DisplayAds/DisplayAds";
import ShoppingAds from "./Components/ServicePage/ShoppingAds/ShoppingAds";
import LeadMarketing from "./Components/ServicePage/LeadMarketing/LeadMarketing";
import YoutubePromotion from "./Components/ServicePage/YoutubePromotion/YoutubePromotion";
import Android from "./Components/ServicePage/Android/Android";
import Ios from "./Components/ServicePage/Ios/Ios";
import AppStoreOptimization from "./Components/ServicePage/AppStoreOptimization/AppStoreOptimization";
import MarketplaceListing from "./Components/ServicePage/MarketplaceListing/MarketplaceListing";
import AmazonFlipkart from "./Components/ServicePage/AmazonFlipkart/AmazonFlipkart";
import AffiliateMarketing from "./Components/ServicePage/AffiliateMarketing/AffiliateMarketing";
import Redesign from "./Components/ServicePage/Redesign/Redesign";
import Maintenance from "./Components/ServicePage/Maintenance/Maintenance";
import DomainHosting from "./Components/ServicePage/DomainHosting/DomainHosting";
import Ssl from "./Components/ServicePage/Ssl/Ssl";
import CONTACTUS from "./Components/CONTACT US/CONTACTUS.jsx";
import AboutSection from "./Components/Home/Hero2/AboutSection.jsx";
import { BusinessPricingSection } from "./Components/Package/BusinessPricing/BusinessPricing.jsx";
import ENQUIRY from "./Components/ENQUIRY/ENQUIRY.jsx";
import Services from "./Components/ServicePage/Service/Service";
import FloatingIcons from "./FloatingIcons.jsx";
import { CgOverflow } from "react-icons/cg";

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route  path="/"  element={ <Homepage /> } />
        <Route path="/premium" element={<Primium />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/Whyus" element={<Whyus />} />
        <Route path="/team" element={<TeamWork />} />
        <Route path="/mission" element={<AboutSection/>} />
        <Route path="/enterprise" element={<BusinessPricingSection/>} />
        <Route path="/enquiry" element={<ENQUIRY/>} />
        <Route path="/contact" element={<CONTACTUS/>} />
        <Route path="/PersonalForm" element={<PersonalForm />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Services Routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/smo" element={<Smo />} />
        <Route path="/services/local-seo" element={<LocalSeo />} />
        <Route
          path="/services/content-marketing"
          element={<ContentMarketing />}
        />
        <Route path="/services/orm" element={<Orm />} />
        <Route path="/services/link-building" element={<LinkBuilding />} />
        <Route
          path="/services/website-optimization"
          element={<WebsiteOptimization />}
        />
        <Route
          path="/services/modern-responsive"
          element={<ModernResponsive />}
        />
        <Route path="/services/ecommerce-dev" element={<EcommerceDev />} />
        <Route
          path="/services/wordpress-shopify"
          element={<WordpressShopify />}
        />
        <Route path="/services/crm" element={<Crm />} />
        <Route path="/services/web-dev" element={ <Homepage/>} />
        <Route path="/services/ppc" element={<Ppc />} />
        <Route path="/services/fb-twitter-ads" element={<FbTwitterAds/>} />
        <Route path="/services/adwords-express" element={<AdwordsExpress />} />
        <Route path="/services/display-ads" element={<DisplayAds />} />
        <Route path="/services/shopping-ads" element={<ShoppingAds />} />
        <Route path="/services/lead-marketing" element={<LeadMarketing />} />
        <Route
          path="/services/youtube-promotion"
          element={<YoutubePromotion />}
        />
        <Route path="/services/android" element={<Android />} />
        <Route path="/services/ios" element={<Ios />} />
        <Route
          path="/services/app-store-optimization"
          element={<AppStoreOptimization />}
        />
        <Route
          path="/services/marketplace-listing"
          element={<MarketplaceListing />}
        />
        <Route path="/services/amazon-flipkart" element={<AmazonFlipkart />} />
        <Route
          path="/services/affiliate-marketing"
          element={<AffiliateMarketing />}
        />
        <Route path="/services/redesign" element={<Redesign />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/domain-hosting" element={<DomainHosting />} />
        <Route path="/services/ssl" element={<Ssl />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <FloatingIcons/>

      <Footer />
    </>
  );
}

export default App;
