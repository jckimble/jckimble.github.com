import React from "react"
import { HeadFC } from "gatsby"
import Link from "../components/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"

function Home() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for new projects
          </div>
          <h1>
            Secure Software That <span>Actually Works</span>
          </h1>
          <p className="hero-subtitle">
            I help businesses build robust, secure, and automated software
            systems. 17+ years turning complex problems into elegant,
            reliable solutions.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              <FontAwesomeIcon icon={["fas", "paper-plane"]} />
              Start a Project
            </a>
            <a href="#services" className="btn btn-outline">
              See What I Do
            </a>
          </div>
          <div className="hero-profile">
            <img
              src="https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150"
              alt="James C Kimble"
            />
            <div className="hero-profile-text">
              <div className="name">James C Kimble</div>
              <div className="role">Software Consultant</div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">17+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Security Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">What I Do</span>
            <h2 className="section-title">
              Services Built for <span>Real Results</span>
            </h2>
            <p className="section-subtitle">
              From security audits to full automation pipelines — I deliver
              software solutions that are secure, scalable, and maintainable.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={["fas", "shield-halved"]} />
              </div>
              <h3>Security Consulting</h3>
              <p>
                Comprehensive security assessments and code reviews for your
                web applications and APIs. I identify vulnerabilities before
                attackers do, protecting your business and your clients.
              </p>
              <div className="service-tags">
                <span>Vulnerability Assessment</span>
                <span>Secure Code Review</span>
                <span>OWASP Top 10</span>
                <span>Penetration Testing</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={["fas", "gears"]} />
              </div>
              <h3>Process Automation</h3>
              <p>
                Stop wasting time on repetitive tasks. I design and build
                custom automation pipelines that free your team to focus on
                what matters — CI/CD, workflow automation, and scripting
                at scale.
              </p>
              <div className="service-tags">
                <span>CI/CD Pipelines</span>
                <span>Workflow Automation</span>
                <span>Scripting</span>
                <span>DevOps</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={["fas", "code"]} />
              </div>
              <h3>Full-Stack Development</h3>
              <p>
                End-to-end software development from architecture to
                deployment. I build web applications, APIs, and backend
                systems with a focus on performance, security, and long-term
                maintainability.
              </p>
              <div className="service-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Go</span>
                <span>REST APIs</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img
                src="https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=400"
                alt="James C Kimble"
              />
              <div className="about-badge">
                <span className="badge-number">17+</span>
                <span className="badge-text">Years in Software</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-label">About Me</span>
              <h2>
                Security-first thinking,{" "}
                <span>pragmatic delivery</span>
              </h2>
              <p>
                I started coding at 14 and never stopped. Over 17 years I've
                worked across the full software stack — from low-level scripts
                to cloud-native architectures — in security-sensitive
                environments.
              </p>
              <p>
                My primary focus is security and automation. The best-looking
                site in the world is worthless if it's easily compromised. I
                make sure your software is both excellent and secure from the
                ground up.
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <div className="highlight-icon">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </div>
                  <p>Security-first on every project — not bolted on after the fact</p>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </div>
                  <p>Deep focus on automation to reduce human error and overhead</p>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </div>
                  <p>Direct communication — no jargon, no surprises, no excuses</p>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">
                    <FontAwesomeIcon icon={["fas", "check"]} />
                  </div>
                  <p>Pragmatic solutions that solve real business problems</p>
                </div>
              </div>
              <div className="about-ctas">
                <a href="#contact" className="btn btn-accent">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  Get In Touch
                </a>
                <a
                  href="/jckimble.vcf"
                  download="jckimble.vcf"
                  className="btn btn-outline-dark"
                >
                  <FontAwesomeIcon icon={["fas", "address-card"]} />
                  Save Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="skills" id="skills">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Technical Expertise</span>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle">
              A broad and deep technology toolkit built over 17 years of
              hands-on engineering work.
            </p>
          </div>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Security</h3>
              <div className="skill-list">
                <span>OWASP Top 10</span>
                <span>Vulnerability Assessment</span>
                <span>Secure Code Review</span>
                <span>OAuth2 / JWT</span>
                <span>Encryption</span>
                <span>Threat Modeling</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-list">
                <span>Go (Golang)</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>REST APIs</span>
                <span>GraphQL</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span>React</span>
                <span>TypeScript</span>
                <span>Gatsby</span>
                <span>Next.js</span>
                <span>HTML / CSS</span>
                <span>SASS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>DevOps &amp; Automation</h3>
              <div className="skill-list">
                <span>GitHub Actions</span>
                <span>Docker</span>
                <span>Linux</span>
                <span>Bash / Shell</span>
                <span>CI/CD</span>
                <span>Infrastructure as Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Me ── */}
      <section className="why-me">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Why Work With Me</span>
            <h2 className="section-title">What Sets Me Apart</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <FontAwesomeIcon icon={["fas", "shield-halved"]} />
              </div>
              <h3>Security Is Non-Negotiable</h3>
              <p>
                Every line of code I write is reviewed through a security lens.
                No exceptions.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <FontAwesomeIcon icon={["fas", "bolt"]} />
              </div>
              <h3>Ship Fast, Stay Solid</h3>
              <p>
                I balance speed with quality — delivering quickly without
                cutting corners on fundamentals.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <FontAwesomeIcon icon={["fas", "comments"]} />
              </div>
              <h3>Clear Communication</h3>
              <p>
                You always know what's happening. No jargon, no radio silence,
                no surprises.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <FontAwesomeIcon icon={["fas", "infinity"]} />
              </div>
              <h3>Built to Last</h3>
              <p>
                I write maintainable, documented code — built for your team
                to own long after the engagement ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">Let's Work Together</span>
              <h2>
                Ready to build something <span>great?</span>
              </h2>
              <p className="contact-lead">
                I'm currently available for new projects. Whether you need a
                security audit, a new application, or help automating your
                processes — let's talk.
              </p>
              <div className="contact-links">
                <Link to="mailto:me@jckimble.com">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </div>
                  me@jckimble.com
                </Link>
                <Link to="tel:+16017484093">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={["fas", "phone"]} />
                  </div>
                  +1 (601) 748-4093
                </Link>
              </div>
            </div>
            <div className="contact-socials">
              <span className="social-head">Find Me Online</span>
              <div className="social-grid">
                <Link to="https://www.linkedin.com/in/james-kimble-865092212/">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin-in"]}
                    style={{ color: "#0077b5" }}
                  />
                  LinkedIn
                </Link>
                <Link to="https://github.com/jckimble">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                  GitHub
                </Link>
                <Link to="https://twitter.com/jckimble601">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    style={{ color: "#1da1f2" }}
                  />
                  Twitter
                </Link>
                <Link to="https://dev.to/jckimble">
                  <FontAwesomeIcon icon={["fab", "dev"]} />
                  Dev.to
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

export const Head: HeadFC = () => (
  <>
    <title>James C Kimble :: Software Consultant</title>
    <meta
      name="description"
      content="James C Kimble is a software consultant specializing in security, automation, and full-stack development with 17+ years of experience."
    />
  </>
)
