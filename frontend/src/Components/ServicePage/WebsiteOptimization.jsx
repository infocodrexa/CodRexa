
import React from "react";
import "./WebsiteOptimization.css";
import WebsiteImg from "../../assets/websiteOptmize.png"; 
import BackgroundImage from "./BackgroundImage";

const WebsiteOptimization = () => {
  return (
    <>
    <div>
      <BackgroundImage src={WebsiteImg} alt="image loading" marginTop="0px" />
    </div>

      <h1 className="optimization-title">
        How to Optimize Your Website for Better Performance
      </h1>
      <p className="optimization-intro">
        Web Performance plays a major role in the online journey. High
        performing sites increase brand perception—giving you a competitive
        edge online and a reason for users to keep coming back. Faster sites
        get higher engagement and retain visitors for longer, increasing sales
        and your bottom line.
      </p>

      <div className="optimization-box">
        <p>
          In order to ensure an excellent user experience, you need to
          constantly optimize your site for performance. And with the advent
          of Google's new performance metrics, Core Web Vitals (CWV), there’s
          never been a better time to get a handle on site optimization.
        </p>

        <p>
          CWV metrics simplify performance measurement and monitoring by
          assessing three site factors that impact page speed. But why should
          this matter to you? Because Google is integrating Core Web Vitals
          into its search algorithm, which means these metrics can play a role
          in how the world's largest search engine ranks your site.
        </p>

        <p>
          At Wix, we work to constantly update our software and improve our
          infrastructure to make our users' sites load and operate as quickly
          as possible. However, there are a lot of other factors that
          contribute to a site’s performance like apps, design features and
          media, which is where you can make an impact.
        </p>

        <p>
          In this article we’ll walk you through various components that
          impact your site’s performance so you can stay ahead of the curve as
          Core Web Vitals become a new performance measurement standard.
        </p>
      </div>

      <div className="optimization-services">
        <h2>Our Optimization Services</h2>
        <ul>
          <li>⚡ Speed Optimization</li>
          <li>🖼️ Image Compression</li>
          <li>📱 Mobile Responsiveness</li>
          <li>📊 Core Web Vitals Improvement</li>
        </ul>
      </div>
    </>
  );
};

export default WebsiteOptimization;
