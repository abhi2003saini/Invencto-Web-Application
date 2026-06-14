// // import React, { useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Carousel } from "bootstrap";
// // import "./Header.css";

// // const heroSlides = [
// //   {
// //     id: 1,
// //     title: "Dating App Development Company",
// //     description:
// //       "As a top online dating application development company, we specialize in developing adaptable dating apps for Android and iOS platforms. Our feature-rich custom dating app development solutions are created to help people connect with their ideal partners.",
// //     buttonText: "Get Started",
// //     image:
// //       "https://www.inventcolabssoftware.com/img/banner-img.webp",
// //   },
// //   {
// //     id: 2,
// //     title: "Build Secure Matchmaking Experiences",
// //     description:
// //       "Launch a high-performing dating app with powerful features like profiles, matching algorithms, chat, and safety controls that scale with your business.",
// //     buttonText: "Talk to Us",
// //     image:
// //       "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1920",
// //   },
// //   {
// //     id: 3,
// //     title: "Custom Dating Apps for Web and Mobile",
// //     description:
// //       "Create a seamless cross-platform dating experience backed by modern UI, real-time communication, and analytics to grow engagement fast.",
// //     buttonText: "See Our Work",
// //     image:
// //       "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?q=80&w=1920",
// //   },
// // ];

// // function Header() {
// //   useEffect(() => {
// //     const element = document.getElementById("heroCarousel");
// //     if (element) {
// //       const carouselInstance = new Carousel(element, {
// //         interval: 3000,
// //         ride: "carousel",
// //         pause: false,
// //       });
// //       return () => carouselInstance.dispose();
// //     }
// //     return undefined;
// //   }, []);

// //   return (
// //     <>
// //       {/* Top Bar */}
// //       <div className="top-bar">
// //         <div className="container-fluid">
// //         <div className="d-flex justify-content-end align-items-center gap-5 py-3 pe-4">
// //   <div className="phone-box">
// //     <img src="https://flagcdn.com/16x12/us.png" alt="USA Flag" />
// //   <span className="text-black fw-normal " style={{fontfamily: "Montserrat", fontSize: "15px"}}>
// //   +1-646-917-8081
// // </span>
// //   </div>

// //   <div className="phone-box">
// //     <img src="https://flagcdn.com/16x12/in.png" alt="India Flag" />
// //     <span> +91-94600-42348</span>
// //   </div>
// // </div>
// //         </div>
// //       </div>

// //       {/* Navbar */}
// //       <nav className="navbar navbar-expand-lg custom-navbar">
// //         <div className="container-fluid px-4">

// //           <a href="/" className="navbar-brand logo" aria-label="Inventco Home">
// //             <img
// //               src="https://www.inventcolabssoftware.com/img/logo.svg"
// //               alt="Inventco logo"
// //               className="logo-img"
// //             />
// //           </a>

// //           <button
// //             className="navbar-toggler"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarNav"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>

// //           <div
// //             className="collapse navbar-collapse justify-content-center"
// //             id="navbarNav"
// //           >
// //             <ul className="navbar-nav gap-4">
// //               <li className="nav-item">
// //                 <a className="nav-link active" href="/">
// //                   Home
// //                 </a>
// //               </li>

// //               <li className="nav-item dropdown">
// //                 <a
// //                   className="nav-link dropdown-toggle"
// //                   href="/"
// //                   data-bs-toggle="dropdown"
// //                 >
// //                   Services
// //                 </a>
// //               </li>

// //               <li className="nav-item dropdown">
// //                 <a
// //                   className="nav-link dropdown-toggle"
// //                   href="/"
// //                   data-bs-toggle="dropdown"
// //                 >
// //                   Solutions
// //                 </a>
// //               </li>

// //               <li className="nav-item dropdown">
// //                 <a
// //                   className="nav-link dropdown-toggle"
// //                   href="/"
// //                   data-bs-toggle="dropdown"
// //                 >
// //                   About Us
// //                 </a>
// //               </li>

// //               <li className="nav-item dropdown">
// //                 <a
// //                   className="nav-link dropdown-toggle"
// //                   href="/"
// //                   data-bs-toggle="dropdown"
// //                 >
// //                   Hire a Team
// //                 </a>
// //               </li>

// //               <li className="nav-item">
// //                 <a className="nav-link" href="/">
// //                   Portfolio
// //                 </a>
// //               </li>

// //               <li className="nav-item">
// //                 <a className="nav-link" href="/">
// //                   Blog
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>

// //           <button className="quote-btn">
// //             Get Free Quote
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Hero Carousel */}
// //       <section className="hero-carousel">
// //         <div
// //           id="heroCarousel"
// //           className="carousel slide"
// //           data-bs-ride="carousel"
// //           data-bs-interval="5000"
// //           data-bs-pause="false"
// //         >
// //           <div className="carousel-inner">
// //             {heroSlides.map((slide, index) => (
// //               <div
// //                 key={slide.id}
// //                 className={`carousel-item ${index === 0 ? "active" : ""}`}
// //               >
// //                 <div
// //                   className="hero-slide"
// //                   style={{ backgroundImage: `url(${slide.image})` }}
// //                 >
// //                   <div className="overlay"></div>

// //                   <div className="container hero-content text-center">
// //                     <h1>{slide.title}</h1>

// //                     <p>{slide.description}</p>

// //                     <button className="start-btn">
// //                       {slide.buttonText}
// //                     </button>
// //                   </div>

               
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

        
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // export default Header;


// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "bootstrap";
// import "./Header.css";

// const heroSlides = [
//   {
//     id: 1,
//     title: "Dating App Development Company",
//     description:
//       "As a top online dating application development company, we specialize in developing adaptable dating apps for Android and iOS platforms. Our feature-rich custom dating app development solutions are created to help people connect with their ideal partners.",
//     buttonText: "Get Started",
//     image:
//       "https://www.inventcolabssoftware.com/img/banner-img.webp",
//   },
//   {
//     id: 2,
//     title: "Build Secure Matchmaking Experiences",
//     description:
//       "Launch a high-performing dating app with powerful features like profiles, matching algorithms, chat, and safety controls that scale with your business.",
//     buttonText: "Talk to Us",
//     image:
//       "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1920",
//   },
//   {
//     id: 3,
//     title: "Custom Dating Apps for Web and Mobile",
//     description:
//       "Create a seamless cross-platform dating experience backed by modern UI, real-time communication, and analytics to grow engagement fast.",
//     buttonText: "See Our Work",
//     image:
//       "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d6?q=80&w=1920",
//   },
// ];

// function Header() {
//   useEffect(() => {
//     const element = document.getElementById("heroCarousel");
//     if (element) {
//       const carouselInstance = new Carousel(element, {
//         interval: 3000,
//         ride: "carousel",
//         pause: false,
//       });
//       return () => carouselInstance.dispose();
//     }
//     return undefined;
//   }, []);

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="top-bar">
//         <div className="container-fluid">
//         <div className="d-flex justify-content-end align-items-center gap-5 py-3 pe-4">
//   <div className="phone-box">
//     <img src="https://flagcdn.com/16x12/us.png" alt="USA Flag" />
//   <span className="text-black fw-normal " style={{fontfamily: "Montserrat", fontSize: "15px"}}>
//   +1-646-917-8081
// </span>
//   </div>

//   <div className="phone-box">
//     <img src="https://flagcdn.com/16x12/in.png" alt="India Flag" />
//     <span> +91-94600-42348</span>
//   </div>
// </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg custom-navbar">
//         <div className="container-fluid px-4">

//           <a href="/" className="navbar-brand logo" aria-label="Inventco Home">
//             <img
//               src="https://www.inventcolabssoftware.com/img/logo.svg"
//               alt="Inventco logo"
//               className="logo-img"
//             />
//           </a>

//           <button
//             className="navbar-toggler"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className="collapse navbar-collapse justify-content-center"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav gap-4">
//               <li className="nav-item">
//                 <a className="nav-link active" href="/">
//                   Home
//                 </a>
//               </li>

//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="/"
//                   data-bs-toggle="dropdown"
//                 >
//                   Services
//                 </a>
//                 <div className="dropdown-menu p-3 services-dropdown">
//                   <div className="row">
//                     <div className="col-md-3">
//                       <h6 className="dropdown-header">Mobile App Development</h6>
//                       <a className="dropdown-item" href="#">Android</a>
//                       <a className="dropdown-item" href="#">iPhone</a>
//                       <a className="dropdown-item" href="#">Shopify App Development</a>
//                       <a className="dropdown-item" href="#">Flutterflow Development</a>
//                     </div>
//                     <div className="col-md-3">
//                       <h6 className="dropdown-header">Web Development</h6>
//                       <a className="dropdown-item" href="#">Full Stack Development</a>
//                       <a className="dropdown-item" href="#">Mean Stack Development</a>
//                       <a className="dropdown-item" href="#">PHP Web Development</a>
//                       <a className="dropdown-item" href="#">ASP.Net Development</a>
//                       <a className="dropdown-item" href="#">AngularJS Web Development</a>
//                       <a className="dropdown-item" href="#">ReactJS Development</a>
//                       <a className="dropdown-item" href="#">NodeJS Development</a>
//                       <a className="dropdown-item" href="#">Symfony Development</a>
//                       <a className="dropdown-item" href="#">UI/UX Design Agency</a>
//                     </div>
//                     <div className="col-md-3">
//                       <h6 className="dropdown-header">Cross Platform Development</h6>
//                       <a className="dropdown-item" href="#">React Native</a>
//                       <a className="dropdown-item" href="#">Flutter</a>
//                       <a className="dropdown-item" href="#">Ionic</a>
//                     </div>
//                     <div className="col-md-3">
//                       <h6 className="dropdown-header">Trending Technologies</h6>
//                       <a className="dropdown-item" href="#">Artificial Intelligence</a>
//                       <a className="dropdown-item" href="#">IoT App Development</a>
//                       <a className="dropdown-item" href="#">Cloud Computing Solutions</a>
//                       <a className="dropdown-item" href="#">Wearable App Development</a>
//                       <a className="dropdown-item" href="#">Blockchain Application Development</a>
//                       <a className="dropdown-item" href="#">Cryptocurrency App Development</a>
//                       <a className="dropdown-item" href="#">ICO Development Company</a>
//                       <a className="dropdown-item" href="#">Salesforce Development Company</a>
//                       <a className="dropdown-item" href="#">Digital Marketing Agency</a>
//                     </div>
//                   </div>
//                 </div>
//               </li>

//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="/"
//                   data-bs-toggle="dropdown"
//                 >
//                   Solutions
//                 </a>
//                 <div className="dropdown-menu">
//                   <a className="dropdown-item" href="#">Enterprise Solutions</a>
//                   <a className="dropdown-item" href="#">Startup Solutions</a>
//                   <a className="dropdown-item" href="#">Custom Software Development</a>
//                   <a className="dropdown-item" href="#">Product Engineering</a>
//                 </div>
//               </li>

//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="/"
//                   data-bs-toggle="dropdown"
//                 >
//                   About Us
//                 </a>
//                 <div className="dropdown-menu">
//                   <a className="dropdown-item" href="#">Our Story</a>
//                   <a className="dropdown-item" href="#">Leadership Team</a>
//                   <a className="dropdown-item" href="#">Careers</a>
//                   <a className="dropdown-item" href="#">Culture & Values</a>
//                 </div>
//               </li>

//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="/"
//                   data-bs-toggle="dropdown"
//                 >
//                   Hire a Team
//                 </a>
//                 <div className="dropdown-menu">
//                   <a className="dropdown-item" href="#">Hire Developers</a>
//                   <a className="dropdown-item" href="#">Hire Designers</a>
//                   <a className="dropdown-item" href="#">Dedicated Team Model</a>
//                   <a className="dropdown-item" href="#">Staff Augmentation</a>
//                 </div>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Portfolio
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <button className="quote-btn">
//             Get Free Quote
//           </button>
//         </div>
//       </nav>

//       {/* Hero Carousel */}
//       <section className="hero-carousel">
//         <div
//           id="heroCarousel"
//           className="carousel slide"
//           data-bs-ride="carousel"
//           data-bs-interval="5000"
//           data-bs-pause="false"
//         >
//           <div className="carousel-inner">
//             {heroSlides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`carousel-item ${index === 0 ? "active" : ""}`}
//               >
//                 <div
//                   className="hero-slide"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 >
//                   <div className="overlay"></div>

//                   <div className="container hero-content text-center">
//                     <h1>{slide.title}</h1>

//                     <p>{slide.description}</p>

//                     <button className="start-btn">
//                       {slide.buttonText}
//                     </button>
//                   </div>

               
//                 </div>
//               </div>
//             ))}
//           </div>

        
//         </div>
//       </section>
//     </>
//   );
// }

// export default Header;



import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import "./Header.css";

const heroSlides = [
  {
    id: 1,
    title: "Dating App Development Company",
    description:
      "As a top online dating application development company, we specialize in developing adaptable dating apps for Android and iOS platforms. Our feature-rich custom dating app development solutions are created to help people connect with their ideal partners.",
    buttonText: "Get Started",
    image: "https://www.inventcolabssoftware.com/img/banner-img.webp",
  },
 {
    id: 2,
    title: "Build Secure Matchmaking Experiences",
    description:
      "Launch a high-performing dating app with powerful features like profiles, matching algorithms, chat, and safety controls that scale with your business.",
    buttonText: "Talk to Us",
    // Image: Cyber security / lock concept for "Secure" theme
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 3,
    title: "Custom Dating Apps for Web and Mobile",
    description:
      "Create a seamless cross-platform dating experience backed by modern UI, real-time communication, and analytics to grow engagement fast.",
    buttonText: "See Our Work",
    // Image: Hands holding a smartphone over a laptop, showing cross-platform dev
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1920",
  },
];

function Header() {
  const navRef = useRef(null);
  const topBarRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById("heroCarousel");
    if (element) {
      const carouselInstance = new Carousel(element, {
        interval: 3000,
        ride: "carousel",
        pause: false,
      });
      return () => carouselInstance.dispose();
    }
    return undefined;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navEl = navRef.current;
      const topBarEl = topBarRef.current;
      if (!navEl || !topBarEl) return;
      if (window.scrollY > 40) {
        navEl.classList.add("scrolled");
        topBarEl.classList.add("scrolled");
      } else {
        navEl.classList.remove("scrolled");
        topBarEl.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div ref={topBarRef} className="top-bar">
        <div className="container-fluid">
          <div className="d-flex justify-content-end align-items-center gap-5 py-3 pe-4">
            <div className="phone-box">
              <img src="https://flagcdn.com/16x12/us.png" alt="USA Flag" />
              <span
                className="fw-normal"
                style={{ fontFamily: "Montserrat", fontSize: "15px" }}
              >
                +1-646-917-8081
              </span>
            </div>

            <div className="phone-box">
              <img src="https://flagcdn.com/16x12/in.png" alt="India Flag" />
              <span className="fw-normal"> +91-94600-42348</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav ref={navRef} className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid px-4">
          <a href="/" className="navbar-brand logo" aria-label="Inventco Home">
            <img
              src="https://www.inventcolabssoftware.com/img/logo.svg"
              alt="Inventco logo"
              className="logo-img"
            />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              {/* Enhanced Mega Menu Dropdown */}
              <li className="nav-item dropdown mega-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu mega-menu-wrapper">
                  <div className="container-fluid p-0">
                    <div className="row g-4">
                      {/* Left Information Column */}
                      <div className="col-md-4 pe-lg-4">
                        <h2 className="mega-title">Services</h2>
                        <p className="mega-desc">
                          Full-spectrum IT services served by a host of
                          trending technologies and resources. Crafting
                          engaging web identities, mobile-first products,
                          dynamic scripting interfaces, and rich internet
                          applications across all major operating formats
                          and tech platforms.
                        </p>
                        <button className="menu-start-btn">Get Started</button>
                      </div>

                      {/* Middle Column */}
                      <div className="col-md-4">
                        <div className="mega-list-section">
                          <h6 className="mega-heading">Mobile App Development</h6>
                          <div className="mega-links">
                            <a href="/">Android</a>
                            <a href="/">iPhone</a>
                            <a href="/">Shopify App Development</a>
                            <a href="/">Flutterflow Development</a>
                          </div>
                        </div>

                        <div className="mega-list-section mt-4">
                          <h6 className="mega-heading">Web Development</h6>
                          <div className="mega-links">
                            <a href="/">Full Stack Development</a>
                            <a href="/">Mean Stack Development</a>
                            <a href="/">PHP Web Development</a>
                            <a href="/">ASP.Net Development</a>
                            <a href="/">AngularJS Web Development</a>
                            <a href="/">ReactJS Development</a>
                            <a href="/">NodeJS Development</a>
                            <a href="/">Symfony Development</a>
                            <a href="/">UI/UX Design Agency</a>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="col-md-4">
                        <div className="mega-list-section">
                          <h6 className="mega-heading">
                            Cross Platform Development
                          </h6>
                          <div className="mega-links">
                            <a href="/">React Native</a>
                            <a href="/">Flutter</a>
                            <a href="/">Ionic</a>
                          </div>
                        </div>

                        <div className="mega-list-section mt-4">
                          <h6 className="mega-heading">
                            Trending Technologies
                          </h6>
                          <div className="mega-links">
                            <a href="/">Artificial Intelligence</a>
                            <a href="/">IoT App Development</a>
                            <a href="/">Cloud Computing Solutions</a>
                            <a href="/">Wearable App Development</a>
                            <a href="/">Blockchain Application Development</a>
                            <a href="/">Cryptocurrency App Development</a>
                            <a href="/">ICO Development Company</a>
                            <a href="/">Salesforce Development Company</a>
                            <a href="/">Digital Marketing Agency</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Solutions
                </a>
                <div className="dropdown-menu standard-dropdown">
                  <a className="dropdown-item" href="/">Enterprise Solutions</a>
                  <a className="dropdown-item" href="/">Startup Solutions</a>
                  <a className="dropdown-item" href="/">Custom Software Development</a>
                  <a className="dropdown-item" href="/">Product Engineering</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  About Us
                </a>
                <div className="dropdown-menu standard-dropdown">
                  <a className="dropdown-item" href="/">Our Story</a>
                  <a className="dropdown-item" href="/">Leadership Team</a>
                  <a className="dropdown-item" href="/">Careers</a>
                  <a className="dropdown-item" href="/">Culture & Values</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Hire a Team
                </a>
                <div className="dropdown-menu standard-dropdown">
                  <a className="dropdown-item" href="/">Hire Developers</a>
                  <a className="dropdown-item" href="/">Hire Designers</a>
                  <a className="dropdown-item" href="/">Dedicated Team Model</a>
                  <a className="dropdown-item" href="/">Staff Augmentation</a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <button className="quote-btn">Get Free Quote</button>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="hero-slide"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="overlay"></div>

                  <div className="container hero-content text-center">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>

                    <button className="start-btn">{slide.buttonText}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;