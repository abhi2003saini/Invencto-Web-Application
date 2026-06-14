import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Admin.css';
import Laptop from '../Asset/Images/laptop.png'; // Replace with your actual laptop/dashboard image asset

function Admin() {
  // Array of features mapped exactly as shown in your image
  const adminFeatures = [
    { name: 'Authentication', icon: 'bi-shield-check' },
    { name: 'One Click Dashboard', icon: 'bi-speedometer2' },
    { name: 'Push Notification', icon: 'bi-bell' },
    { name: 'User Management', icon: 'bi-person-gear' },
    { name: 'Subscription Management', icon: 'bi-wallet2' },
    { name: 'Ad Management', icon: 'bi-megaphone' },
    { name: 'Category Management', icon: 'bi-list-task' },
    { name: 'Location Based Tracking', icon: 'bi-geo-alt' },
    { name: 'Profile Management', icon: 'bi-person-lines-fill' },
    { name: 'Language Management', icon: 'bi-translate' },
  ];

  const servicesData = [
    {
      id: 1,
      title: "LGBTQ Dating App",
      description: "We are proud to create secure dating platforms for the LGBTQ+ community. Our options are tailored to meet their specific dating requirements, providing a safe space for love to be found without judgment.",
      icon: "bi-person-heart",
      iconBg: "#7a5cf1", // Purple
      hoverBg: "#f5f3ff" // Very light purple
    },
    {
      id: 2,
      title: "Interest-Based Dating App",
      description: "We are experts in creating dating apps that bring together like-minded people who share similar interests, such as fitness and travel, music, or other hobbies, and are looking for genuine relationships.",
      icon: "bi-chat-square-heart",
      iconBg: "#71c556", // Green
      hoverBg: "#f2fcf0" // Very light green
    },
    {
      id: 3,
      title: "Polyamorous Dating App",
      description: "Our app for dating with polyamory was designed to allow users to discover the idea of loving relationships that are compatible with their lifestyles without judgment.",
      icon: "bi-people",
      iconBg: "#f58c44", // Orange
      hoverBg: "#fff7f0" // Very light orange
    }
  ];

  return (
    <section className="admin-panel-section py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column: Text & Features Grid */}
          <div className="col-lg-7 pe-lg-5 mb-5 mb-lg-0">
            <h2 className="admin-title fw-bold mb-3">Admin Panel</h2>
            <p className="admin-description mb-3">
              Manage your dating platform effortlessly with the ease of our admin panel. Track user activity, manage profiles, and produce reports from one location. With our sophisticated analytical capabilities and user-friendly interface, you can improve your platform and enhance the user experience.
            </p>

            <div className="row ">
              {adminFeatures.map((feature, index) => (
                <div className="col-md-6 col-12 d-flex align-items-center" key={index}>
                  <div className="admin-icon-wrapper me-3">
                    <i className={`bi ${feature.icon} admin-icon`}></i>
                  </div>
                  <span className="admin-feature-text">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Laptop Mockup Image */}
          <div className="col-lg-5 text-center">
            <img
              // Replace this src with your exported laptop/dashboard image asset
              src={Laptop}
              alt="Admin Dashboard Mockup"
              className="img-fluid admin-mockup-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Admin;