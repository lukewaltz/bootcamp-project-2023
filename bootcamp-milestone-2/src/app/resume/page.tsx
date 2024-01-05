import React from "react";
import style from "./resume.module.css";

export default function Resume() {
  return (
    <header className={style.resume}>
      <title>Luke&apos;s Resume</title>
      <h1>My Resume</h1>

      <a href="/Luke_s_Resume_11_6.pdf" download>
        <div className="button">Download</div>
      </a>

      <div>
        <section>
          <h2>Education</h2>
          <div className={style.entry}>
            <h3 className="entry-title">
              Bachelor of Science in Computer Science
            </h3>
            <p className={style.entryInfo}>
              California Polytechnic State University, San Luis Obispo |
              Expected Graduation May 2025
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className={style.entry}>
            <h3 className="entry-title">Software Developer</h3>
            <p className={style.entryInfo}>
              Hack4Impact Cal Poly | San Luis Obispo, CA | October, 2023 -
              Present
            </p>
            <p className={style.entryDescription}>
              <ul className="h4i-list">
                <li>
                  Working with MongoDB, Express.js, React.js, Next.js, Node.js
                  to develop software for local nonprofits.
                </li>
              </ul>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className="entry-title">Software Intern</h3>
            <p className={style.entryInfo}>
              OpenPark | Los Angeles, CA | September, 2023 - Present
            </p>
            <p className={style.entryDescription}>
              <ul className="openpark-list">
                <li>
                  Collaborated closely with the marketing team to design and
                  develop user-friendly, mobile-responsive landing pages using
                  Framer.com, HTML, and CSS, enhancing OpenPark&apos;s online
                  presence and user engagement.{" "}
                </li>
                <li>
                  Integrated branded assets ensuring consistent alignment with
                  OpenPark&apos;s branding guidelines; applied UX principles to
                  ensure intuitive and engaging user navigation.
                </li>
                <li>
                  Managed tasks from scoping, feedback collection,
                  testing/validation, to final deployment on the OpenPark
                  website, ensuring high-quality landing pages that support the
                  mission of promoting pet wellness.
                </li>
              </ul>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className="entry-title">Computer Engineering Mentor</h3>
            <p className={style.entryInfo}>
              California Polytechnic State University | San Luis Obispo, CA |
              October 2022 - December 2022
            </p>
            <p className={style.entryDescription}>
              <ul className="mentor-list">
                <li>
                  Met with a group of 8 first year Computer Engineering students
                  weekly.
                </li>
                <li>
                  Informed students of upcoming opportunities and answered any
                  questions related to the major.
                </li>
              </ul>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className="entry-title">Camp Coach</h3>
            <p className={style.entryInfo}>
              Legacy Training Center | San Luis Obispo, CA | May 2023 -
              September 2023
            </p>
            <p className={style.entryDescription}>
              <ul className="coach-list">
                <li>
                  Coached groups of 6–10 children aged 8–12 in a gymnastics
                  facility
                </li>
                <li>
                  Mentored and developed personal connections with 100+ children
                  aged 4-12, weekly.
                </li>
                <li>
                  Effectively instructed and disciplined problematic campers.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className={style.entry}>
            <p className={style.entryDescription}>
              <ul className="skill-list">
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className={style.entry}>
            <h3 className="entry-title">Find Stuff Program</h3>
            <p className={style.entryInfo}>
              C, VS Code, xUbuntu | May 2023 - June 2023
            </p>
            <p className={style.entryDescription}>
              <ul className="findstuff-list">
                <li>
                  Used parallel processing to search current working directory
                  and/or subdirectories for files or strings of text.
                </li>
                <li>
                  Redirects a pipe to stdout to return the filepath of all
                  instances of the desired filename or string.
                </li>
                <li>
                  Altered execution of ”find” program depending on flags present
                  in the command: -f:.c only searches in files that end in ”.c”,
                  -s searches all subdirectories, etc.
                </li>
              </ul>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className="entry-title">MyApp</h3>
            <p className={style.entryInfo}>
              React, Express, Node.js, VS Code, Git | September 2023 - October
              2023
            </p>
            <p className={style.entryDescription}>
              <ul className="virtual-world-list">
                <li>
                  {" "}
                  Used React to develop a frontend form to accept input data and
                  display it in a table.
                </li>
                <li>
                  {" "}
                  Used Express and Node.js to build a REST API to handle HTTP
                  requests from the front end.
                </li>
                <li>
                  {" "}
                  Linked the frontend to the backend/REST API so additions or
                  deletions to the frontend form are reflected in the backend
                  data.
                </li>
                <li>
                  {" "}
                  Followed industry best practices to handle version control
                  with Git and Github.
                </li>
              </ul>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className="entry-title">Virtual World</h3>
            <p className={style.entryInfo}>
              Java, IntelliJ, yEd Graph Editor | September 2022 - December 2022
            </p>
            <p className={style.entryDescription}>
              <ul className="virtual-world-list">
                <li>
                  Increased cohesion and loose coupling of a 5000+ line project
                  by refactoring more than 30 methods into a className hierarchy
                  I defined consisting of 28 classes, 3 abstract classes and 3
                  interfaces.
                </li>
                <li>
                  {" "}
                  Implemented most efficient movement for the entities using the
                  A* pathing strategy.
                </li>
                <li>
                  {" "}
                  Created 3 additional entities with unique behaviours, and
                  implemented a world altering event upon a mouse click.
                </li>
                <li>
                  {" "}
                  Planned out my refactoring in a UML diagram using yEd Graph
                  Editor.
                </li>
              </ul>
            </p>
          </div>
          <div className={style.entry}>
            <h3 className="entry-title">Huffman Encode / Decode</h3>
            <p className={style.entryInfo}>Python, PyCharm | May 2022</p>
            <p className={style.entryDescription}>
              <ul className="huffman">
                <li>
                  Developed a program to compress text using Huffman coding, a
                  lossless data compression technique, by assigning
                  variable-length codes to characters based on their frequency.
                </li>
                <li>
                  Constructed a Huffman binary tree using ASCII values and
                  frequency counts to determine the unique Huffman codes for
                  characters, and traversed the tree to construct an array of
                  Huffman codes for each character.
                </li>
                <li>
                  Implemented functions to read input text files, encode the
                  content using the Huffman code, and write the encoded content
                  to output files with proper headers. Ensured robustness
                  through comprehensive unit testing, considering edge cases and
                  various file conditions.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <div className={style.entry}>
          <p className={style.entryDescription}>
            <ul className="course-list">
              <li>Introduction to Object Oriented Programming</li>
              <li>Data Structures</li>
              <li>Introduction to Computing (Game Design)</li>
              <li>Fundamentals of Computer Science</li>
              <li>Digital Design</li>
              <li>Computer Design and Assembly Language Programming</li>
              <li>Calculus 4, 3, 2, 1</li>
              <li>Linear Analysis</li>
              <li>Physics 3, 1</li>
              <li>Discrete Structures</li>
              <li>Systems Programming</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Introduction to Software Engineering</li>
            </ul>
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}
