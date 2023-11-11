import blogs from "./blogData"
import BlogPreview from "@/components/blogPreview"
import style from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {

  return (
    
    <header className={style.home} >
    <main>
      <h1 className="page-title">Luke Waltz</h1>
        <div className="about">
          <div className="about-image">
            <Image src="/cropped headshot.jpeg" width={300} height={200} alt="Headshot" />
          </div>
          <div className="about-text">
            <p>
              Hi! My name is <strong>Luke Waltz</strong> and I am a third year
              Computer Science student at CalPoly SLO. I was born in Baltimore
              Maryland, and grew up in Golden, Colorado. I have had many hobbies
              and interests over the years, including but not limited to tennis,
              skating, snowboarding, golfing, and recently, surfing. One passion
              that has stayed with me ever since middle school is coding. My
              first exposure to computer science was in middle school when my
              teacher introduced me to <em>Scratch.mit</em>, where I made a
              bootleg Space Invaders game using copyrighted Star Wars avatars.
              From there, my passion and knowledge only grew. I applied to
              CalPoly's Computer Engineering program, but by my sophomore year I
              discovered I have no such passion for Electrical Engineering, and
              that I only wanted to pursue software. I have since changed my
              major to Computer Science, made Dean's List honors three quarters
              in a row, and secured my first internship at OpenPark, a small
              startup out of LA, and joined Hack4Impact Cal Poly as a software
              developer. Welcome to my website!
            </p>
          </div>
      </div>
      
      <Link href="/blog"><div>{blogs.map(blog => 
          <BlogPreview {...blog}/>
        )}</div></Link>
        
    </main>
    </header>
  )
}
