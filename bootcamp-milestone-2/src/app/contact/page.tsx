"use client"
import React from "react"
import style from "./contact.module.css"
import Image from "next/image"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {

  // usestate hooks for form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // hooks for validity checking
  const [isValid, setIsValid] = useState(true);

  // hook for send success
  const [sent, setSent] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  // email with emailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      reply_to: email, 
      message: message,
    };

    emailjs
    .send(
      "contact_service",
      "contact_form",
      templateParams,
      "D0Im7go2ggmwJxEZV"
    )
    .then(
      (result) => {
        console.log(result.text);

        setName("");
        setEmail("");
        setMessage("");
        setIsValid(true);
        setSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleInvalid = (e: any) => {
    e.preventDefault();
    setIsValid(false);
    setSent(false);
  };

  return (
    <header className={style.contact}>
    <h1 className="page-title">Contact Me</h1>
      <div className="contact-list">
        <div className="emailJS-input">
        <form className="contactForm" ref={form} onSubmit={sendEmail} onInvalid={handleInvalid}>
        <p>
          <label className="formLabel" htmlFor="name">Name</label>
          <input
            className="textInput"
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label className="formLabel" htmlFor="email">Email</label>
          <input
            className="textInput"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label className="formLabel" htmlFor="message">Message</label>
          <textarea
            className="textInput"
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </p>
        {/* Display error message when form is invalid */}
        {!isValid && (
          <p style={{ color: "red" }}>All fields must be filled.</p>
        )}
        {/* Display success message when email has been sent */}
        {sent && (
          <p style={{ color: "black" }}>Email has been sent!</p>
        )}
        <input className="buttonInput" type="submit" value="Send" />
        </form>
        </div>

        <div className="mailto">
          {/* <h1 className="contact-header">Email</h1> */}
          {/* <ul className="mail-list">
            <li>
              <a href="mailto:lukewaltz@outlook.com">Personal: lukewaltz@outlook.com</a>
            </li>
            <li>
              <a href="mailto:lwaltz@calpoly.edu">School: lwaltz@calpoly.edu</a>
            </li>
            <li>
              <a href="mailto:luke@openpark.us">Work: luke@openpark.us</a>
            </li>
          </ul> */}
        </div>
        <div className="socials">
          {/* <h3 className="contact-header">Social Media</h3> */}
          <div className="button-row">
            <div className="media-button">
              <a href="https://github.com/lukewaltz" className="media-link">
                <Image
                  className="media-image"
                  src="/GitHub-Symbol.png"
                  width={100}
                  height={100}
                  alt="Github logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/luke-waltz-41902a253/"
                className="media-link"
              >
                <Image
                  className="media-image"
                  src="/linkedin_img.png"
                  width={100}
                  height={100}
                  alt="linkedin logo"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100073967224436"
                className="media-link"
              >
                <Image
                  className="media-image"
                  src="/facebook_img.png"
                  width={100}
                  height={100}
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