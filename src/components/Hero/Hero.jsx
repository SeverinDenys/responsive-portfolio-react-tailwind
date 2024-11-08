import heroImg from "../../assets/Denys.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import LinkedInIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/CV.pdf";

const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="">
        <img src={heroImg} alt="heroImg" className="rounded-full" />
        <img src={themeIcon} alt="color mode icon" className=" " />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">
          Denys <br />
          Severin
        </h1>
        <h2 className="text-2xl font-semibold">Frontend Developer</h2>
        <span className="text-base font-normal flex">
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://LinkedIn.com/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p>
          Passionate young FrontEnd developer with a desire for
          developing modern React web apps for commercial businesses.
        </p>

        <a
          href={CV}
          className="bg-teal-400 p-2.5 rounded text-white inline-block"
          download
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
