import React from "react";
import style from "./portfolio.module.css"

export default function Portfolio() {
  return (
    <header className={style.portfolio}>

    <main>
      <h1 className="page-title">My Portfolio</h1>
      <div className="project">
        <div className="project-details">
          <h2 className="project-name">My Personal Website</h2>
          <img
            src="../websitecreenshot.png"
            alt="personal website screenshot"
          />
          <p className="project-description">
            I made a personal website using guidance from the Hack4Impact
            starter pack. This was my first real HTML / CSS project and I am
            happy with what I created in a mere three days. I intend to continue
            to contribute to and improve upon this project consistently.
          </p>
          <div className="button-row">
            <div className="button">
                <a href="https://github.com/lukewaltz/lukewaltz.github.io">
                    View Repository
                </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <h2 className="project-name">Wellkit Landing Page</h2>
            <img
              src="../wellkitpage_screenshot.png"
              alt="wellkit landing page screenshot"
            />
            <p className="project-description">
              My first project for my internship at OpenPark was to develop a
              landing page for OpenPark's new product, the WellKit. To achieve
              this I used Framer.com, a web development tool powered by AI. I
              collaborated closely with the marketing team. I also worked with
              the CEO of OpenPark, Jared Zabel, as well as UX/UI intern Laryssa
              Molina. This will be the first of many landing pages I develop for
              OpenPark, and as my software engineering skills continue to
              improve I hope to integrate more of my own code into the framework
              that Framer.com assists me in creating.
            </p>
            <div className="button-row">
              <div className="button">
                <a href="https://www.openpark.us/wellkit">View Page</a>
              </div>
              <div className="button">
                <a href="https://www.linkedin.com/in/parkfounder/">
                    Jared's Linkedin
                    </a>
              </div>
              <div className="button">
                <a href="https://www.linkedin.com/in/laryssa-molina/">
                    Laryssa's Linkedin
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </header>
  );}