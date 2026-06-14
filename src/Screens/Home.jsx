import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Component/Header';
import MobileDatingApp from '../Asset/Images/MobileDatingApp.png';
import BannerOne from '../Asset/Images/bannerone.png';
import DatingAppDevService from '../Asset/Images/datingappdeveservice.gif';
import './Home.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import phone from '../Asset/Images/phone.png';
import Admin from '../Component/Admin';
import DatingBg from '../Component/DatingBg';
import userapp from '../Asset/Images/userapp.gif';
import growingimg from '../Asset/Images/growingimg.svg';
import growinglaptop from '../Asset/Images/growinglaptop.svg';
import cloud from '../Asset/Images/cloud.svg';
import TimeGrowing from '../Asset/Images/TimeGrowing.svg';
import ourdatingapp from '../Asset/Images/ourdatingapp.gif';
import writingpage from '../Asset/Images/writingpage.png';
import arrowask from '../Asset/Images/arrowask.svg'
import perfectdating from '../Asset/Images/perfectdating.gif'
const designCards = [
  {
    id: 1,
    tag: 'Premium UI',
    title: 'Swipe & Match Experience',
    description: 'Clean onboarding, seamless swipe actions, and strong visual hierarchy for dating users.',
    image: perfectdating,
    labels: ['Swipe UI', 'Modern'],
  },
  {
    id: 2,
    tag: 'UX Focused',
    title: 'Profile Discovery Flow',
    description: 'A refined discovery layout that highlights key profile details with elegant spacing and clarity.',
    image: BannerOne,
    labels: ['Profile UI', 'Engaging'],
  },
  {
    id: 3,
    tag: 'Brand Friendly',
    title: 'Engaging Match Notifications',
    description: 'Bright interaction cues and CTA accents that make user actions feel fast, clear, and polished.',
    image: perfectdating,
    labels: ['Notifications', 'Vibrant'],
  },
  {
    id: 4,
    tag: 'High Conversion',
    title: 'Smart Match Suggestions',
    description: 'Personalized match cards with subtle motion and premium visuals to keep users engaged.',
    image: BannerOne,
    labels: ['Match Flow', 'Retention'],
  },
   {
    id: 5,
    tag: 'High Conversion',
    title: 'Smart Match Suggestions',
    description: 'Personalized match cards with subtle motion and premium visuals to keep users engaged.',
    image: BannerOne,
    labels: ['Match Flow', 'Retention'],
  },
  {
    id: 6,
    tag: 'High Conversion',
    title: 'Smart Match Suggestions',
    description: 'Personalized match cards with subtle motion and premium visuals to keep users engaged.',
    image: BannerOne,
    labels: ['Match Flow', 'Retention'],
  },
];

function Home() {
    const [activeImage, setActiveImage] = useState('/path-to-default-phone-image.png');
    
    const chatFeatures = [
    {
      id: 1,
      title: 'Real-time Chat',
      description: 'Instant messaging with text, voice, and media sharing capabilities.',
      image: 'https://via.placeholder.com/300x600?text=Chat+Screen',
      alignment: 'left'
    },
    {
      id: 2,
      title: 'Advanced Matching',
      description: 'AI-driven algorithm for precise and compatible matchmaking.',
      image: 'https://via.placeholder.com/300x600?text=Matching+Screen',
      alignment: 'right'
    },
    {
      id: 3,
      title: 'Video Calling',
      description: 'Secure, high-quality in-app video dates.',
      image: 'https://via.placeholder.com/300x600?text=Video+Call+Screen',
      alignment: 'left'
    },
    {
      id: 4,
      title: 'Profile Verification',
      description: 'Multi-step verification to ensure genuine connections.',
      image: 'https://via.placeholder.com/300x600?text=Verification+Screen',
      alignment: 'right'
    }
  ];

  const features = [
    { name: 'Register/Login', icon: 'bi-person-plus' },
    { name: 'Profile Listing', icon: 'bi-ui-checks' },
    { name: 'Profile Suggestion', icon: 'bi-diagram-3' },
    { name: 'Premium Subscription', icon: 'bi-gift' },
    { name: 'Match List', icon: 'bi-patch-check' },
    { name: 'Like/Dislike', icon: 'bi-hand-thumbs-up' },
    { name: 'Like History', icon: 'bi-clock-history' },
    { name: 'Geo-Location', icon: 'bi-globe-americas' },
    { name: 'Match Finding', icon: 'bi-search' },
    { name: 'Detailed Profile', icon: 'bi-person-vcard' },
  ];

  const servicesData = [
    {
      id: 1,
      title: "LGBTQ Dating App",
      description: "We are proud to create secure dating platforms for the LGBTQ+ community. Our options are tailored to meet their specific dating requirements, providing a safe space for love to be found without judgment.",
      icon: "bi-rainbow",
      iconBg: "#7a5cf1", // Purple
      lightBg: "#f5f3ff" // Very light purple
    },
    {
      id: 2,
      title: "Interest-Based Dating App",
      description: "We are experts in creating dating apps that bring together like-minded people who share similar interests, such as fitness and travel, music, or other hobbies, and are looking for genuine relationships.",
      icon: "bi-controller",
      iconBg: "#71c556", // Green
      lightBg: "#f2fcf0" // Very light green
    },
    {
      id: 3,
      title: "Polyamorous Dating App",
      description: "Our app for dating with polyamory was designed to allow users to discover the idea of loving relationships that are compatible with their lifestyles without judgment.",
      icon: "bi-diagram-3-fill",
      iconBg: "#f58c44", // Orange
      lightBg: "#fff7f0" // Very light orange
    },
     {
      id: 4,
      title: "Religion-Based Dating App",
      description: "Our experience is developing dating apps that connect people from religious communities such as Christian, Jewish, Muslim, Hindu, or any other religious belief to form lasting connections.",
      icon: "bi-moon-stars-fill",
      iconBg: "#0dcaf0", // Cyan
      lightBg: "#f0fcfd" // Very light cyan
    },
    {
      id: 5,
      title: "Intentional Dating App",
      description: "Carefully designed a dating app that lets users meet people with genuine intentions, such as those seeking a long-term relationship, casual opportunities for dating, or just making new acquaintances.",
      icon: "bi-bullseye",
      iconBg: "#e83e8c", // Pink
      lightBg: "#fdf2f7" // Very light pink
    },
    {
      id: 6,
      title: "Ethnic/Cultural Communities Dating App",
      description: "Our dating software developers are experts in the development of dating apps that promote diversity and unite people with diverse ethnic backgrounds together, including people from Asian, African, European, or other ethnicities.",
      icon: "bi-globe-americas",
      iconBg: "#20c997", // Teal
      lightBg: "#f0fdf9" // Very light teal
    },
    {
      id: 7,
      title: "Profession-Based Dating App",
      description: "Our apps for dating based on professions are designed specifically for certain specialties, such as connecting engineers, doctors, artists, musicians, or other professionals to meet people who share similar professional goals and interests.",
      icon: "bi-briefcase-fill",
      iconBg: "#6610f2", // Indigo
      lightBg: "#f4f0fd" // Very light indigo
    },
    {
      id: 8,
      title: "Age-Based Dating App",
      description: "Based on age, our dating app will help you find like-minded companions within their preferred age group and in various stages of life. It caters to Gen Z and baby boomers and even more.",
      icon: "bi-calendar2-heart-fill",
      iconBg: "#fd7e14", // Orange-Red
      lightBg: "#fff6f0" // Very light orange-red
    },
    {
      id: 9,
      title: "Android Dating App Development",
      description: "Take your way through the Android marketplace with our distinctive Android Dating App Development. Our dedicated developers design easy-to-use, feature-rich dating apps perfect for Android users.",
      icon: "bi-android2",
      iconBg: "#a4c639", // Android Green
      lightBg: "#f7fbf0" // Very light android green
    },
  ];

  const userFeatures = [
    { name: 'Register/Login', icon: 'bi-person-plus' },
    { name: 'Profile Suggestion', icon: 'bi-diagram-3' },
    { name: 'Match List', icon: 'bi-card-checklist' },
    { name: 'Like History', icon: 'bi-clock-history' },
    { name: 'Match Finding', icon: 'bi-search-heart' },
    { name: 'Profile Listing', icon: 'bi-person-lines-fill' },
    { name: 'Premium Subscription', icon: 'bi-gem' },
    { name: 'Like/Dislike', icon: 'bi-hand-thumbs-up' },
    { name: 'Geo-Location', icon: 'bi-geo-alt' },
    { name: 'Detailed Profile', icon: 'bi-person-vcard' },
  ];

  const adminFeatures = [
    { name: 'Authentication', icon: 'bi-shield-check' },
    { name: 'Push Notification', icon: 'bi-bell' },
    { name: 'Subscription Management', icon: 'bi-wallet2' },
    { name: 'Category Management', icon: 'bi-tags' },
    { name: 'Profile Management', icon: 'bi-people' },
    { name: 'One Click Dashboard', icon: 'bi-speedometer2' },
    { name: 'User Management', icon: 'bi-person-gear' },
    { name: 'Ad Management', icon: 'bi-badge-ad' },
    { name: 'Location Based Tracking', icon: 'bi-pin-map' },
    { name: 'Language Management', icon: 'bi-translate' },
  ];
  const featurescasedata = [
    { name: 'Android Dating App Development', icon: 'bi-person' },
    { name: 'iOS Dating App Development', icon: 'bi-gear' },
    { name: 'Cross-Platform Dating App Development', icon: 'bi-phone' },
    { name: 'Traditional Dating App', icon: 'bi-heart' },
    { name: 'LGBTQ dating app development', icon: 'bi-people' },
    { name: 'Custom Dating App Development', icon: 'bi-chat-square' },
    { name: 'Dating App UI/UX Design', icon: 'bi-palette' },
    { name: 'Dating App Maintenance & Support', icon: 'bi-tools' },



  ];

  const data = [
  { title: "Growing User Interest", desc: "The online dating market is expected to increase from 5.1% to 5.7% in 2024." },
  { title: "Revenue Growth", desc: "Revenue in the Online Dating market is estimated to reach US$69.90M in 2024." },
  { title: "App Downloads", desc: "Dating apps downloads with over 6.1 million monthly in 2024." },
  { title: "Time Spent", desc: "On average, people in the U.S. spend about 10-12 hours each week on these apps." }
];

  return (
    <>
   <Header/>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left Column: Text Content */}
            <div className="col-12 col-lg-6 mb-5 mb-lg-0 pe-lg-5 text-center text-lg-start">
              <h1 className="main-heading mb-3">
                Best Dating App <br className="d-none d-lg-block" /> Development Company
              </h1>
              
              <h4 className="sub-heading mb-4">
                That Craft Perfect Dating Apps
              </h4>
              
              <p className="description-text mb-4">
                We have experience developing top-quality dating apps with top-of-the-line solutions. Our apps have specific features based on the company's needs and goals. If you're looking to build a customized dating app, then Inventco will ensure a great outcome. We offer innovative and high-quality dating <a href="#mobile-app-development" className="custom-link">mobile app development</a> that meets the requirements of all users and will directly benefit your business operations.
              </p>
              
              <div className="mt-4">
                <a href="#contact" className="btn cta-btn btn-lg shadow-sm">
                  Discuss Your Project
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-12 col-lg-6 text-center">
              <img
                  src={perfectdating}
                alt="Dating App Mockups"
                className="img-fluid"
                style={{
                 width:496,
                    height: 391,
                  objectFit: 'cover',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                }}
              />
            </div>
            
          </div>
        </div>
      </section>

      <section className="design-showcase-section">
        <div className="container">
          <div className="section-header text-center mx-auto mb-5">
            <span className="section-label">Recent Work</span>
            <h2>View Our Most Recent Designs for Dating Mobile Apps</h2>
            <p className="section-description">
              Elegant, user-first mobile screens designed to maximize retention, match quality, and modern branding.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {designCards.map((card) => (
              <div key={card.id} className="col-12 col-md-6 col-xl-4">
                <article className="design-card shadow-sm rounded-4">
                  <div className="design-card-media">
                    <img src={card.image} alt={card.title} className="img-fluid" />
                  </div>
                  <div className="design-card-body p-4">
                    <span className="design-card-tag">{card.tag}</span>
                    <h3 className="design-card-title">{card.title}</h3>
                    <p>{card.description}</p>

                    <div className="badge-group mb-4">
                      {card.labels.map((label) => (
                        <span key={label} className="badge bg-white text-dark border">
                          {label}
                        </span>
                      ))}
                    </div>

                    <button className="design-card-btn" type="button">
                      View Design
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

       <div className="section-feature text-center mx-auto mt-5">
            <h2>Must Have Features for Online Dating <br/> Application Development</h2>
            <p className="section-description">
              Elegant, user-first mobile screens designed to maximize retention, match quality, and modern branding.
            </p>
          </div>

      <section className="user-panel-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side: Mockup Image */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-center position-relative">
            <div className="mockup-container">
              <div className="pink-backdrop"></div>
                 <img 
                src={userapp} 
                alt="App Interface Mockups" 
                className="img-fluid mockup-image" 
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Right Side: Content and Feature Grid */}
          <div className="col-lg-6 px-lg-5">
            <h2 className="fw-bold mb-3 panel-title">User Panel</h2>
            <p className="text-muted mb-5 panel-description">
              The panel lets users browse, swipe, and connect with like-minded individuals. Our advanced algorithms suggest compatible connections for dating and chat app development.
            </p>

            <div className="row gy-4">
              {features.map((feature, index) => (
                <div className="col-md-6 col-12 d-flex align-items-center" key={index}>
                  <div className="feature-icon-wrapper me-3">
                    <i className={`bi ${feature.icon} feature-icon`}></i>
                  </div>
                  <span className="feature-text">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    <Admin/>

    <section className="services-section py-5">
      <div className="container py-4">
        
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <h1 className="services-title fw-bold mb-4">
              Dating App Development Services We Offer
            </h1>
            <p className="services-subtitle text-muted">
              Inventco provides top-of-the-line online dating app development services backed by cutting-edge technology. Our team is highly skilled in creating feature-rich, high-performance dating apps that deliver the most advanced online dating experience.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row g-4">
          {servicesData.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              
              {/* Applying the light background color permanently to the card */}
              <div 
                className="service-card d-flex flex-column"
                style={{ backgroundColor: service.lightBg }}
              >
                
                {/* Custom Icon Box */}
                <div 
                  className="service-icon-box mb-4 shadow-sm" 
                  style={{ backgroundColor: service.iconBg }}
                >
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h4 className="service-card-title fw-bold mb-3">{service.title}</h4>
                <p className="service-card-text text-muted flex-grow-1">
                  {service.description}
                </p>

                {/* Hidden Button that reveals on hover */}
                <div className="service-btn-container mt-4">
                  <button 
                    className="btn rounded-pill px-4 py-2 fw-semibold service-btn"
                    style={{ color: '#fff', backgroundColor: service.iconBg }}
                  >
                    Explore Service <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
     
    <DatingBg/>

       <section className="user-panel-section py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side: Mockup Image */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-center position-relative">
            <div className="mockup-container">
              <div className="pink-backdrop"></div>
              <img 
                src={DatingAppDevService} 
                alt="App Interface Mockups" 
                className="img-fluid mockup-image" 
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Right Side: Content and Feature Grid */}
          <div className="col-lg-6 px-lg-3">
            <h2 className="fw-bold mb-3 panel-head">Your Dream Dating App, Created for Every Platform</h2>
            <p className="text-muted mb-5 panel-desc">
              We provide a full range of dating app development services, using the most advanced technology and expert knowledge to build user-friendly and captivating Android, iOS, and cross-platform dating applications. Inventco provides the best online dating app development solutions, aiming to create top-quality dating apps and solutions that allow users to interact and connect.
            </p>

            <div className="row gy-4">
              {featurescasedata.map((feature, index) => (
                <div className="col-md-6 col-12 d-flex align-items-center" key={index}>
                  <div className="feature-icon-wrapper me-3">
                    <i className={`bi ${feature.icon} feature-icon`}></i>
                  </div>
                  <span className="feature-text">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
<div className="container py-5 why-build-section">
      <h1 className="text-center fw-bold mb-5 section-title">Why Build A Dating App?</h1>

      <div className="row g-4 align-items-stretch justify-content-center pt-4">
        
        {/* Column 1 */}
        <div className="col-lg-3 col-md-6 col-12 d-flex flex-column item-col">
          <div className="info-box top-box d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Growing<br/>Users<br/>Interest</h5>
            <img src={growingimg} alt="Growing Interest" className="box-icon" />
          </div>
          <div className="text-content bottom-text">
            <p className="mt-5">
              The online dating market<br/>
              is expected to increase<br/>
              <span className="fw-bold text-dark">from 5.1% to 5.7% in 2024.</span>
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-lg-3 col-md-6 col-12 d-flex flex-column item-col reverse-on-mobile">
          <div className="text-content top-text d-flex align-items-end">
            <p className="m-0">
              Revenue in the Online<br/>
              Dating market is<br/>
              estimated to <span className="fw-bold text-dark">reach<br/>
              US$69.90m in 2024.</span>
            </p>
          </div>
          <div className="info-box bottom-box d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Growth<br/>Rate In<br/>Online<br/>Dating<br/>Market</h5>
            <img src={growinglaptop} alt="Growth Rate" className="box-icon" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-lg-3 col-md-6 col-12 d-flex flex-column item-col">
          <div className="info-box top-box d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Dating App<br/>Downloads</h5>
            <img src={cloud} alt="Downloads" className="box-icon" />
          </div>
          <div className="text-content bottom-text">
            <p className="m-0">
              Dating apps downloads<br/>
              with <span className="fw-bold text-dark">over 6.1 million<br/>
              monthly in 2024.</span>
            </p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="col-lg-3 col-md-6 col-12 d-flex flex-column item-col reverse-on-mobile">
          <div className="text-content top-text d-flex align-items-end">
            <p className="m-0">
              On average, people in the<br/>
              U.S. spend about <span className="fw-bold text-dark">10-12<br/>
              hours each week,</span> those<br/>
              aged <span className="fw-bold text-dark">18-34,</span> on these apps.
            </p>
          </div>
          <div className="info-box bottom-box d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Time<br/>Spend By<br/>Users</h5>
            <img src={TimeGrowing} alt="Time Spend" className="box-icon" />
          </div>
        </div>

      </div>
    </div>
    <div></div>
    <div className="containersolution">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-7 col-md-12 text-md-center text-lg-start ps-lg-5">
            <h1 className="title">Our Dating App<br />Development Solutions</h1>
            <p className="paragraph">
              Inventco is a leading dating app development company that specializes in building feature-rich, secure, and robust dating apps with advanced matchmaking algorithms. Whether you have a unique concept or want to create a replica app, our dating app development services ensure maximum return on investment.
            </p>

            {/* Feature List Grid */}
            <div className="feature-grid">
              <div className="row">
                {[
                  { text: 'Custom Matchmaking Algorithms', icon: 'bi-diagram-3' },
                  { text: 'Date Planner', icon: 'bi-calendar-check' },
                  { text: 'Advanced Search', icon: 'bi-search' },
                  { text: 'Voice Chat', icon: 'bi-chat-dots' },
                  { text: 'Audio and Video Calling', icon: 'bi-camera-video' },
                  { text: 'Multiple Photos/Videos Upload', icon: 'bi-cloud-arrow-up' },
                  { text: 'Profile Verification', icon: 'bi-person-check' },
                  { text: 'Push Notifications', icon: 'bi-bell' },
                ].map((feature, index) => (
                  <div key={index} className="col-md-6 col-sm-12 feature-item ps-3">
                    <i className={`bi ${feature.icon} feature-icon`} aria-hidden="true"></i>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Illustration placeholder */}
          <div className="col-lg-5 col-md-12 text-center mt-lg-0 mt-md-4 mt-sm-4">
       
            <img 
              src={ourdatingapp}
              alt="Detailed illustration of two hands holding phones with characters and heart outlines" 
              className="img-fluid" 
              style={{ maxWidth: '370px', width: '100%', margin: '0 auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
  
      <section className="cost-banner-wrapper">
      <div className="container h-100">
        <div className="row align-items-center h-100 position-relative z-index-1">
          
          {/* Left Image Section */}
          <div className="col-lg-3 col-md-4 col-12 text-center text-md-start mb-4 mb-md-0 pl-md-0">
            {/* Apni left wali image ka variable yahan 'src' mein daalein */}
            <img 
              src={writingpage} // Change this to your imported image
              alt="Cost Calculation" 
              className="img-fluid calc-image" 
            />
          </div>

          {/* Text Content Section */}
          <div className="col-lg-6 col-md-8 col-12 text-center text-md-start">
            <h2 className="cost-title">
              How Much Does Dating App<br className="d-none d-md-block" /> Development Cost?
            </h2>
            <p className="cost-desc">
              Contact us for a free consultation and a personalized quote to build your<br className="d-none d-lg-block"/> mobile app—just like Tinder, Bumble, or Raya.
            </p>
            <button className="btn quote-btn">
              Ask For Free Quote 
              <span className="arrow-circle">
              <img src={arrowask} alt='rightarrow'/>
                 {/* <i className="fas fa-chevron-right" style={{ fontSize: '12px' }}>&gt;</i> */}
              </span>
            </button>
          </div>
          
          {/* Right Space: Yeh col khali chhoda hai taaki aapki 
              background image ka phone wala hath clear dikhe */}
          <div className="col-lg-3 d-none d-lg-block"></div>

        </div>
      </div>
      
      {/* Background overlay if needed for text clarity, remove if your bg is already dark enough */}
      {/* <div className="dark-overlay"></div> */}
    </section>
     

     
    
    

    </>
  );
}

export default Home;