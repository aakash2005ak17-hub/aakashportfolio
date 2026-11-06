
import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  "Digital Forensics",
  "DFIR",
  "VAPT",
  "Cybersecurity Fundamentals",
  "Steganography",
  "AI Security",
  "Linux Basics",
  "Digital Investigation",
];

const tools = [
  "Kali Linux",
  "Autopsy",
  "FTK Imager",
  "Wireshark",
  "Steghide",
  "Volatility",
  "Linux Terminal",
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aakash-r-483725440/",
  },
  {
    name: "GitHub",
    url: "https://github.com/aakash2005ak17-hub",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/aakashrev.44/",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      const sections = document.querySelectorAll("main section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          AR<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["home", "Home"],
            ["about", "About"],
            ["skills", "Skills"],
            ["education", "Education"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              DIGITAL FORENSICS STUDENT
            </div>

            <p className="hero-kicker">HELLO, I'M AAKASH R</p>

            <h1>
              Exploring the
              <br />
              Digital World.
              <br />
              <span>Building What's Next.</span>
            </h1>

            <p className="hero-description">
              A Digital and Cyber Forensic Science student interested in
              cybersecurity, digital investigations, and emerging
              technologies. Curious about how things work and motivated
              to explore practical solutions to real-world challenges.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Get in Touch <span>↗</span>
              </a>
              <a className="button button-outline" href="#about">
                Discover More <span>↓</span>
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">LOCATION</span>
                <p>Salem, Tamil Nadu, India</p>
              </div>
              <div>
                <span className="meta-label">FIELD OF INTEREST</span>
                <p>Digital Forensics & Cybersecurity</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-monogram">
              <span>A</span>
              <span>R</span>
              <small>PORTFOLIO / 2026</small>
            </div>
            <div className="floating-card card-top">
              <span className="card-symbol">⌘</span>
              <div>
                <strong>Digital</strong>
                <small>Investigation</small>
              </div>
            </div>
            <div className="floating-card card-bottom">
              <span className="card-symbol">⌁</span>
              <div>
                <strong>Cyber</strong>
                <small>Exploration</small>
              </div>
            </div>
            <div className="visual-caption">CURIOUS BY NATURE. DRIVEN BY TECHNOLOGY.</div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading reveal">
            <span className="section-number">01 / ABOUT ME</span>
            <h2>
              Curiosity is where
              <br />
              <span>everything begins.</span>
            </h2>
          </div>

          <div className="about-content reveal">
            <div className="about-label">A LITTLE ABOUT MYSELF</div>
            <div>
              <p>
                I'm Aakash, pursuing a B.Sc. in Digital and Cyber Forensic
                Science at Nehru Arts and Science College, Coimbatore.
              </p>
              <p>
                My interests include digital evidence, forensic
                investigations, cybersecurity, and emerging technologies.
                I enjoy understanding how systems work and learning
                practical ways to investigate digital challenges.
              </p>
              <p>
                I am continuously building my technical foundation
                through exploration, practice, and learning.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <span className="section-number">02 / SKILLS & INTERESTS</span>
            <h2>
              Areas I'm
              <br />
              <span>exploring.</span>
            </h2>
            <p>
              My current learning areas and technical interests.
            </p>
          </div>

          <div className="skill-grid reveal">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section tools-section">
          <div className="section-heading reveal">
            <span className="section-number">03 / TOOLS & TECHNOLOGY</span>
            <h2>
              Tools I'm
              <br />
              <span>getting hands-on with.</span>
            </h2>
            <p>
              Basic hands-on exposure and ongoing practice.
            </p>
          </div>

          <div className="tools-list reveal">
            {tools.map((tool, index) => (
              <div className="tool-item" key={tool}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{tool}</h3>
                <span className="tool-status">LEARNING / PRACTICING</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading reveal">
            <span className="section-number">04 / EDUCATION</span>
            <h2>
              The foundation
              <br />
              <span>of my journey.</span>
            </h2>
          </div>

          <div className="education-card reveal">
            <div className="education-year">UNDERGRADUATE</div>
            <div>
              <h3>B.Sc. Digital and Cyber Forensic Science</h3>
              <p>Nehru Arts and Science College</p>
              <p>Coimbatore, Tamil Nadu</p>
              <span className="education-status">
                FINAL YEAR STUDENT
              </span>
            </div>
            <span className="education-icon">↗</span>
          </div>
        </section>

        <section className="section focus-section">
          <div className="section-heading reveal">
            <span className="section-number">05 / CURRENT FOCUS</span>
            <h2>
              Learning today.
              <br />
              <span>Building tomorrow.</span>
            </h2>
          </div>

          <div className="focus-grid reveal">
            <div className="focus-card">
              <span>01</span>
              <h3>Digital Forensics</h3>
              <p>Understanding digital evidence and forensic investigation.</p>
            </div>
            <div className="focus-card">
              <span>02</span>
              <h3>DFIR & VAPT</h3>
              <p>Exploring incident response and security testing concepts.</p>
            </div>
            <div className="focus-card">
              <span>03</span>
              <h3>AI Security</h3>
              <p>Learning about security challenges in emerging AI systems.</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-content reveal">
            <span className="section-number">06 / CONTACT</span>
            <p className="contact-kicker">HAVE AN OPPORTUNITY?</p>
            <h2>
              Let's create
              <br />
              <span>something meaningful.</span>
            </h2>
            <p className="contact-description">
              Open to internships, learning opportunities, and
              professional connections in digital forensics and
              cybersecurity.
            </p>

            <a
              className="button button-primary email-button"
              href="mailto:aakash2005.ak17@gmail.com"
            >
              aakash2005.ak17@gmail.com <span>↗</span>
            </a>

            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          AR<span>.</span>
        </a>
        <p>© 2026 AAKASH R. ALL RIGHTS RESERVED.</p>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
