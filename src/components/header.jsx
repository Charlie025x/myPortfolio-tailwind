import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

export default function Header() {
  const [headerState, setHeaderState] = useState(false);

  const handleClick = () => {
    setHeaderState((headerState) => !headerState);
  };

  return (
    <>
      <header
        id="header"
        // todo: add nav menu toggle | left-0 left-[-300px]
        className={` fixed bottom-0 select-none ${
          headerState ? "left-0" : "left-[-300px]"
        } top-0 z-10 w-[300px] bg-[#040b14] bg-cover px-4 text-[#ffffff] xl:left-0`}
      >
        {/* <i class="bi bi-list mobile-nav-toggle d-xl-none"></i> */}

        <FontAwesomeIcon
          icon={headerState ? faX : faBars}
          className="fixed right-5 top-5 box-border aspect-square cursor-pointer rounded-full bg-[#149ddd] p-2 text-2xl xl:sr-only"
          onClick={handleClick}
        />

        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              // className="img-fluid rounded-circle"
              className="mx-auto my-4 w-[120px] rounded-full border-8 border-[#2c2f3f]"
            />
            {/* <h1 className="text-light"> */}
            <h1 className="text-center text-2xl">
              <a href="#hero">Charlie Alonso</a>
            </h1>
            {/* <div className="social-links mt-3 text-center"> */}
            <div className="social-links mt-3 text-center">
              {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
              {/* <a href="#" className="facebook"><i className=""></i></a> */}
              {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
              {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="box-border aspect-square rounded-full bg-[#2c2f3f] p-2 hover:bg-[#149ddd]"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="ml-2 box-border aspect-square rounded-full bg-[#2c2f3f] p-2 hover:bg-[#149ddd]"
              />

              {/* <a
                href="https://www.linkedin.com/in/charliealonso002/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/Charlie025x"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <i className="bx bxl-github"></i>
              </a> */}
            </div>
          </div>

          {/* <nav id="navbar" className="nav-menu navbar"> */}
          <nav id="navbar" className="pt-7">
            <ul>
              <li>
                {/* <a href="#hero" className="nav-link scrollto active"> */}
                <a
                  href="#hero"
                  className="block px-4 py-3"
                  onClick={handleClick}
                >
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mt-2 block px-4 py-3"
                  onClick={handleClick}
                >
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="mt-2 block px-4 py-3"
                  onClick={handleClick}
                >
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="mt-2 block px-4 py-3"
                  onClick={handleClick}
                >
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="mt-2 block px-4 py-3"
                  onClick={handleClick}
                >
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
    </>
  );
}
