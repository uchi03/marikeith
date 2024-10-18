import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/LOVEMariKeith" target="_blank" rel="noopener noreferrer">
          <img src="https://res.cloudinary.com/drbddpumg/image/upload/v1723910076/5282541_fb_social_media_facebook_facebook_logo_social_network_icon_wbbd6n.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/marikeith_ph" target="_blank" rel="noopener noreferrer">
          <img src="https://res.cloudinary.com/drbddpumg/image/upload/v1723910076/5282544_camera_instagram_social_media_social_network_instagram_logo_icon_dhdtq2.png" alt="Instagram" />
        </a>
      </div>
      <p>&copy; Marikeith</p>
    </div>
  );
};