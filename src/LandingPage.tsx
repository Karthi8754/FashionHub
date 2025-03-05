import React from "react";
import "./LandingPage.css"; // Import component-specific CSS

const LandingPage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Fashion Hub ✨</h1> {/* Added sparkle emoji */}
        <div>
          <p className="navbar-text">Contact Us</p>
        </div>
        <div>
          <button className="login-btn">🔑 Login</button> {/* Key emoji */}
          <button className="signup-btn">📝 Sign Up</button> {/* Clipboard emoji */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="model-content">
        <img src="/virat_kohli.webp" alt="Landing Page" className="landing-image" />
        <div className="text">
          <h2>Welcome to MyWebsite 🚀</h2> {/* Rocket emoji for excitement */}
          <p>Join us today and explore amazing features. Sign up now! 🎉</p> {/* Celebration emoji */}
          <button className="get-started">🔥 Get Started</button> {/* Fire emoji for action */}
        </div>
        <img src="/virat_kohli_2.avif" alt="Landing Page" className="landing-image_2" />
        </div>
      </div>
      <div className="carousel-content">
        
      </div>
    </div>
  );
};

export default LandingPage;
