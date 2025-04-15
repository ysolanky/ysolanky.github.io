import React, { useEffect, useState } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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

const socials = [
  {
    href: "mailto:yashpratapsolanky@gmail.com",
    icon: faEnvelope,
    label: "Email",
  },
  {
    href: "https://twitter.com/yashpratap7",
    icon: faXTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/ysolanky",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/ysolanky", icon: faGithub, label: "GitHub" },
];

const SocialLinks = React.memo(({ iconColor }) => (
  <ul className="c-social">
    {socials.map(({ href, icon, label }) => (
      <li key={label}>
        <a
          target="_blank"
          rel="noreferrer"
          href={href}
          title={label}
          aria-label={`${label} Profile`}
          className="icon-link"
        >
          <FontAwesomeIcon icon={icon} color={iconColor} />
        </a>
      </li>
    ))}
  </ul>
));

const AppBase = () => {
  const iconColor = "#000066";

  useEffect(() => {
    document.title = "Yash";

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-5px); }
        60% { transform: translateY(-3px); }
      }

      .bounce {
        animation: bounce 0.8s ease infinite;
      }

      .cursor {
        animation: blink 1s infinite;
      }

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

      .profile-section {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
      }

      .map-pin {
        margin-top: -0.8rem;
      }

      .social-links-container {
        margin-top: -0.8rem;
      }

      .about-me {
        margin-top: -0.8rem;
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
          <SocialLinks iconColor={iconColor} />
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
              Staff Software Engineer at{" "}
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
