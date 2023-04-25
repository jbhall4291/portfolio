import React from "react";
import "./Hero.css";
const profilePic = require("../../images/profile_3_square.jpg");

export const Hero = () => {
  return (
    <>
      <section id="hero" className="Hero">
        <div className="Hero__div--container">
          <div className="Hero__div--image-container">
            <img src={profilePic} alt="johnny"></img>
          </div>

          <div className="Hero__div--text-container">
            <h1>Hi, I'm Johnny</h1>

            <p>
              <span>Full-stack software developer</span> by day, pizza
              enthusiast by night 🍕<br></br>I love
              <span> building cool stuff</span> and
              <span> learning new technologies </span>
              🎓<br></br> Whether it's front-end or back-end, I'm always
              <span> up for a challenge</span> 🚀
            </p>

            <p>
              I'm currently looking for an opportunity to contribute to a
              company's success, so if you're looking for a junior developer
              then get in touch & let's make something amazing!
            </p>

            <div className="Hero__div--socials-container">
              <a
                href="https://www.linkedin.com/in/johnny-hall-dev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://www.github.com/jbhall4291"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>

              <a href="mailto:jbhall4291@gmail.com">
                <i className="fa-solid fa-square-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="Hero__div--angled"></div>
    </>
  );
};
