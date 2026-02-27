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
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
};

const LocationPin = () => (
  <div className="map-pin-animated">
    <FontAwesomeIcon icon={faLocationDot} />
    &nbsp; Boston, Massachusetts
  </div>
);

const TypeWriter = ({ text, speed = 100, cursorDisappearDelay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorOpacity, setCursorOpacity] = useState(1);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && cursorOpacity === 1) {
      const cursorTimer = setTimeout(() => {
        setCursorOpacity(0);
      }, cursorDisappearDelay);

      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, speed, cursorDisappearDelay, cursorOpacity]);

  return (
    <span style={{ position: "relative" }}>
      {displayText}
      <span
        className={`typewriter-cursor${cursorOpacity === 0 ? " cursor-hidden" : ""}`}
      />
    </span>
  );
};

const socials = [
  { href: "mailto:yashpratapsolanky@gmail.com", icon: faEnvelope, label: "Email" },
  { href: "https://twitter.com/yashpsolanky", icon: faXTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/ysolanky", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://github.com/ysolanky", icon: faGithub, label: "GitHub" },
];

const SocialLinks = React.memo(() => (
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
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    ))}
  </ul>
));

const AppBase = () => {
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
          <SocialLinks />
        </div>
      </header>

      <main>
        <section className="profile-section">
          <FadeIn>
            <div className="titlecard">
              <TypeWriter text="Yash Pratap Solanky" speed={80} />
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="map-pin">
              <LocationPin />
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="social-links-container">
              <SocialLinks />
            </div>
          </FadeIn>

          <FadeIn delay={750}>
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
