import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            Hello, my name is Sushil. I’m a Developer and a self taught
            Designer. The overlap of design and development has always been
            fascinating for me since the beginning and that’s when I decided to
            follow my passion and take a leap in this field!
          </p>
          <h2>What am I learning?</h2>
          <p>
            Currently I’m working on procuring depth in ReactJS Javascript and
            then moving onto learning NodeJS and databases. I’ve Invested my
            time learning Gastby and I ended up making my Portfolio Website on
            it!
          </p>{" "}
          <p>
            Apart from coding the web, I’m also into UI/UX and I’ve made a
            concept UX for Instagram and Whatsapp, while highlighting the
            problems faced by the users! Whenever I’m not coding or
            subconsciously thinking of an Design, I’m either preparing for a
            hackathon or helping people code on #teamTanay.
          </p>
          <p>
            I’ve taken a couple of webinars for PCCOER’s ACM chapter and look
            forward to giving more talks on my learning!
          </p>
          <h2>Something interesting about me</h2>
          <p>
            I’ve got quick reflexes and the ability to understand concepts
            quickly. So whenever it comes to athletics or playing a FPS game
            like CSGO, I squish the competition. Also I’m fond of Chess, it
            really pushes my mind to think of the future moves possible and that
            eventually reflects in my work, thinking a couple of steps ahead to
            solve problems which will later arise.
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
