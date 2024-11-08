import heroImg from "../../assets/Denys.png";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import LinkedInIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/CV.pdf";
import { useEffect, useState } from "react";

const Hero = () => {
  const savedIcon = () => {
    const savedTheme = JSON.parse(localStorage.getItem("themeIcon"));
    return savedTheme !== null ? savedTheme : false;
  };

  const [themeIcon, setThemeIcon] = useState(savedIcon);

  const toggleTheme = () => {
    setThemeIcon(!themeIcon);
  };

  useEffect(() => {
    localStorage.setItem("themeIcon", JSON.stringify(themeIcon));
    if (themeIcon) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [themeIcon]);

  // useEffect code should be changed. Direct DOM manipulation in React is not a good

  return (
    <section id="hero" className="">
      <div className="">
        <img src={heroImg} alt="heroImg" className="rounded-full " />
        {!themeIcon ? (
          <img
            src={sunIcon}
            alt="sun icon"
            className="cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <img
            src={moonIcon}
            alt="moon icon"
            className="cursor-pointer"
            onClick={toggleTheme}
          />
        )}
        {/* <img
          src={sunIcon}
          alt="color mode icon"
          className=" "
          onClick={toggleTheme}
        /> */}
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
