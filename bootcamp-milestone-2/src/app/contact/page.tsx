import React from "react"
import style from "./contact.module.css"
import Image from "next/image"


export default function Contact() {
    return (

      <header className={style.contact}>

<h1 className="page-title">Contact Me</h1>
      <div className="contact-list">
        <div className="mailto">
          <h3 className="contact-header">Email</h3>
          <ul className="mail-list">
            <li>
              <a href="mailto:lukewaltz@outlook.com">Personal: lukewaltz@outlook.com</a>
            </li>
            <li>
              <a href="mailto:lwaltz@calpoly.edu">School: lwaltz@calpoly.edu</a>
            </li>
            <li>
              <a href="mailto:luke@openpark.us">Work: luke@openpark.us</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3 className="contact-header">Social Media</h3>
          <div className="button-row">
            <div className="media-button">
              <a href="https://github.com/lukewaltz" className="media-link">
                <Image
                  className="media-image"
                  src="../GitHub-Symbol.png"
                  alt="Github logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/luke-waltz-41902a253/"
                className="media-link"
              >
                <Image
                  className="media-image"
                  src="../linkedin_img.png"
                  alt="linkedin logo"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100073967224436"
                className="media-link"
              >
                <Image
                  className="media-image"
                  src="../facebook_img.png"
                  alt="facebook logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      </header>
    )
  }