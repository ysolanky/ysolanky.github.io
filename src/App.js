import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

// Subtle animation for page elements when they load
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
};

// Create a new component for the switching text animation
const TextSwitcher = () => {
  const [index, setIndex] = useState(0);
  const phrases = [
    <>
      Senior Software Engineer at{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.agno.com/"
        aria-label="Agno company website"
      >
        Agno
      </a>
    </>,
    <>
      Building Agents at{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.agno.com/"
        aria-label="Agno company website"
      >
        Agno
      </a>
    </>,
  ];

  useEffect(() => {
    // Switch between the two phrases every 4 seconds
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-switcher">
      <div className={`text-item ${index === 0 ? "visible" : "hidden"}`}>
        {phrases[0]}
      </div>
      <div className={`text-item ${index === 1 ? "visible" : "hidden"}`}>
        {phrases[1]}
      </div>
    </div>
  );
};

// For the location pin specifically
const LocationPin = () => {
  const iconColor = "#000066";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="map-pin-animated"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon
        icon={faLocationDot}
        color={iconColor}
        className={isHovered ? "bounce" : ""}
      />
      &nbsp; Boston, Massachusetts
    </div>
  );
};

// Typing animation component with disappearing cursor
const TypeWriter = ({ text, speed = 100, cursorDisappearDelay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && showCursor) {
      // When typing is complete, hide the cursor after a delay
      const cursorTimer = setTimeout(() => {
        setShowCursor(false);
      }, cursorDisappearDelay);

      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, speed, cursorDisappearDelay, showCursor]);

  return (
    <span style={{ position: "relative" }}>
      {displayText}
      {showCursor && (
        <span
          style={{
            position: "absolute",
            animation: "blink 1s infinite",
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

// Social links component to avoid repetition
const SocialLinks = ({ iconColor }) => (
  <ul className="c-social">
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:yashpratapsolanky@gmail.com"
        title="Email"
        aria-label="Email"
        className="icon-link"
      >
        <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/yashpratap7"
        title="Twitter"
        aria-label="Twitter Profile"
        className="icon-link"
      >
        <FontAwesomeIcon icon={faXTwitter} color={iconColor} />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/ysolanky"
        title="LinkedIn"
        aria-label="LinkedIn Profile"
        className="icon-link"
      >
        <FontAwesomeIcon icon={faLinkedin} color={iconColor} />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ysolanky"
        title="Github"
        aria-label="GitHub Profile"
        className="icon-link"
      >
        <FontAwesomeIcon icon={faGithub} color={iconColor} />
      </a>
    </li>
  </ul>
);

// Convert to functional component with hooks
const AppBase = () => {
  const iconColor = "#000066";

  // Add consolidated animation and styling via CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    /* Animation keyframes */
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-5px); }
      60% { transform: translateY(-3px); }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    
    /* Animation classes */
    .bounce {
      animation: bounce 0.8s ease infinite;
    }
    
    .pulse {
      animation: pulse 1.5s ease infinite;
    }
    
    .cursor {
      animation: blink 1s infinite;
    }
    
    /* Layout & Components */
    .map-pin-animated {
      display: inline-flex;
      align-items: center;
    }
    
    .map-pin-animated:hover svg {
      animation: bounce 0.8s ease infinite;
    }
    
    .icon-link {
      display: inline-block;
      transition: transform 0.3s ease;
    }
    
    .icon-link:hover {
      transform: scale(1.1);
    }
    
    .c-social {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0;
      justify-content: center;
    }
    
    .c-social li {
      display: inline-flex;
      align-items: center;
      margin: 0 5px;
    }
    
    .social-links-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    
    /* Text switcher styles */
    .text-switcher {
      position: relative;
      height: 1.4em;
      overflow: hidden;
    }
    
    .text-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .text-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .text-item.hidden {
      opacity: 0;
      transform: translateY(-20px);
    }
    
    /* Update spacing styles */
    .profile-section {
      display: flex;
      flex-direction: column;
      gap: 0.15rem; /* Reduced from 0.3rem */
    }
    
    .map-pin {
      margin-top: -0.8rem; /* Increased negative margin from -0.6rem */
    }
    
    .social-links-container {
      margin-top: -0.8rem; /* Increased negative margin from -0.6rem */
    }
    
    .about-me {
      margin-top: -0.8rem; /* Increased negative margin from -0.6rem */
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].boundingClientRect.y < 0) {
            document.body.classList.add("header-not-at-top");
          } else {
            document.body.classList.remove("header-not-at-top");
          }
        },
        {
          root: null,
          threshold: 1.0,
        }
      );

      const topAnchor = document.querySelector("#top-of-site-pixel-anchor");
      if (topAnchor) {
        observer.observe(topAnchor);
      }

      // Clean up observer on component unmount
      return () => {
        if (topAnchor) {
          observer.unobserve(topAnchor);
        }
      };
    }
  }, []);

  return (
    <div className="app-container">
      <div id="top-of-site-pixel-anchor"></div>

      <header id="header">
        <div className="header-content">
          <ul className="c-social">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:yashpratapsolanky@gmail.com"
                title="Email"
                aria-label="Email"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
              </a>
            </li>
            <li className="name-text">&nbsp; Yash &nbsp;</li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/yashpratap7"
                title="Twitter"
                aria-label="Twitter Profile"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faXTwitter} color={iconColor} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ysolanky"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faLinkedin} color={iconColor} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ysolanky"
                title="Github"
                aria-label="GitHub Profile"
                className="icon-link"
              >
                <FontAwesomeIcon icon={faGithub} color={iconColor} />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="profile-section">
          <FadeIn>
            <div className="titlecard">
              <TypeWriter text="Yash Pratap Solanky" speed={80} />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="map-pin">
              <LocationPin />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="social-links-container">
              <SocialLinks iconColor={iconColor} />
            </div>
          </FadeIn>

          <FadeIn delay={450}>
            <div className="about-me">
              <TextSwitcher />
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
};

export default AppBase;
