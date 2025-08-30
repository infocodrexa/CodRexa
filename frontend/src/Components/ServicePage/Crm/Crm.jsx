import React from "react";
import "./Crm.css";
import crmBanner from "../../../assets/Customer Relation Management.png"; // ✅ Update path if needed

const Crm = () => {
  return (
    <div className="crm-container">
      {/* Banner Section */}
      <div className="crm-banner">
        <img src={crmBanner} alt="CRM Banner" className="crm-banner-img" />
      </div>

      {/* Content */}
      <div className="crm-content">
        <h2>Custom CRM Solutions</h2>
        <h3>Build the best relationships with your customers</h3>
        <p>
          Get to know your audience and find new ways to interact and communicate with your 
          customers using our custom CRM solutions. 
        </p>

        <h3>How and when can we start?</h3>
        <p>
          Connect all your contact data and bring all your audience information into one 
          place. Start segmenting your data based on your sales and marketing needs.
        </p>
        <p>
          Organize what you know by creating your own segmentation and tags to filter 
          target audience data however and whenever you require. 
        </p>
        <p>
          Understand patterns in your data with our intuitive dashboard and get to know 
          your audience at a glance. Turn audience insights into action by setting up 
          automated messages to trigger for specific target segments.
        </p>

        <h3>Get a holistic view of your audience</h3>
        <p>
          Whether you’re starting from scratch with CRM or bringing an existing audience 
          into our system, connecting your store and keeping all your contact data in one 
          place helps you stay organized and improve your sales and marketing. 
          Our intuitive dashboards help you see your audience clearly and send 
          targeted campaigns with just a few clicks.
        </p>

        <h3>Organize your contacts however you need to</h3>
        <p>
          With all your contact data in one place, it’s easy to use our segmentation tools 
          to find exactly who you need to talk to. Segments and groups work in different ways 
          to help you create your own structure and keep track of everything you learn 
          about your contacts as you grow.
        </p>

        <h3>Get insights about how to talk to your audience</h3>
        <p>
          Our CRM makes it easy to gain insights about your audience — from a bird’s eye view 
          to an individual level. Growth, engagement, and revenue reports reveal patterns in 
          behavior and help you see what’s working. Contact profiles let you track purchases, 
          preferences, and key details so you can build stronger connections.
        </p>
      </div>
    </div>
  );
};

export default Crm;
