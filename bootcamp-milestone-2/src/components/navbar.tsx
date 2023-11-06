import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <nav>
      <h1>
        <Link href="/"> Luke Waltz </Link>
      </h1>
      <ul>
        <li>
          <Link href="/"><div>Home</div></Link>
        </li>
        <li>
          <Link href="/blog"><div>Blog</div></Link>
        </li>
        <li>
          <Link href="/portfolio"><div>Portfolio</div></Link>
        </li>
        <li>
          <Link href="/resume"><div>Resume</div></Link>
        </li>
        <li>
          <Link href="/contact"><div>Contact</div></Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}