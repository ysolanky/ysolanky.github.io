import React, { useEffect, useState, useCallback, useRef } from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// --- Easter egg: Console message ---
console.log(
  "%c\n" +
  "  __   __\n" +
  "  \\ \\ / /\n" +
  "   \\ V / \n" +
  "    | |  \n" +
  "    |_|  \n\n" +
  "%c  Hey, curious one! Nice to see you poking around.\n" +
  "  Want to work together? yashpratapsolanky@gmail.com\n",
  "color: #000066; font-size: 16px; font-family: monospace; font-weight: bold;",
  "color: #ff4017; font-size: 12px; font-family: monospace;"
);

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

// --- Easter egg: Location pin teleport ---
const fakeLocations = [
  "Hogwarts",
  "127.0.0.1",
  "us-east-1",
  "localhost:3000",
  "Battlefield",
  "Sparta",
  "Santiago Bernabéu Stadium",
  "Delhi, India",
  "Gotham",
  "Winterfell",
  "Bloomington, IN",
  "Grand Tetons",
  "Grand Canyon National Park",
  "Banff",
  "Yosemite Valley",
  "Box Box Box",
  "Spa-Francorchamps",
];

const LocationPin = () => {
  const [location, setLocation] = useState("Boston, Massachusetts");
  const [isGlitching, setIsGlitching] = useState(false);
  const shuffled = useRef([]);
  const index = useRef(0);

  const handleClick = useCallback(() => {
    if (shuffled.current.length === 0 || index.current >= shuffled.current.length) {
      shuffled.current = [...fakeLocations].sort(() => Math.random() - 0.5);
      index.current = 0;
    }
    setIsGlitching(true);
    setLocation(shuffled.current[index.current]);
    index.current += 1;
    if (index.current >= shuffled.current.length) {
      setTimeout(() => {
        setLocation("Boston, Massachusetts");
        shuffled.current = [];
        index.current = 0;
      }, 1500);
    }
    setTimeout(() => setIsGlitching(false), 300);
  }, []);

  return (
    <div className={`map-pin-animated${isGlitching ? " glitch" : ""}`} onClick={handleClick} style={{ cursor: "pointer" }}>
      <FontAwesomeIcon icon={faLocationDot} />
      &nbsp; {location}
    </div>
  );
};

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

const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  const isDark = current === "dark" ||
    (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
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

// --- Easter egg: Konami code ---
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

const useKonamiCode = (callback) => {
  const index = useRef(0);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === KONAMI[index.current]) {
        index.current++;
        if (index.current === KONAMI.length) {
          callback();
          index.current = 0;
        }
      } else {
        index.current = 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
};

// --- Easter egg: Secret word trigger ---
const useSecretWord = (word, callback) => {
  const buffer = useRef("");
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      buffer.current += e.key.toLowerCase();
      if (buffer.current.length > word.length) {
        buffer.current = buffer.current.slice(-word.length);
      }
      if (buffer.current === word) {
        callback();
        buffer.current = "";
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [word, callback]);
};

const spawnPixelConfetti = () => {
  const colors = ["#000066", "#ff4017", "#ff6a47", "#e0e0e0", "#4444ff"];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement("div");
    el.className = "pixel-confetti";
    el.style.left = Math.random() * 100 + "vw";
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (1.5 + Math.random() * 2) + "s";
    el.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
};

// --- Easter egg: Triple-click confetti (escalating) ---
const useTripleClick = (callback, megaCallback) => {
  const clicks = useRef([]);
  const triggerCount = useRef(0);
  const resetTimer = useRef(null);
  useEffect(() => {
    const handler = () => {
      const now = Date.now();
      clicks.current.push(now);
      clicks.current = clicks.current.filter((t) => now - t < 500);
      if (clicks.current.length >= 3) {
        triggerCount.current += 1;
        clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => { triggerCount.current = 0; }, 2000);
        if (triggerCount.current >= 3) {
          megaCallback();
          triggerCount.current = 0;
        } else {
          callback();
        }
        clicks.current = [];
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
      clearTimeout(resetTimer.current);
    };
  }, [callback, megaCallback]);
};

// --- Easter egg: Mobile shake ---
const useShake = (callback, threshold = 25) => {
  const last = useRef({ x: 0, y: 0, z: 0 });
  useEffect(() => {
    const handler = (e) => {
      const { x, y, z } = e.accelerationIncludingGravity || {};
      if (x == null) return;
      const delta = Math.abs(x - last.current.x) + Math.abs(y - last.current.y) + Math.abs(z - last.current.z);
      last.current = { x, y, z };
      if (delta > threshold) callback();
    };
    window.addEventListener("devicemotion", handler);
    return () => window.removeEventListener("devicemotion", handler);
  }, [callback, threshold]);
};

// --- Easter egg: DVD screensaver ---
const useScreensaver = (idleTimeout = 60000) => {
  const [active, setActive] = useState(false);
  const timer = useRef(null);

  const resetTimer = useCallback(() => {
    if (active) setActive(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(true), idleTimeout);
  }, [active, idleTimeout]);

  useEffect(() => {
    timer.current = setTimeout(() => setActive(true), idleTimeout);
    const events = ["mousemove", "keydown", "click", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    return () => {
      clearTimeout(timer.current);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [resetTimer, idleTimeout]);

  return active;
};

const DvdBounce = () => {
  const ref = useRef(null);
  const pos = useRef({ x: 100, y: 100 });
  const vel = useRef({ dx: 2, dy: 1.5 });
  const raf = useRef(null);

  useEffect(() => {
    const animate = () => {
      const el = ref.current;
      if (!el) return;
      const w = window.innerWidth - el.offsetWidth;
      const h = window.innerHeight - el.offsetHeight;
      pos.current.x += vel.current.dx;
      pos.current.y += vel.current.dy;
      if (pos.current.x <= 0 || pos.current.x >= w) vel.current.dx *= -1;
      if (pos.current.y <= 0 || pos.current.y >= h) vel.current.dy *= -1;
      pos.current.x = Math.max(0, Math.min(w, pos.current.x));
      pos.current.y = Math.max(0, Math.min(h, pos.current.y));
      el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="dvd-screensaver" ref={ref}>
      Yash Pratap Solanky
    </div>
  );
};

const AppBase = () => {
  const [secretMessage, setSecretMessage] = useState(null);
  const screensaverActive = useScreensaver(60000);

  const triggerConfetti = useCallback(() => spawnPixelConfetti(), []);
  const triggerMegaConfetti = useCallback(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => spawnPixelConfetti(), i * 150);
    }
  }, []);

  useKonamiCode(triggerConfetti);
  useTripleClick(triggerConfetti, triggerMegaConfetti);
  useShake(triggerConfetti);

  useSecretWord("hello", useCallback(() => {
    setSecretMessage("Hey there, nice find!");
    setTimeout(() => setSecretMessage(null), 3000);
  }, []));

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
      {screensaverActive && <DvdBounce />}
      {secretMessage && <div className="secret-message">{secretMessage}</div>}
      <div id="top-of-site-pixel-anchor"></div>

      <header id="header">
        <div className="header-content">
          <SocialLinks />
        </div>
      </header>

      <main>
        <section className="profile-section">
          <FadeIn>
            <div className="titlecard" onClick={toggleTheme} role="button" tabIndex={0} aria-label="Toggle theme">
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
