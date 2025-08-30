import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Awerness from "../../../assets/Awerness.png";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import icon6 from "../../../assets/icon6.png";
import ConsultantImg from "../../../assets/cal-img.png";
import "./ContentMarketing.css";

const ContentMarketing = () => {
  return (
    <>
      {/* Banner Image */}
      <div className="banner">
        <img
          src={Awerness}
          alt="Content Marketing Banner"
          className="banner-img img-fluid"
        />
      </div>

      {/* Awareness Section */}
      <div className="awareness-section">
        <h2>Build Awareness, Leads & Relevant Traffic</h2>
        <p>
          Content Marketing is an important factor of digital marketing. It is a
          marketing strategy used to attract, engage and retain an audience by
          creating and sharing relevant articles, videos, podcasts and other
          media.
        </p>
        <p>
          Content plays an indispensable role in helping your business to reach
          the potential audience and convert them. It is regarded as a powerful
          tool in order to engage your audience. As the top content marketing
          agency, we offer content marketing services in India which help the
          businesses in engaging, attracting and converting.
        </p>

        <div className="consult-merge">
          {/* Left Section */}
          <div className="proposal-box">
            <h3>Get a free consultation for your project</h3>
            <a href="http://localhost:5173/contact">
              <button className="proposal-btn">Request Free Proposal</button>
            </a>
          </div>

          {/* Right Section */}
          <div className="top-section">
            <h2>Content is king</h2>
            <p>
              The content, you have in your website speaks volumes about your
              business. Since years, it is believed that content is king and the
              fact holds good till now. You can deliver any message to your
              audience by choosing professional content marketing from us.{" "}
              <b>CodRexa</b> is the leading content marketing agency in India.
              Talk to a content marketing expert now.
            </p>

            <div className="contact-info">
              <p>
                <FaWhatsapp className="icon" /> WhatsApp Chat <br />
                <span>+91 98293 21136</span>
              </p>
              <p>
                <FaEnvelope className="icon" /> Email <br />
                <span>info@codrexa.co.in</span>
              </p>
              <p>
                📍 Address <br />
                <span>Samastipur, Jaipur</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="results-section">
        <h4>WE GET RESULTS</h4>
        <h2>As Stated Below, Your Success is Our Top Priority</h2>
        <p>
          Our experience has shown that stronger content performance is achieved
          when buyer personas are part of the content strategy.
        </p>
      </div>

      {/* Business Growth Section */}
      <section className="growth-section">
        <div className="growth-grid">
          {/* Row 1 (Heading + 1 card) */}
          <div className="row-1">
            <div className="text-block">
              <h2>
                Boost Your Business Growth with the Magic of Content Marketing!
              </h2>
              <p>
                Content marketing has various roles to play in growing a
                business. The role of a{" "}
                <strong>professional content marketing company</strong> mainly
                consists of 3 phases.
              </p>
            </div>

            <div className="growth-card">
              <div className="icon">📝</div>
              <h3>Quality Content Creation</h3>
              <p>
                We focused on quality content creation that will help you grow
                your business. While we create quality content and well updated
                data with required information for target audience. The content
                should include what the customer wants the reader to know.
              </p>
              <span className="card-number">01</span>
            </div>
          </div>

          {/* Row 2 (2 cards side by side) */}
          <div className="row-2">
            <div className="growth-card">
              <div className="icon">📦</div>
              <h3>Content Delivery</h3>
              <p>
                The important process in content marketing is that the content
                created should reach the maximum audience. If this is not
                happening then do not use the created content. Content
                distribution is usually done through social media, search
                engines, and utility sites.
              </p>
              <span className="card-number">02</span>
            </div>

            <div className="growth-card">
              <div className="icon">📊</div>
              <h3>Statistics</h3>
              <p>
                Taking care of statistics is another important role of a content
                marketing service provider. It is important to make sure that
                the analytic are high. Weekly or monthly reports should be kept
                in track by the agency (<b>CodRexa</b>) to compare how the
                content marketing process is going.
              </p>
              <span className="card-number">03</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-marketing-section">
        <div className="section-header">
          <h2>
            Content Marketing Strategies for Brand Awareness and Business Growth!
          </h2>
          <p>
            Whenever a new product or service is launched, initially people are
            not aware of it and neither do they believe in that brand.
            Therefore, through content marketing, awareness about the brand's
            product and service is spread among the people. We Provide You
            Result Driven Content Marketing Services - Grow Your Online
            Business: See Content Marketing List Below
          </p>
        </div>

        <div className="cards-container">
          {/* CARD 1 */}
          <div className="card-box">
            <div className="icon-circle">
              <img src={icon2} alt="icon" />
            </div>
            <div className="card-number">01</div>
            <h3>Social Media Content Marketing</h3>
            <p>
              You might be surprised to know but there are more than 4.62
              billion users all over the world and many brands interact with
              social media influencer to promote their products/services. Under
              content marketing, content is published and shared in the form of
              Instagram, Facebook, Pinterest, Instagram story, post, reel,
              YouTube shorts, videos, photos etc.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="card-box">
            <div className="icon-circle">
              <img src={icon3} alt="icon" />
            </div>
            <div className="card-number">02</div>
            <h3>Info-graphic Content Marketing</h3>
            <p>
              Info-graphics are a very good way of giving information about any
              content. In Infographic, any information is presented in an
              attractive form about the product / service in pictures, text,
              short description and other ways so that the user can understand
              it easily.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="card-box">
            <div className="icon-circle">
              <img src={icon4} alt="icon" />
            </div>
            <div className="card-number">03</div>
            <h3>Blog Content Marketing</h3>
            <p>
              Blog is a very powerful way to reach any product / service to the
              audience because in a blog first the information about the product
              / service is given and secondly through the blog itself the
              product is promoted through social media buttons and internal and
              external links.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="card-box">
            <div className="icon-circle">
              <img src={icon1} alt="icon" />
            </div>
            <div className="card-number">04</div>
            <h3>Video Content Marketing</h3>
            <p>
              Video content marketing is considered to be the best among all the
              other methods because through videos one can connect with the
              audience very quickly and build a good relationship with them. The
              best example of video content marketing is YouTube.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="card-box">
            <div className="icon-circle">
              <img src={icon5} alt="icon" />
            </div>
            <div className="card-number">05</div>
            <h3>Audio Content Marketing</h3>
            <p>
              When any valuable content is delivered to the people through the
              medium of audio, then it is considered a part of audio content
              marketing. Nowadays many podcast applications have come in which
              many audio books are available to listen.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="card-box">
            <div className="icon-circle">
              <img src={icon6} alt="icon" />
            </div>
            <div className="card-number">06</div>
            <h3>Web pages Content Marketing</h3>
            <p>
              You must have seen many web pages on the internet where you get
              many types of information, but a content marketing web page is
              quite different. Every aspect of it is well explained, in which
              SEO has a very big role.
            </p>
          </div>
        </div>
      </section>

      <div className="benefits-grid">
        {/* Left Text */}
        <div className="benefits-text">
          <h2>Benefits of Content Marketing Service</h2>
          <p>Here is a list of various benefits of content marketing services</p>
        </div>

        {/* Card 1 */}
        <div className="benefit-card card1">
          <div className="card-icon">🔻</div>
          <h3>Fast and easy lead conversion</h3>
          <p>
            At <b>CodRexa</b>, we offer high-quality content marketing services
            that help potential buyers make up their mind at a faster pace. You
            will see an increase in business lead conversion by choosing our
            content marketing services. We have earned a high reputation in
            adopting effective content marketing strategies that help increase
            conversions.
          </p>
          <div className="card-number">01</div>
        </div>

        {/* Card 2 */}
        <div className="benefit-card card2">
          <div className="card-icon">📄</div>
          <h3>Better brand authority</h3>
          <p>
            In the era of globalization, content marketing plays an essential
            role in enhancing the brand authority of the business. While
            different businesses are choosing different mediums to attract the
            attention of the audience, we offer content marketing services,
            which play a vital role in increasing the brand authority of the
            business.
          </p>
          <div className="card-number">02</div>
        </div>

        {/* Card 3 */}
        <div className="benefit-card card3">
          <div className="card-icon">💬</div>
          <h3>Improve customer relations</h3>
          <p>
            Customer relations have gained high popularity in the digital age as
            a wide assortment of people rely on their opinions to make
            purchasing decisions. Material is an important choice to meet the
            needs of the consumers. With our content marketing services, clients
            can get a supreme experience.
          </p>
          <div className="card-number">03</div>
        </div>
      </div>

      {/* consultant container */}
      <div className="consultant-container">
        <div className="consultant-card">
          <div className="consultant-left">
            <img src={ConsultantImg} alt="Consultant" />
          </div>
          <div className="consultant-right">
            <h2>
              Want To Boost Your Business with Superior <br /> Content Marketing
            </h2>
            <a href="http://localhost:5173/contact">
              <button className="consultant-btn">
                <i className="fa fa-whatsapp"> </i> Talk with Consultant
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentMarketing;
