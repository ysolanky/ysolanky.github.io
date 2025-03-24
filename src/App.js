import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
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

  // Add cursor blinking animation via CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(-5px);}
        60% {transform: translateY(-3px);}
      }
      @keyframes pulse {
        0% {transform: scale(1);}
        50% {transform: scale(1.2);}
        100% {transform: scale(1);}
      }
      .bounce {
        animation: bounce 0.8s ease infinite;
      }
      .pulse {
        animation: pulse 1.5s ease infinite;
      }
      .map-pin-animated {
        display: inline-flex;
        align-items: center;
      }
      .map-pin-animated:hover svg {
        animation: bounce 0.8s ease infinite;
      }
      /* Rest of your styles... */
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

          <FadeIn delay={200}>
            <div className="map-pin">
              <LocationPin />
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="social-links-container">
              <SocialLinks iconColor={iconColor} />
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="about-me">
              Senior Software Engineer at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.agno.com/"
                aria-label="Agno company website"
              >
                Agno
              </a>
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
};

export default AppBase;
